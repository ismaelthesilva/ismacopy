import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Updated path
import Home from './pages/Home';
import Performance from './pages/Performance';
import Techniques from './pages/Techniques';
import Diet from './pages/Diet';
import Rankings from './pages/Rankings';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
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
import { Outlet } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import './i18n/i18n';
import { Toaster } from 'react-hot-toast';
import './index.css';

function LayoutWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function LayoutWithoutNavbar() {
  return <Outlet />;
}

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          {/* Protected Routes */}
          <Route element={<LayoutWithNavbar />}>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Pages with Navbar */}
          <Route element={<LayoutWithNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/rankings" element={<Rankings />} />
          </Route>

          {/* Pages without Navbar */}
          <Route element={<LayoutWithoutNavbar />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;