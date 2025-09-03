'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { ArrowLeft, TrendingUp, TrendingDown, Globe } from 'lucide-react';
import { getCurrentUser } from '../../../lib/auth-helpers';
import { loadCountryInvestmentData, calculateSinglePerformance, InvestmentData } from '../../../lib/csv-utils';

export default function CountriesPage() {
  const [user, setUser] = useState<any>(null);
  const [selectedCountry, setSelectedCountry] = useState<'usa' | 'brazil'>('usa');
  const [usaData, setUsaData] = useState<{[key: string]: InvestmentData[]}>({});
  const [brazilData, setBrazilData] = useState<{[key: string]: InvestmentData[]}>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuthAndLoadData() {
      try {
        const { user: currentUser } = await getCurrentUser();
        if (!currentUser) {
          router.push('/login');
          return;
        }
        setUser(currentUser);

        // Load USA data
        const [usaETFs, usaStocks, usaBonds, usaREITs] = await Promise.all([
          loadCountryInvestmentData('usa', 'etfs'),
          loadCountryInvestmentData('usa', 'stocks'),
          loadCountryInvestmentData('usa', 'bonds'),
          loadCountryInvestmentData('usa', 'reits')
        ]);

        setUsaData({
          etfs: usaETFs,
          stocks: usaStocks,
          bonds: usaBonds,
          reits: usaREITs
        });

        // Load Brazil data
        const [brazilAcoes, brazilFIIs, brazilBDRs, brazilRendaFixa] = await Promise.all([
          loadCountryInvestmentData('brazil', 'acoes'),
          loadCountryInvestmentData('brazil', 'fiis'),
          loadCountryInvestmentData('brazil', 'bdrs'),
          loadCountryInvestmentData('brazil', 'renda_fixa')
        ]);

        setBrazilData({
          acoes: brazilAcoes,
          fiis: brazilFIIs,
          bdrs: brazilBDRs,
          renda_fixa: brazilRendaFixa
        });

      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }

    checkAuthAndLoadData();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center">
        <div className="text-lg">Loading Global Investments...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const currentData = selectedCountry === 'usa' ? usaData : brazilData;
  const categories = selectedCountry === 'usa' 
    ? [
        { key: 'etfs', name: 'ETFs', description: 'Exchange-Traded Funds', color: 'bg-blue-500' },
        { key: 'stocks', name: 'Stocks', description: 'Individual Companies', color: 'bg-green-500' },
        { key: 'bonds', name: 'Bonds', description: 'Fixed Income Securities', color: 'bg-purple-500' },
        { key: 'reits', name: 'REITs', description: 'Real Estate Investment Trusts', color: 'bg-orange-500' }
      ]
    : [
        { key: 'acoes', name: 'Ações', description: 'Empresas Brasileiras', color: 'bg-green-500' },
        { key: 'fiis', name: 'FIIs', description: 'Fundos Imobiliários', color: 'bg-orange-500' },
        { key: 'bdrs', name: 'BDRs', description: 'Brazilian Depositary Receipts', color: 'bg-blue-500' },
        { key: 'renda_fixa', name: 'Renda Fixa', description: 'Fixed Income Brasil', color: 'bg-purple-500' }
      ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Global Investments</h1>
          </div>
        </div>

        {/* Country Selector */}
        <div className="flex gap-4 mb-8">
          <Button
            variant={selectedCountry === 'usa' ? 'default' : 'outline'}
            onClick={() => setSelectedCountry('usa')}
            className="flex items-center gap-2"
          >
            🇺🇸 United States
          </Button>
          <Button
            variant={selectedCountry === 'brazil' ? 'default' : 'outline'}
            onClick={() => setSelectedCountry('brazil')}
            className="flex items-center gap-2"
          >
            🇧🇷 Brazil
          </Button>
        </div>

        {/* Investment Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => {
            const categoryData = currentData[category.key] || [];
            const totalValue = categoryData.reduce((sum, inv) => sum + parseFloat(inv.current_price), 0);
            const avgPerformance = categoryData.length > 0 
              ? categoryData.reduce((sum, inv) => sum + calculateSinglePerformance(inv), 0) / categoryData.length
              : 0;

            return (
              <Card key={category.key} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Count:</span>
                      <Badge variant="secondary">{categoryData.length}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Value:</span>
                      <span className="text-sm font-medium">
                        {selectedCountry === 'usa' ? '$' : 'R$'}{totalValue.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Avg Performance:</span>
                      <div className={`flex items-center gap-1 ${avgPerformance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {avgPerformance >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        <span className="text-sm font-medium">
                          {avgPerformance >= 0 ? '+' : ''}{avgPerformance.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Investment Lists */}
        <div className="space-y-8">
          {categories.map((category) => {
            const categoryData = currentData[category.key] || [];
            
            if (categoryData.length === 0) return null;

            return (
              <div key={category.key}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  {category.name} - {category.description}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categoryData.map((investment, index) => {
                    const performance = calculateSinglePerformance(investment);
                    const isPositive = performance >= 0;

                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg font-semibold">{investment.symbol}</CardTitle>
                              <p className="text-sm text-gray-600 mt-1">{investment.name}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold">
                                {selectedCountry === 'usa' ? '$' : 'R$'}{parseFloat(investment.current_price).toFixed(2)}
                              </p>
                              <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                <span className="text-xs font-medium">
                                  {isPositive ? '+' : ''}{performance.toFixed(2)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-gray-700 mb-3">{investment.description}</p>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-600">Dividend Yield:</span>
                              <span className="text-xs font-medium">{investment.dividend_yield}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-600">Risk Level:</span>
                              <span className={`text-xs font-medium ${
                                investment.risk_level === 'Low' ? 'text-green-600' :
                                investment.risk_level === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                              }`}>
                                {investment.risk_level}
                              </span>
                            </div>
                          </div>

                          {/* Mini Performance Chart */}
                          <div className="mt-3 pt-3 border-t">
                            <div className="flex items-end justify-between h-8 space-x-1">
                              {[investment.year_2019, investment.year_2020, investment.year_2021, investment.year_2022, investment.year_2023].map((value, idx) => {
                                const height = (parseFloat(value) / Math.max(...[investment.year_2019, investment.year_2020, investment.year_2021, investment.year_2022, investment.year_2023].map(v => parseFloat(v)))) * 100;
                                return (
                                  <div key={idx} className="flex flex-col items-center">
                                    <div 
                                      className={`${category.color} w-3 rounded-t opacity-70`}
                                      style={{ height: `${height}%` }}
                                    ></div>
                                    <span className="text-xs text-gray-400 mt-1">
                                      {(2019 + idx).toString().slice(-2)}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
