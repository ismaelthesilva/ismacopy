# Investment Dashboard Setup Guide

## Overview
Your comprehensive global investment dashboard is now ready! This system provides:
- **Supabase Authentication**: Secure login/signup system
- **Multi-Country Support**: USA and Brazil investment markets
- **Diverse Investment Categories**: 8 different investment types
- **CSV Data Management**: 5-year historical data for each investment
- **Performance Tracking**: Automatic calculations and visualizations
- **Responsive Design**: Works on desktop and mobile

## 🌍 Global Investment Categories

### 🇺🇸 United States Markets
1. **ETFs** - Exchange-Traded Funds (SPY, VTI, VXUS, VEA, VWO, QQQ, IWM, VYM)
2. **Stocks** - Individual Companies (AAPL, MSFT, GOOGL, AMZN, TSLA, NVDA, META, BRK.B)
3. **Bonds** - Fixed Income Securities (TLT, IEF, SHY, LQD, HYG, AGG, BND, TIPS)
4. **REITs** - Real Estate Investment Trusts (VNQ, SCHH, IYR, XLRE, REZ, RWR)

### 🇧🇷 Brazil Markets
1. **Ações** - Brazilian Stocks (PETR4, VALE3, ITUB4, BBDC4, ABEV3, WEGE3, B3SA3, MGLU3)
2. **FIIs** - Fundos de Investimento Imobiliário (HGLG11, XPML11, MXRF11, VISC11, BCFF11, KNRI11, HFOF11)
3. **BDRs** - Brazilian Depositary Receipts (A1PL34, M1SF34, G1OG34, A1MZ34, T1SL34, N1VD34, M1ET34, J1PM34)
4. **Renda Fixa** - Fixed Income Brazil (SELIC, CDI, LTN_2025, NTN-B_2035, LFT_2025, CDB_120, IPCA)

## 🚀 Quick Start

### 1. Supabase Setup

