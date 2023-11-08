import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer section'>
      <div className='container footer-container'>
        <nav className='navegation'>
          <Link to='/nosotros'>Nosotros</Link>
          <Link to='/anuncios'>Anuncios</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contacto'>Contacto</Link>
        </nav>
      </div>

      <p className='copyright'>Todos los derechos Reservados 2023 &copy;</p>
    </footer>
  );
}

export default Footer;
