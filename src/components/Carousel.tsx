import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {StarRating} from './Rating/Rating';
import {carouselItems} from '../constants';

// import './owl.css';

const options = {
  // items:3.75,
  nav: false,
  loop: true,
  dots: false,
  responsive: {
    0: {
      items: 1.75,
    },
    768: {
      items: 3,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3.5,
    },
    1500: {
      items: 3.75,
    },
  },
};

export class Carousel extends Component {
  render() {
    return (
      <div>
        <OwlCarousel {...options} className="owl-theme" margin={8}>
          {carouselItems.map((carouselItem) => (
            <div key={carouselItem.id} className="item carousel__item">
              <img src={carouselItem.image} />

              <div className="overlay">
                <p>
                  {carouselItem.seasons} сезони, {carouselItem.year}
                </p>

                <StarRating />

                <h3>{carouselItem.title}</h3>
                <p>{carouselItem.text}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
