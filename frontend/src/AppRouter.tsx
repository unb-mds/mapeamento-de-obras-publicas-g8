// src/AppRouter.tsx
import { Routes, Route } from 'react-router-dom';
// import NavBar from './components/navbar';
import Noticias from './pages/Noticias';
import Endereco from './pages/Endereco';
import Senha from './pages/Senha';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Footer from './components/footer';

const AppRouter = () => {
  return (
    <>
      {/* <NavBar /> */}
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/senha" element={<Senha />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;