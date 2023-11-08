import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <>
      <header className='header'>
        <div className='container container-header'>
          <div className='slash'>
            <Link to='/'>
              <img src='src/img/logo.svg' alt='Logotipo Bienes Raices' />
            </Link>

            <nav className='navegation'>
              <Link to='/data/nosotros'>Nosotros</Link>
              <Link to='/data/anuncios'>Anuncios</Link>
              <Link to='/data/blog'>Blog</Link>
              <Link to='/data/contacto'>Contacto</Link>
            </nav>
          </div>
          <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;
