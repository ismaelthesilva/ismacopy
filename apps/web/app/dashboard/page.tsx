'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { getCurrentUser } from '../../lib/auth-helpers'
import { loadInvestmentData, calculatePerformance, InvestmentData } from '../../lib/csv-utils'
import AuthButton from '../../components/auth/AuthButton'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3,
  ArrowRight
} from 'lucide-react'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [etfs, setEtfs] = useState<InvestmentData[]>([])
  const [stocks, setStocks] = useState<InvestmentData[]>([])
  const [bonds, setBonds] = useState<InvestmentData[]>([])
  const router = useRouter()

  useEffect(() => {
    checkAuthAndLoadData()
  }, [])

  const checkAuthAndLoadData = async () => {
    const { user } = await getCurrentUser()
    
    if (!user) {
      router.push('/auth/login')
      return
    }
    
    setUser(user)
    
    // Load sample data (we'll create CSV files next)
    try {
      const [etfData, stockData, bondData] = await Promise.all([
        loadInvestmentData('etfs'),
        loadInvestmentData('stocks'),
        loadInvestmentData('bonds')
      ])
      
      setEtfs(calculatePerformance(etfData))
      setStocks(calculatePerformance(stockData))
      setBonds(calculatePerformance(bondData))
    } catch (error) {
      console.error('Error loading investment data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const allInvestments = [...etfs, ...stocks, ...bonds]
  const totalValue = allInvestments.reduce((sum, inv) => sum + parseFloat(inv.current_price), 0)
  const avgPerformance = allInvestments.length > 0 
    ? allInvestments.reduce((sum, inv) => sum + parseFloat(inv.performance || '0'), 0) / allInvestments.length
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Investment Dashboard</h1>
              <p className="text-slate-600">Welcome back, {user?.email}</p>
            </div>
            <AuthButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">
                Across {allInvestments.length} investments
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Performance</CardTitle>
              {avgPerformance >= 0 ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${avgPerformance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {avgPerformance >= 0 ? '+' : ''}{avgPerformance.toFixed(2)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Since last year
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Investment Categories</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Global Investment Types
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Financial Metrics Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Financial Performance Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Quick Overview</CardTitle>
                <CardDescription>Key financial metrics from major investments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Real financial data including Revenue, Net Income, ROE, Net Margin, Net Debt, EBITDA, and dividend percentages for companies that pay dividends.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  onClick={() => router.push('/dashboard/financials')}
                >
                  View Detailed Financial Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Data Coverage</CardTitle>
                <CardDescription>5-year financial history (2019-2023)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Brazilian Stocks:</span>
                    <Badge variant="secondary">8 companies</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>US Stocks:</span>
                    <Badge variant="secondary">8 companies</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Brazilian FIIs:</span>
                    <Badge variant="secondary">7 funds</Badge>
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="font-semibold">Dividend Payers:</span>
                    <Badge variant="outline" className="text-green-600">15+ assets</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Brazilian Stocks */}
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">Brazilian Stocks - Financial Data (2019-2023)</CardTitle>
              <CardDescription>Receita Líquida, Lucro Líquido, ROE, Margem Líquida, Dívida Líquida, EBITDA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Symbol</th>
                      <th className="text-left p-2">Company</th>
                      <th className="text-left p-2">ROE 2023</th>
                      <th className="text-left p-2">Margem Líq. 2023</th>
                      <th className="text-left p-2">Dividend %</th>
                      <th className="text-left p-2">Revenue Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">PETR4</td>
                      <td className="p-2">Petrobras PN</td>
                      <td className="p-2">24.8%</td>
                      <td className="p-2">19.8%</td>
                      <td className="p-2 text-green-600 font-semibold">12.45%</td>
                      <td className="p-2">78% (2019-2023)</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">VALE3</td>
                      <td className="p-2">Vale ON</td>
                      <td className="p-2">13.2%</td>
                      <td className="p-2">16.3%</td>
                      <td className="p-2 text-green-600 font-semibold">18.67%</td>
                      <td className="p-2">15% (2019-2023)</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">ITUB4</td>
                      <td className="p-2">Itaú Unibanco PN</td>
                      <td className="p-2">19.2%</td>
                      <td className="p-2">25.2%</td>
                      <td className="p-2 text-green-600 font-semibold">6.78%</td>
                      <td className="p-2">20% (2019-2023)</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">WEGE3</td>
                      <td className="p-2">WEG ON</td>
                      <td className="p-2">21.3%</td>
                      <td className="p-2">24.9%</td>
                      <td className="p-2 text-green-600 font-semibold">1.23%</td>
                      <td className="p-2">61% (2019-2023)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* US Stocks */}
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm mb-6">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">US Stocks - Financial Data (2019-2023)</CardTitle>
              <CardDescription>Net Revenue, Net Income, ROE, Net Margin, Net Debt, EBITDA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Symbol</th>
                      <th className="text-left p-2">Company</th>
                      <th className="text-left p-2">ROE 2023</th>
                      <th className="text-left p-2">Net Margin 2023</th>
                      <th className="text-left p-2">Dividend %</th>
                      <th className="text-left p-2">Revenue Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">AAPL</td>
                      <td className="p-2">Apple Inc.</td>
                      <td className="p-2">160.6%</td>
                      <td className="p-2">25.3%</td>
                      <td className="p-2 text-green-600 font-semibold">0.43%</td>
                      <td className="p-2">47% (2019-2023)</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">MSFT</td>
                      <td className="p-2">Microsoft Corporation</td>
                      <td className="p-2">40.0%</td>
                      <td className="p-2">34.1%</td>
                      <td className="p-2 text-green-600 font-semibold">0.68%</td>
                      <td className="p-2">68% (2019-2023)</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">NVDA</td>
                      <td className="p-2">NVIDIA Corporation</td>
                      <td className="p-2">36.0%</td>
                      <td className="p-2">48.9%</td>
                      <td className="p-2 text-green-600 font-semibold">0.09%</td>
                      <td className="p-2">458% (2019-2023)</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-2 font-semibold">TSLA</td>
                      <td className="p-2">Tesla Inc.</td>
                      <td className="p-2">28.1%</td>
                      <td className="p-2">15.5%</td>
                      <td className="p-2 text-gray-500">0.00%</td>
                      <td className="p-2">294% (2019-2023)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Global Investments */}
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-slate-900">Global Markets</CardTitle>
                  <CardDescription>USA & Brazil Investments</CardDescription>
                </div>
                <Badge variant="secondary">🌍 2 Countries</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Comprehensive investment data from US and Brazilian markets.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 group-hover:shadow-lg transition-all duration-300"
                onClick={() => router.push('/dashboard/countries')}
              >
                Explore Global Markets
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* ETFs */}
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-slate-900">ETFs</CardTitle>
                  <CardDescription>Exchange-Traded Funds</CardDescription>
                </div>
                <Badge variant="secondary">{etfs.length} funds</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Diversified exposure to various market sectors and indices.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:shadow-lg transition-all duration-300"
                onClick={() => router.push('/dashboard/etfs')}
              >
                View ETFs
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Stocks */}
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-slate-900">Stocks</CardTitle>
                  <CardDescription>Individual Companies</CardDescription>
                </div>
                <Badge variant="secondary">{stocks.length} stocks</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Direct ownership in leading companies across various industries.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 group-hover:shadow-lg transition-all duration-300"
                onClick={() => router.push('/dashboard/stocks')}
              >
                View Stocks
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Bonds */}
          <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-slate-900">Bonds</CardTitle>
                  <CardDescription>Fixed Income Securities</CardDescription>
                </div>
                <Badge variant="secondary">{bonds.length} bonds</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Stable income generation through government and corporate bonds.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 group-hover:shadow-lg transition-all duration-300"
                onClick={() => router.push('/dashboard/bonds')}
              >
                View Bonds
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
