import React from 'react';
import { Carousel } from 'react-bootstrap';

const feather = require('feather-icons');


function Main() {
  setTimeout(() => {
    feather.replace();
  }, 1000);

  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img text="First slide" src="https://previews.123rf.com/images/studioidmi/studioidmi2005/studioidmi200500269/147209798-conjunto-de-cosméticos-decorativos-sobre-un-fondo-de-color.jpg"/>
        <Carousel.Caption>
          <h3>BColección Exclusiva de Maquillaje</h3>
          <p>Descubre una gama deslumbrante de productos de maquillaje que realzan tu belleza natural.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img text="Second slide" src="https://sersaludables.org/wp-content/uploads/2019/07/I_0112.jpg"/>
        <Carousel.Caption>
          <h3>Explora tu Potencial de Belleza</h3>
          <p>Sumérgete en un mundo de creatividad y estilo con nuestra selección de productos de maquillaje de alta calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Third slide" src="https://www.eljardinrojo.com/wp-content/uploads/2020/06/Las-Mejores-Marcas-de-Maquillaje.jpg"/>
        <Carousel.Caption>
          <h3>Belleza sin Límites</h3>
          <p>
          Explora un universo de posibilidades con nuestra colección de maquillaje diseñada para inspirar y empoderar.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="mt-4">
      <h2>Descubre nuestras últimas tendencias y productos para realzar tu belleza natural.</h2>
        
      <p>En nuestro sitio, te sumergirás en el maravilloso mundo del maquillaje, donde la creatividad se une con la belleza para realzar tus rasgos naturales y expresar tu personalidad única.</p>
      <p>Descubre nuestra amplia gama de productos de maquillaje de alta calidad, diseñados para satisfacer las necesidades de cualquier ocasión. Tenemos todo lo que necesitas para lograr el look perfecto.</p>
      </div>
  </>
  );
}

export default Main;