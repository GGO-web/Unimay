import React from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Heading } from '@components/Heading/Heading';

import { NavigationPage } from '@components/Navigation/NavigationPage';
import { Sidenav } from '@components/Navigation/Sidenav';
import { TeamPerson } from '@components/TeamPerson/TeamPerson';

import photo_1 from '../../assets/photo/1.png';
import photo_2 from '../../assets/photo/2.png';
import photo_3 from '../../assets/photo/3.png';
import photo_4 from '../../assets/photo/4.png';
import photo_5 from '../../assets/photo/5.png';

const navPageNames = [
  {
    name: 'Головна',
    link: '/'
  },
  {
    name: 'Команда',
    link: '/team'
  }
];

const persons = [
  {
    photo: photo_1,
    name: 'Олена Проуторова',
    profession: 'акторка озвучення',
    city: 'м. Дніпро',
    age: '24 роки',
    facebook: 'https://uk-ua.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/uk-UA/'
  },
  {
    photo: photo_2,
    name: 'Сова Андрій',
    profession: 'звукорежисер та дабер',
    city: 'м. Краматорськ',
    age: '22 роки',
    facebook: 'https://uk-ua.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/uk-UA/'
  },
  {
    photo: photo_3,
    name: 'Чигирик Ольга',
    profession: 'акторка озвучення/сабер(перекладач)',
    city: 'м. Львів',
    age: '18 роки',
    facebook: 'https://uk-ua.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/uk-UA/'
  },
  {
    photo: photo_4,
    name: 'Денис Проуторов',
    profession: 'актор озвучення',
    city: 'м. Дніпро',
    age: '30 роки',
    facebook: 'https://uk-ua.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/uk-UA/'
  },
  {
    photo: photo_5,
    name: 'Чернов Микита',
    profession: 'актор озвучення, звукоінженер',
    city: 'м.Харків',
    age: '22 роки',
    facebook: 'https://uk-ua.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/uk-UA/'
  }
];

interface TeamProps {}

export const Team: React.FC<TeamProps> = () => {
  return (
    <section className="home page-section">
      <div className="home__container page-section__container">
        <Header />

        <Sidenav />

        <main className="main">
          <section className="novelty">
            <div className="novelty__container container">
              <NavigationPage navPageNames={navPageNames} />
              <Heading>КОМАНДА</Heading>

              <p className="team__text text-lg">
                Овучення аніме - це важливий елемент в створенні якісного
                продукту, який максимально передає емоції та атмосферу
                оригінальної роботи. Один з провідних гравців у цій галузі - це
                компанія "UnimayMedia". "UnimayMedia" є однією з провідних
                компаній, що спеціалізується на локалізації та овученні аніме
                для україномовної аудиторії. Вони пропонують широкий вибір
                аніме-серіалів та повнометражних фільмів, що дозволяє
                прихильникам аніме насолоджуватися їх улюбленими творами у
                високій якості і з максимальним комфортом.
                <br />
                <br />
                Компанія "UnimayMedia" має багатий досвід та високий рівень
                професіоналізму у своїй галузі. Вони працюють з великою
                кількістю аніме-студій та продюсерів, що дозволяє їм отримувати
                доступ до широкого асортименту аніме-робіт. Крім того,
                "UnimayMedia" активно працює над розвитком інтерактивної
                платформи для потокової передачі аніме-контенту, що забезпечує
                зручний та швидкий доступ до нових та класичних аніме-творів для
                шанувальників жанру з усього світу.
                <br />
                <br />У цілому, "UnimayMedia"є однією з найбільших та
                найвідоміших компаній в світі овучення аніме, яка забезпечує
                фанатів аніме якісним та професійним продуктом, що гідний
                оригінальної роботи.
              </p>
              <div className="team__persons">
                {persons.map((person) => (
                  <TeamPerson key={person.name} {...person} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </section>
  );
};
