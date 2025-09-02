import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from 'react-hot-toast';
import './index.css';

// 1) Pages with Navbar
import Home from './pages/Home';
import Navbar from './components/Navbar';

// 2) Pages without Navbar
import Obrigado from './pages/landingPages/bjjbr/Obrigado';
import ObrigadoUpsell from './pages/landingPages/bjjbr/ObrigadoUpsell';
import Pagamento from './pages/landingPages/br/aguardando-pagamento';
import Processada from './pages/landingPages/br/compra-esta-sendo-processada';
import Concluida from './pages/landingPages/br/compra-concluida';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

// Layouts
const NavbarLayout = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
  </>
);

const ShadcnLayout = () => (
  <div className="min-h-screen bg-background">
    <Outlet />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            {/* 1. Pages with Navbar */}
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Route>

            {/* 2. Pages without Navbar (Landing pages) */}
            <Route path="/Obrigado" element={<Obrigado />} />
            <Route path="/ObrigadoUpsell" element={<ObrigadoUpsell />} />
            <Route path="/aguardando-pagamento" element={<Pagamento />} />
            <Route path="/compra-esta-sendo-processada" element={<Processada />} />
            <Route path="/compra-concluida" element={<Concluida />} />

            {/* 3. App Pages with shadcn/UI components (if needed in future) */}
            <Route path="/app" element={<ShadcnLayout />}>
              {/* Add shadcn/UI app pages as nested routes here if needed */}
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;