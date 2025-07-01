import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from 'react-hot-toast';
import './index.css';

// 1) Pages with Navbar
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';

// 2) Pages without Navbar
import PageOne from './pages/landingPages/pageOne/PageOne';
import IndexPage from './pages/landingPages/htmlText/index';
import Obrigado from './pages/landingPages/bjjbr/Obrigado';
import ObrigadoUpsell from './pages/landingPages/bjjbr/ObrigadoUpsell';
import Pagamento from './pages/landingPages/br/aguardando-pagamento';
import Processada from './pages/landingPages/br/compra-esta-sendo-processada';
import Concluida from './pages/landingPages/br/compra-concluida';
import About from './pages/About';
import Contact from './pages/Contact';

// Layouts
const NavbarLayout = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
  </>
);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            {/* Pages with Navbar */}
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              {/* Add more pages with navbar here if needed */}
            </Route>

            {/* Pages without Navbar */}
            <Route path="/PageOne" element={<PageOne />} />
            <Route path="/index" element={<IndexPage />} />
            <Route path="/Obrigado" element={<Obrigado />} />
            <Route path="/ObrigadoUpsell" element={<ObrigadoUpsell />} />
            <Route path="/aguardando-pagamento" element={<Pagamento />} />
            <Route path="/compra-esta-sendo-processada" element={<Processada />} />
            <Route path="/compra-concluida" element={<Concluida />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;