1. **Create a Supabase Project**:
   - Go to [supabase.com](https://supabase.com)
   - Click "New Project"
   - Choose your organization and create a project

2. **Get Your Credentials**:
   - In your Supabase dashboard, go to Settings → API
   - Copy your `Project URL` and `anon public` key

3. **Configure Environment Variables**:
   ```bash
   # Create .env.local file in apps/web/
   cp .env.local.example .env.local
   ```
   
   Then edit `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

4. **Enable Email Authentication**:
   - In Supabase dashboard, go to Authentication → Settings
   - Enable "Email" provider
   - Configure your email settings if needed

### 2. Development Server

```bash
# Start the development server
npm run dev

# The web app will be available at:
# http://localhost:3000
```

## 📁 File Structure

```
apps/web/
├── app/
│   ├── dashboard/           # Protected dashboard area
│   │   ├── page.tsx         # Main dashboard with overview
│   │   ├── countries/page.tsx # Global markets (USA & Brazil)
│   │   ├── etfs/page.tsx    # ETF listings and details
│   │   ├── stocks/page.tsx  # Stock listings and details
│   │   └── bonds/page.tsx   # Bond listings and details
│   ├── login/page.tsx       # Authentication page
│   └── page.tsx             # Landing page
├── components/
│   ├── auth/
│   │   ├── AuthButton.tsx   # User status and logout
│   │   └── LoginForm.tsx    # Login/signup form
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── supabase.ts          # Supabase client configuration
│   ├── auth-helpers.ts      # Authentication utilities
│   └── csv-utils.ts         # CSV parsing and calculations
├── public/data/
│   ├── etfs.csv            # ETF investment data (legacy)
│   ├── stocks.csv          # Stock investment data (legacy)
│   ├── bonds.csv           # Bond investment data (legacy)
│   ├── usa_etfs.csv        # US ETF data
│   ├── usa_stocks.csv      # US Stock data
│   ├── usa_bonds.csv       # US Bond data
│   ├── usa_reits.csv       # US REIT data
│   ├── brazil_acoes.csv    # Brazilian stocks
│   ├── brazil_fiis.csv     # Brazilian REITs
│   ├── brazil_bdrs.csv     # Brazilian DRs
│   └── brazil_renda_fixa.csv # Brazilian fixed income
└── middleware.ts           # Route protection
```

## 🎯 Key Features

### 1. Authentication System
- **Secure Login/Signup**: Email and password authentication
- **Protected Routes**: Dashboard requires authentication
- **Session Management**: Automatic logout and session handling

### 2. Global Investment Markets

#### 🇺🇸 United States
- **ETFs**: 8 diversified funds covering broad market, international, and sector-specific exposure
- **Stocks**: 8 major technology and value companies
- **Bonds**: 8 government and corporate fixed income securities
- **REITs**: 6 real estate investment trusts for property exposure

#### 🇧🇷 Brazil
- **Ações**: 8 leading Brazilian companies across sectors (Oil, Mining, Banking, Tech, Consumer)
- **FIIs**: 7 real estate investment funds (Shopping centers, Logistics, Fund of funds)
- **BDRs**: 8 Brazilian Depositary Receipts of major US companies
- **Renda Fixa**: 7 fixed income instruments (Government bonds, CDI, SELIC, Corporate bonds)

### 3. Advanced Features
- **Country Comparison**: Side-by-side analysis of USA vs Brazil markets
- **Multi-Currency Support**: USD for US investments, BRL for Brazilian investments
- **Risk Assessment**: Low/Medium/High risk categorization
- **Performance Analytics**: 5-year historical performance tracking
- **Sector Diversification**: Coverage across technology, finance, real estate, commodities

### 3. Data Management
- **CSV-Based Storage**: No database required for investment data
- **5-Year Historical Data**: 2019-2023 price history
- **Performance Calculations**: Automatic ROI calculations
- **Easy Updates**: Simply edit CSV files to update data

## 📊 Complete Investment Data Included

### 🇺🇸 United States Markets

#### ETFs (Exchange-Traded Funds)
- **SPY**: S&P 500 ETF Trust - Broad US market exposure
- **VTI**: Vanguard Total Stock Market ETF - Complete US equity market
- **VXUS**: Vanguard Total International Stock ETF - Global diversification
- **VEA**: Vanguard FTSE Developed Markets ETF - International developed markets
- **VWO**: Vanguard FTSE Emerging Markets ETF - Emerging market exposure
- **QQQ**: Invesco QQQ Trust - Nasdaq 100 technology focus
- **IWM**: iShares Russell 2000 ETF - Small-cap companies
- **VYM**: Vanguard High Dividend Yield ETF - High dividend stocks

#### Stocks (Individual Companies)
- **AAPL**: Apple Inc. - Consumer electronics giant
- **MSFT**: Microsoft Corporation - Software and cloud leader
- **GOOGL**: Alphabet Inc. - Search and advertising leader
- **AMZN**: Amazon.com Inc. - E-commerce and cloud giant
- **TSLA**: Tesla Inc. - Electric vehicle pioneer
- **NVDA**: NVIDIA Corporation - AI and graphics leader
- **META**: Meta Platforms Inc. - Social media and metaverse
- **BRK.B**: Berkshire Hathaway Inc. - Warren Buffett's conglomerate

#### Bonds (Fixed Income Securities)
- **TLT**: iShares 20+ Year Treasury Bond ETF - Long-term government bonds
- **IEF**: iShares 7-10 Year Treasury Bond ETF - Intermediate-term bonds
- **SHY**: iShares 1-3 Year Treasury Bond ETF - Short-term stability
- **LQD**: iShares Investment Grade Corporate Bond ETF - Corporate bonds
- **HYG**: iShares High Yield Corporate Bond ETF - High-yield bonds
- **AGG**: iShares Core U.S. Aggregate Bond ETF - Broad bond market
- **BND**: Vanguard Total Bond Market ETF - Complete bond exposure
- **TIPS**: iShares TIPS Bond ETF - Inflation-protected securities

#### REITs (Real Estate Investment Trusts)
- **VNQ**: Vanguard Real Estate ETF - Diversified real estate
- **SCHH**: Schwab U.S. REIT ETF - Low-cost real estate exposure
- **IYR**: iShares U.S. Real Estate ETF - Comprehensive real estate
- **XLRE**: Real Estate Select Sector SPDR Fund - S&P 500 real estate
- **REZ**: iShares Residential Real Estate ETF - Residential focus
- **RWR**: SPDR Dow Jones REIT ETF - Broad REIT market

### 🇧🇷 Brazilian Markets

#### Ações (Brazilian Stocks)
- **PETR4**: Petrobras PN - Oil and gas giant
- **VALE3**: Vale ON - Mining and metals leader
- **ITUB4**: Itaú Unibanco PN - Largest private bank
- **BBDC4**: Bradesco PN - Major banking institution
- **ABEV3**: Ambev ON - Beverage leader
- **WEGE3**: WEG ON - Industrial equipment
- **B3SA3**: B3 ON - Brazilian stock exchange
- **MGLU3**: Magazine Luiza ON - E-commerce retailer

#### FIIs (Fundos de Investimento Imobiliário)
- **HGLG11**: CSHG Logística FII - Logistics warehouses
- **XPML11**: XP Malls FII - Shopping centers
- **MXRF11**: Maxi Renda FII - Fund of funds
- **VISC11**: Vinci Shopping Centers FII - Premium shopping centers
- **BCFF11**: BC Fundos FII - Diversified fund of funds
- **KNRI11**: Kinea Renda Imobiliária FII - Corporate real estate
- **HFOF11**: Hedge Top FOF FII - Real estate fund of funds

#### BDRs (Brazilian Depositary Receipts)
- **A1PL34**: Apple Inc. BDR - Brazilian Apple shares
- **M1SF34**: Microsoft Corp. BDR - Brazilian Microsoft shares
- **G1OG34**: Alphabet Inc. BDR - Brazilian Google shares
- **A1MZ34**: Amazon.com Inc. BDR - Brazilian Amazon shares
- **T1SL34**: Tesla Inc. BDR - Brazilian Tesla shares
- **N1VD34**: NVIDIA Corp. BDR - Brazilian NVIDIA shares
- **M1ET34**: Meta Platforms BDR - Brazilian Meta shares
- **J1PM34**: JPMorgan Chase BDR - Brazilian JPMorgan shares

#### Renda Fixa (Fixed Income Brazil)
- **SELIC**: Taxa Selic - Brazilian basic interest rate
- **CDI**: Certificado de Depósito Interbancário - Interbank deposit rate
- **LTN_2025**: Letra do Tesouro Nacional 2025 - Government prefixed bond
- **NTN-B_2035**: Nota do Tesouro Nacional IPCA+ 2035 - Inflation-indexed bond
- **LFT_2025**: Letra Financeira do Tesouro 2025 - Post-fixed government bond
- **CDB_120**: CDB 120% CDI - Bank deposit certificate
- **IPCA**: Índice de Preços ao Consumidor Amplo - Brazilian inflation index

## 🔧 Customization

### Adding New Investments

1. **Edit Country-Specific CSV Files** in `public/data/`:
   
   **For USA investments:**
   ```csv
   # usa_stocks.csv example
   symbol,name,category,description,year_2019,year_2020,year_2021,year_2022,year_2023,current_price,dividend_yield,expense_ratio,risk_level,country
   NVDA,NVIDIA Corporation,Stock,Leading AI and graphics processing company,180.00,530.00,320.00,146.00,480.00,820.00,0.09,,High,USA
   ```
   
   **For Brazil investments:**
   ```csv
   # brazil_acoes.csv example
   symbol,name,category,description,year_2019,year_2020,year_2021,year_2022,year_2023,current_price,dividend_yield,expense_ratio,risk_level,country
   BBAS3,Banco do Brasil ON,Ação,Maior banco público do Brasil,45.67,32.45,52.34,47.89,41.23,38.67,8.45,,Medium,Brazil
   ```

2. **Required Fields**:
   - `symbol`: Stock/ETF ticker symbol
   - `name`: Full company/fund name
   - `category`: ETF, Stock, Bond, REIT, Ação, FII, BDR, or Renda Fixa
   - `description`: Brief description in appropriate language
   - `year_2019` to `year_2023`: Historical prices
   - `current_price`: Current market price
   - `dividend_yield`: Annual dividend yield percentage
   - `expense_ratio`: (Optional) Management fee percentage
   - `risk_level`: Low, Medium, or High
   - `country`: USA or Brazil

3. **Currency Considerations**:
   - USA investments: Prices in USD
   - Brazil investments: Prices in BRL (Brazilian Real)

### Multi-Language Support
The dashboard automatically adapts to the selected country:
- **USA**: English descriptions and USD currency
- **Brazil**: Portuguese descriptions and BRL currency

### Styling Customization

The dashboard uses Tailwind CSS with a gradient design:
- **ETFs**: Blue gradient theme
- **Stocks**: Green gradient theme  
- **Bonds**: Amber/Orange gradient theme

## 🛡️ Security Features

### Route Protection
- Middleware automatically redirects unauthenticated users
- Dashboard routes are protected
- Public pages (home, about, contact) remain accessible

### Data Security
- No sensitive financial data stored in database
- Authentication handled by Supabase
- Client-side data fetching from public CSV files

## 🚀 Next Steps

### 1. Production Deployment
```bash
# Build for production
npm run build

# Deploy to Vercel, Netlify, or your preferred platform
```

### 2. Enhanced Features (Optional)
- Add real-time stock price APIs
- Implement portfolio tracking
- Add chart visualizations with Recharts
- Create investment calculators
- Add news feed integration

### 3. Data Updates
- Update CSV files monthly/quarterly
- Consider API integration for real-time data
- Add more investment categories

## 📱 Usage Instructions

### For Users
1. **Visit**: http://localhost:3000 (development)
2. **Sign Up**: Create account with email/password
3. **Login**: Access your dashboard
4. **Explore**: Browse ETFs, Stocks, and Bonds
5. **Analyze**: View performance metrics and charts

### For Administrators
1. **Update Data**: Edit CSV files in `public/data/`
2. **Monitor Users**: Check Supabase dashboard
3. **Deploy Updates**: Push changes to production

## 🆘 Troubleshooting

### Common Issues

1. **Authentication Not Working**:
   - Check `.env.local` file exists and has correct Supabase credentials
   - Verify Supabase project settings allow email authentication

2. **CSV Data Not Loading**:
   - Ensure CSV files are in `public/data/` directory
   - Check CSV format matches expected structure
   - Verify file permissions

3. **Build Errors**:
   - Run `npm install` to ensure all dependencies are installed
   - Check TypeScript errors in console
   - Verify Next.js configuration

4. **Middleware Issues**:
   - Check Supabase SSR package is installed
   - Verify middleware.ts is in root directory
   - Test authentication flow in development

## 📞 Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Supabase setup and credentials
3. Ensure all required packages are installed
4. Review the file structure matches the expected layout

---

**🎉 Your investment dashboard is ready to use!**

Start by setting up your Supabase credentials and you'll have a fully functional investment tracking system with authentication, data visualization, and portfolio management capabilities.
