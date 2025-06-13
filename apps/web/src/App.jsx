import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageOne from './pages/landingPages/pageOne/PageOne';
import IndexPage from './pages/landingPages/htmlText/index';
import BJJ40USA from "./pages/landingPages/bjjusa/bjj40usa";
import WorldinJapan from "./pages/landingPages/bjjusa/worldinjapan";
import Performance2 from "./pages/landingPages/bjjusa/Performance2";
import BJJ40BR from './pages/landingPages/bjjbr/BJJ40BR';
import BJJMentoria from './pages/landingPages/bjjbr/BJJMentoria';
import Obrigado from './pages/landingPages/bjjbr/Obrigado';
import ObrigadoUpsell from './pages/landingPages/bjjbr/ObrigadoUpsell';
import Pagamento from './pages/landingPages/br/aguardando-pagamento';
import Processada from './pages/landingPages/br/compra-esta-sendo-processada';
import Concluida from './pages/landingPages/br/compra-concluida';
import './i18n/i18n';
import { Toaster } from 'react-hot-toast';
import './index.css';
import Navbar from './components/Navbar';


function App() {
  return (
    
    <>
      <Toaster position="top-right" />
      <Router>
        {/* Show navbar only on home page */}
        <Routes>
          {/* Home page with Navbar */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          } />

          {/* Pages without Navbar */}
          <Route path="/PageOne" element={<PageOne />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/BJJ40USA" element={<BJJ40USA />} />
          <Route path="/Performance2" element={<Performance2 />} />
          <Route path="/BJJ40BR" element={<BJJ40BR />} />
          <Route path="/BJJMentoria" element={<BJJMentoria />} />
          <Route path="/Obrigado" element={<Obrigado />} />
          <Route path="/ObrigadoUpsell" element={<ObrigadoUpsell />} />
          <Route path="/worldinjapan" element={<WorldinJapan />} />
          <Route path="/aguardando-pagamento" element={<Pagamento />} />
          <Route path="/compra-esta-sendo-processada" element={<Processada />} />
          <Route path="/compra-concluida" element={<Concluida />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;