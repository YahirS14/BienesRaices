import { Link } from 'react-router-dom';

function HomeData() {
  return (
    <>
      <main className='container section'>
        <h1>Más Sobre Nosotros</h1>

        <div className='icons-us'>
          <div className='icon'>
            <img
              src='src/img/icono1.svg'
              alt='Icono Seguridad'
              loading='lazy'
            />
            <h3>Seguridad</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at
              laboriosam ex iste vel temporibus nobis! Obcaecati, soluta?
              Laboriosam, quod ut nihil reiciendis optio pariatur cupiditate
              ipsa id eius inventore?
            </p>
          </div>
          <div className='icon'>
            <img src='src/img/icono2.svg' alt='Icono Precio' loading='lazy' />
            <h3>Precio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at
              laboriosam ex iste vel temporibus nobis! Obcaecati, soluta?
              Laboriosam, quod ut nihil reiciendis optio pariatur cupiditate
              ipsa id eius inventore?
            </p>
          </div>
          <div className='icon'>
            <img src='src/img/icono3.svg' alt='Icono Tiempo' loading='lazy' />
            <h3>A Tiempo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas at
              laboriosam ex iste vel temporibus nobis! Obcaecati, soluta?
              Laboriosam, quod ut nihil reiciendis optio pariatur cupiditate
              ipsa id eius inventore?
            </p>
          </div>
        </div>
      </main>

      <section className='container section'>
        <h2>Casas y Depas en Venta</h2>
        <div className='advertisements-container'>
          <div className='advertisements'>
            <picture>
              <source srcSet='/build/img/anuncio1.avif' type='image/avif' />
              <source srcSet='/build/img/anuncio1.webp' type='image/webp' />
              <img
                loading='lazy'
                width='200'
                height='300'
                src='/build/img/anuncio1.jpg'
                alt='anuncuio'
              />
            </picture>
            <div className='advertisement-content'>
              <h3>Casa de Lujo en el Lago</h3>
              <p>
                Casa en lago con excelente vista, acabados de lujo a un
                excelente precio
              </p>
              <p className='price'>$3,000,000</p>

              <ul className='characteristics-icon'>
                <li>
                  <img
                    src='/src/img/icono_wc.svg'
                    alt='icono wc'
                    loading='lazy'
                  />
                  <p>4</p>
                </li>
                <li>
                  <img
                    src='/src/img/icono_estacionamiento.svg'
                    alt='icono estacionamiento'
                    loading='lazy'
                  />
                  <p>3</p>
                </li>
                <li>
                  <img
                    src='/src/img/icono_dormitorio.svg'
                    alt='icono dormitorio'
                    loading='lazy'
                  />
                  <p>4</p>
                </li>
              </ul>

              <Link to='/data/anuncios' className='button yellow-button'>
                Ver Propiedad
              </Link>
            </div>
          </div>

          <div className='advertisements'>
            <picture>
              <source srcSet='/build/img/anuncio2.avif' type='image/avif' />
              <source srcSet='/build/img/anuncio2.webp' type='image/webp' />
              <img
                loading='lazy'
                width='200'
                height='300'
                src='/build/img/anuncio2.jpg'
                alt='anuncuio'
              />
            </picture>
            <div className='advertisement-content'>
              <h3>Casa de Lujo en la Playa</h3>
              <p>Casa en la playa con acabados en marmol</p>
              <p className='price'>$6,000,000</p>

              <ul className='characteristics-icon'>
                <li>
                  <img
                    src='/src/img/icono_wc.svg'
                    alt='icono wc'
                    loading='lazy'
                  />
                  <p>6</p>
                </li>
                <li>
                  <img
                    src='/src/img/icono_estacionamiento.svg'
                    alt='icono estacionamiento'
                    loading='lazy'
                  />
                  <p>4</p>
                </li>
                <li>
                  <img
                    src='/src/img/icono_dormitorio.svg'
                    alt='icono dormitorio'
                    loading='lazy'
                  />
                  <p>5</p>
                </li>
              </ul>

              <Link to='/data/anuncios' className='button yellow-button'>
                Ver Propiedad
              </Link>
            </div>
          </div>

          <div className='advertisements'>
            <picture>
              <source srcSet='/build/img/anuncio3.avif' type='image/avif' />
              <source srcSet='/build/img/anuncio3.webp' type='image/webp' />
              <img
                loading='lazy'
                width='200'
                height='300'
                src='/build/img/anuncio3.jpg'
                alt='anuncuio'
              />
            </picture>
            <div className='advertisement-content'>
              <h3>Cabaña de Lujo</h3>
              <p>Lujosa cabaña en el bosque con piscina privada</p>
              <p className='price'>$3,000,000</p>

              <ul className='characteristics-icon'>
                <li>
                  <img
                    src='/src/img/icono_wc.svg'
                    alt='icono wc'
                    loading='lazy'
                  />
                  <p>6</p>
                </li>
                <li>
                  <img
                    src='/src/img/icono_estacionamiento.svg'
                    alt='icono estacionamiento'
                    loading='lazy'
                  />
                  <p>6</p>
                </li>
                <li>
                  <img
                    src='/src/img/icono_dormitorio.svg'
                    alt='icono dormitorio'
                    loading='lazy'
                  />
                  <p>8</p>
                </li>
              </ul>

              <Link to='/data/anuncios' className='button yellow-button'>
                Ver Propiedad
              </Link>
            </div>
          </div>
        </div>

        <div className='see-all'>
          <Link to='/data/anuncios' className='button green-button'>
            Ver Todas
          </Link>
        </div>
      </section>

      <section className='contact-img'>
        <h2>Encuentra la casa de tus sueños</h2>
        <p>
          Llena el formulario de contacto y un asesor se pondrá en contacto
          contigo a la brevedad
        </p>
        <Link to='/data/contacto' className='yellow-button-inline'>
          Contactános
        </Link>
      </section>

      <div className='container section under-section'>
        <section className='blog'>
          <h3>Nuestro Blog</h3>
          <article className='enter-blog'>
            <div className='image'>
              <picture>
                <source srcSet='/build/img/blog1.avif' type='image/avif' />
                <source srcSet='/build/img/blog1.webp' type='image/webp' />
                <img
                  loading='lazy'
                  width='200'
                  height='300'
                  src='/build/img/blog1.jpg'
                  alt='imagen blog'
                />
              </picture>
            </div>

            <div className='enter-text'>
              <Link to='/data/contacto'>
                <h4>Terraza en el techo de tu casa</h4>
                <p>
                  Escrito el: <span>18/11/2023</span> por: <span>Admin</span>
                </p>
                <p>
                  Consejos para construir una terraza en el techo de tu casa con
                  los mejores materiales y ahorrando dinero.
                </p>
              </Link>
            </div>
          </article>

          <article className='enter-blog'>
            <div className='image'>
              <picture>
                <source srcSet='/build/img/blog2.avif' type='image/avif' />
                <source srcSet='/build/img/blog2.webp' type='image/webp' />
                <img
                  loading='lazy'
                  width='200'
                  height='300'
                  src='/build/img/blog2.jpg'
                  alt='imagen blog'
                />
              </picture>
            </div>

            <div className='enter-text'>
              <Link to='/data/contacto'>
                <h4>Guía para la decoración de tu hogar</h4>
                <p>
                  Escrito el: <span>18/11/2023</span> por: <span>Admin</span>
                </p>
                <p>
                  Maximiza el espacio en tu hogar con esta guía, aprende a
                  combinar muebles y colores para darle vida a tu espacio
                </p>
              </Link>
            </div>
          </article>
        </section>

        <section className='testimonials'>
          <h3>Testimoniales</h3>
          <div className='testimonial'>
            <blockquote>
              El personal se comportó de excelente forma, muy buena atención y
              la casa que me ofrecieron cumple todas mis expectativas.
            </blockquote>
            <p>- Yahir Ortiz</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomeData;
