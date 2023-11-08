import { Link } from 'react-router-dom';

function DataHeader() {
  return (
    <>
      <header className='header'>
        <div className='container container-header'>
          <div className='slash'>
            <Link to='/'>
              <img src='../src/img/logo.svg' alt='Logotipo Bienes Raices' />
            </Link>

            <nav className='navegation'>
              <Link to='/data/nosotros'>Nosotros</Link>
              <Link to='/data/anuncios'>Anuncios</Link>
              <Link to='/data/blog'>Blog</Link>
              <Link to='/data/contacto'>Contacto</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default DataHeader;
