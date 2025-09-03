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
