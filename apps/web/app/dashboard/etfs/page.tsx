'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { getCurrentUser } from '../../../lib/auth-helpers';
import { loadInvestmentData, calculateSinglePerformance, InvestmentData } from '../../../lib/csv-utils';

export default function ETFsPage() {
  const [user, setUser] = useState<any>(null);
  const [etfData, setEtfData] = useState<InvestmentData[]>([]);
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

        // Load ETF data
        const data = await loadInvestmentData('etfs');
        setEtfData(data);
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-lg">Loading ETFs...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
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
          <h1 className="text-3xl font-bold text-gray-900">Exchange-Traded Funds (ETFs)</h1>
        </div>

        {/* ETF Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {etfData.map((etf, index) => {
            const performance = calculateSinglePerformance(etf);
            const isPositive = performance >= 0;

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-semibold">{etf.symbol}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{etf.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">${parseFloat(etf.current_price).toFixed(2)}</p>
                      <div className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span className="text-sm font-medium">
                          {isPositive ? '+' : ''}{performance.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">{etf.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Dividend Yield:</span>
                      <span className="text-sm font-medium">{etf.dividend_yield}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Expense Ratio:</span>
                      <span className="text-sm font-medium">{etf.expense_ratio}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Risk Level:</span>
                      <span className={`text-sm font-medium ${
                        etf.risk_level === 'Low' ? 'text-green-600' :
                        etf.risk_level === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {etf.risk_level}
                      </span>
                    </div>
                  </div>

                  {/* 5-Year Performance Chart (Simple) */}
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">5-Year Performance</h4>
                    <div className="flex items-end justify-between h-16 space-x-1">
                      {[etf.year_2019, etf.year_2020, etf.year_2021, etf.year_2022, etf.year_2023].map((value, idx) => {
                        const height = (parseFloat(value) / Math.max(...[etf.year_2019, etf.year_2020, etf.year_2021, etf.year_2022, etf.year_2023].map(v => parseFloat(v)))) * 100;
                        return (
                          <div key={idx} className="flex flex-col items-center">
                            <div 
                              className="bg-blue-500 w-8 rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                            <span className="text-xs text-gray-500 mt-1">
                              {2019 + idx}
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

        {/* Summary Stats */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>ETF Portfolio Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{etfData.length}</p>
                <p className="text-sm text-gray-600">Total ETFs</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {(etfData.reduce((sum, etf) => sum + parseFloat(etf.dividend_yield), 0) / etfData.length).toFixed(2)}%
                </p>
                <p className="text-sm text-gray-600">Avg Dividend Yield</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {(etfData.reduce((sum, etf) => sum + parseFloat(etf.expense_ratio || '0'), 0) / etfData.length).toFixed(3)}%
                </p>
                <p className="text-sm text-gray-600">Avg Expense Ratio</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">
                  {(etfData.reduce((sum, etf) => sum + calculateSinglePerformance(etf), 0) / etfData.length).toFixed(2)}%
                </p>
                <p className="text-sm text-gray-600">Avg 5Y Performance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
