import Papa from 'papaparse'

export interface InvestmentData {
  symbol: string
  name: string
  category: 'ETF' | 'Stock' | 'Bond' | 'REIT' | 'Ação' | 'FII' | 'BDR' | 'Renda Fixa'
  description: string
  year_2019: string
  year_2020: string
  year_2021: string
  year_2022: string
  year_2023: string
  current_price: string
  dividend_yield: string
  expense_ratio?: string
  risk_level: 'Low' | 'Medium' | 'High'
  performance?: string
  country: 'USA' | 'Brazil'
}

export async function parseCSVData(csvContent: string): Promise<InvestmentData[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(csvContent, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          reject(results.errors)
        } else {
          resolve(results.data as InvestmentData[])
        }
      },
      error: (error: any) => {
        reject(error)
      }
    })
  })
}

export async function loadInvestmentData(category: 'etfs' | 'stocks' | 'bonds'): Promise<InvestmentData[]> {
  try {
    const response = await fetch(`/data/${category}.csv`)
    const csvContent = await response.text()
    return await parseCSVData(csvContent)
  } catch (error) {
    console.error(`Error loading ${category} data:`, error)
    return []
  }
}

export async function loadCountryInvestmentData(country: 'usa' | 'brazil', category: string): Promise<InvestmentData[]> {
  try {
    const response = await fetch(`/data/${country}_${category}.csv`)
    const csvContent = await response.text()
    return await parseCSVData(csvContent)
  } catch (error) {
    console.error(`Error loading ${country} ${category} data:`, error)
    return []
  }
}

export function calculatePerformance(data: InvestmentData[]) {
  return data.map(investment => {
    const current = parseFloat(investment.current_price)
    const yearAgo = parseFloat(investment.year_2023)
    const performance = ((current - yearAgo) / yearAgo) * 100
    
    return {
      ...investment,
      performance: performance.toFixed(2)
    }
  })
}

export function calculateSinglePerformance(investment: InvestmentData): number {
  const current = parseFloat(investment.current_price)
  const yearAgo = parseFloat(investment.year_2023)
  return ((current - yearAgo) / yearAgo) * 100
}
