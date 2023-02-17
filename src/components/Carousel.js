import React, {Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { StarRating } from './Rating';

//import './owl.css';  

const options = {
    //items:3.75,
    nav: false,
    loop: true,
    dots: false,
    responsive:{
        0:{
            items:1.75
        },
        768:{
            items:3
        },
        992:{
            items:3
        },
        1200:{
            items:3.5
        },
        1500:{
            items:3.75
        }
    }
};


export class Carousel extends Component {  
    
    render()  
        {  
          return (
          <div>
            <OwlCarousel {...options}
            className="owl-theme"  
            margin={8} >  
                <div className='item carousel__item'>
                    <img src="../img/films/titansAtac.png"/>
                    <div class="overlay">
                        <p>4 сезони, 2013</p>
                        <StarRating/>
                        <h3>Атака Титанів</h3>
                        <p>Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...</p>
                    </div>
                </div>
                <div className='item carousel__item'>
                    <img src="../img/films/joeJoe.png"/>
                    <div class="overlay">
                        <p>5 сезонів, 2012</p>
                        <StarRating/>
                        <h3>Неймовірні пригоди ДжоДжо</h3>
                        <p>Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...</p>
                    </div>
                </div>
                <div className='item carousel__item'>
                    <img src="../img/films/fullmetalAlchemist.png"/>
                    <div class="overlay">
                        <p>4 сезони, 2013</p>
                        <StarRating/>
                        <h3>Fullmetal Alchemist: Brotherhood</h3>
                        <p>The boys spend the entirety of Fullmetal Alchemist Brotherhood searching for a philosopher's stone in....</p>
                    </div>
                </div>
                <div className='item carousel__item'>
                    <img src="../img/films/titansAtac.png"/>
                    <div class="overlay">
                        <p>4 сезони, 2013</p>
                        <StarRating/>
                        <h3>Атака Титанів</h3>
                        <p>Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...</p>
                    </div>
                </div>
                <div className='item carousel__item'>
                    <img src="../img/films/joeJoe.png"/>
                    <div class="overlay">
                        <p>5 сезонів, 2012</p>
                        <StarRating/>
                        <h3>Неймовірні пригоди ДжоДжо</h3>
                        <p>Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...</p>
                    </div>
                </div>
        </OwlCarousel> 
        </div>  
          )  
        }  
      }  

export default Carousel 