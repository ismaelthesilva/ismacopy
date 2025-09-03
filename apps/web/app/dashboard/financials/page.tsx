'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import { loadBrazilianStocks, loadUSAStocks, loadBrazilianFIIs, calculateFinancialMetrics, InvestmentData } from '../../../lib/csv-utils'
import { TrendingUp, TrendingDown, DollarSign, Percent, BarChart3 } from 'lucide-react'

export default function FinancialAnalysisPage() {
  const [brazilianStocks, setBrazilianStocks] = useState<any[]>([])
  const [usaStocks, setUsaStocks] = useState<any[]>([])
  const [brazilianFIIs, setBrazilianFIIs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFinancialData()
  }, [])

  const loadFinancialData = async () => {
    try {
      const [brStocks, usStocks, brFIIs] = await Promise.all([
        loadBrazilianStocks(),
        loadUSAStocks(),
        loadBrazilianFIIs()
      ])
      
      setBrazilianStocks(calculateFinancialMetrics(brStocks))
      setUsaStocks(calculateFinancialMetrics(usStocks))
      setBrazilianFIIs(calculateFinancialMetrics(brFIIs))
    } catch (error) {
      console.error('Error loading financial data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatCurrency = (value: string) => {
    const num = parseFloat(value)
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(1)}B`
    }
    return `$${num.toFixed(2)}M`
  }

  const formatPercentage = (value: string) => {
    return `${parseFloat(value).toFixed(1)}%`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Financial Analysis Dashboard</h1>
              <p className="text-slate-600">Comprehensive financial metrics for stocks and FIIs (2019-2023)</p>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              Last 5 Years Data
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        
        {/* Brazilian Stocks Analysis */}
        <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-green-600" />
              Brazilian Stocks - Detailed Financial Metrics
            </CardTitle>
            <CardDescription>
              Revenue, Net Income, ROE, Net Margin, Net Debt, EBITDA, and Dividend Analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Symbol</th>
                    <th className="text-left p-3 font-semibold">Company</th>
                    <th className="text-left p-3 font-semibold">Revenue 2023 (M)</th>
                    <th className="text-left p-3 font-semibold">Net Income 2023 (M)</th>
                    <th className="text-left p-3 font-semibold">ROE 2023</th>
                    <th className="text-left p-3 font-semibold">Net Margin 2023</th>
                    <th className="text-left p-3 font-semibold">EBITDA 2023 (M)</th>
                    <th className="text-left p-3 font-semibold">Dividend %</th>
                    <th className="text-left p-3 font-semibold">Revenue Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {brazilianStocks.map((stock, index) => (
                    <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-semibold text-blue-600">{stock.symbol}</td>
                      <td className="p-3">{stock.name}</td>
                      <td className="p-3">{formatCurrency(stock.receita_liquida_2023 || '0')}</td>
                      <td className="p-3">{formatCurrency(stock.lucro_liquido_2023 || '0')}</td>
                      <td className="p-3 font-semibold text-green-600">{formatPercentage(stock.roe_2023 || '0')}</td>
                      <td className="p-3">{formatPercentage(stock.margem_liquida_2023 || '0')}</td>
                      <td className="p-3">{formatCurrency(stock.ebitda_2023 || '0')}</td>
                      <td className="p-3 font-semibold text-green-600">{formatPercentage(stock.dividend_percentage || '0')}</td>
                      <td className="p-3">
                        <span className={`font-semibold ${parseFloat(stock.calculated_revenue_growth) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.calculated_revenue_growth}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* US Stocks Analysis */}
        <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              US Stocks - Detailed Financial Metrics
            </CardTitle>
            <CardDescription>
              Major US Companies Financial Performance Analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Symbol</th>
                    <th className="text-left p-3 font-semibold">Company</th>
                    <th className="text-left p-3 font-semibold">Revenue 2023 (B)</th>
                    <th className="text-left p-3 font-semibold">Net Income 2023 (B)</th>
                    <th className="text-left p-3 font-semibold">ROE 2023</th>
                    <th className="text-left p-3 font-semibold">Net Margin 2023</th>
                    <th className="text-left p-3 font-semibold">EBITDA 2023 (B)</th>
                    <th className="text-left p-3 font-semibold">Dividend %</th>
                    <th className="text-left p-3 font-semibold">Revenue Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {usaStocks.map((stock, index) => (
                    <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-semibold text-blue-600">{stock.symbol}</td>
                      <td className="p-3">{stock.name}</td>
                      <td className="p-3">{formatCurrency(stock.receita_liquida_2023 || '0')}</td>
                      <td className="p-3">{formatCurrency(stock.lucro_liquido_2023 || '0')}</td>
                      <td className="p-3 font-semibold text-green-600">{formatPercentage(stock.roe_2023 || '0')}</td>
                      <td className="p-3">{formatPercentage(stock.margem_liquida_2023 || '0')}</td>
                      <td className="p-3">{formatCurrency(stock.ebitda_2023 || '0')}</td>
                      <td className="p-3 font-semibold text-green-600">{formatPercentage(stock.dividend_percentage || '0')}</td>
                      <td className="p-3">
                        <span className={`font-semibold ${parseFloat(stock.calculated_revenue_growth) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {stock.calculated_revenue_growth}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Brazilian FIIs Analysis */}
        <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-purple-600" />
              Brazilian Real Estate Investment Funds (FIIs)
            </CardTitle>
            <CardDescription>
              Real Estate Investment Funds Financial Performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left p-3 font-semibold">Symbol</th>
                    <th className="text-left p-3 font-semibold">Fund Name</th>
                    <th className="text-left p-3 font-semibold">Revenue 2023 (M)</th>
                    <th className="text-left p-3 font-semibold">Net Income 2023 (M)</th>
                    <th className="text-left p-3 font-semibold">ROE 2023</th>
                    <th className="text-left p-3 font-semibold">Net Margin 2023</th>
                    <th className="text-left p-3 font-semibold">Dividend Yield</th>
                  </tr>
                </thead>
                <tbody>
                  {brazilianFIIs.map((fii, index) => (
                    <tr key={index} className="border-b hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-semibold text-purple-600">{fii.symbol}</td>
                      <td className="p-3">{fii.name}</td>
                      <td className="p-3">{formatCurrency(fii.receita_liquida_2023 || '0')}</td>
                      <td className="p-3">{formatCurrency(fii.lucro_liquido_2023 || '0')}</td>
                      <td className="p-3 font-semibold text-green-600">{formatPercentage(fii.roe_2023 || '0')}</td>
                      <td className="p-3">{formatPercentage(fii.margem_liquida_2023 || '0')}</td>
                      <td className="p-3 font-semibold text-green-600">{formatPercentage(fii.dividend_percentage || '0')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  )
}
