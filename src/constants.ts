import { ICarouselItem } from './types/constants';
import { v4 } from 'uuid';
import { getImageUrl } from '@helpers/getImageUrl';

export const carouselItems: ICarouselItem[] = [
  {
    id: '1',
    image: '/assets/films/titansAtac.png',
    title: 'Атака Титанів',
    text: 'Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...',
    seasons: 4,
    year: 2013
  },
  {
    id: '2',
    image: '/assets/films/joeJoe.png',
    title: 'Неймовірні пригоди ДжоДжо',
    text: 'Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...',
    seasons: 5,
    year: 2012
  },
  {
    id: '3',
    image: '/assets/films/fullmetalAlchemist.png',
    title: 'Fullmetal Alchemist: Brotherhood',
    text: "The boys spend the entirety of Fullmetal Alchemist Brotherhood searching for a philosopher's stone in....",
    seasons: 4,
    year: 2013
  },
  {
    id: '4',
    image: '/assets/films/titansAtac.png',
    title: 'Атака Титанів',
    text: 'Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...',
    seasons: 4,
    year: 2013
  },
  {
    id: '5',
    image: '/assets/films/joeJoe.png',
    title: 'Неймовірні пригоди ДжоДжо',
    text: 'Вже багато років людство веде боротьбу з титанами — величезними істотами, які не мають особливого...',
    seasons: 5,
    year: 2012
  },
  {
    id: '6',
    image: '/assets/films/fullmetalAlchemist.png',
    title: 'Fullmetal Alchemist: Brotherhood',
    text: "The boys spend the entirety of Fullmetal Alchemist Brotherhood searching for a philosopher's stone in....",
    seasons: 4,
    year: 2013
  }
];

export const socialLinks = [
  {
    url: 'https://www.gatsbyjs.org/',
    icon: 'socials/facebook',
    label: 'Facebook'
  },
  {
    url: 'https://github.com/taniarascia',
    icon: 'socials/instagram',
    label: 'Instagram'
  },
  { url: 'https://www.netlify.com', icon: 'socials/tik-tok', label: 'Tictok' }
];

export const ROUTES = {
  HOME: '/',
  TEAM: '/team',
  TITLE: '/title/:id',
  NOT_FOUND: '*',
  VIEW_TITLE_BY_ID: (id: string) => {
    return `/title/${id}`;
  }
};

interface NavigationItem {
  id: string;
  href: string;
  text: string;
}

export const navigationItems: NavigationItem[] = [
  {
    id: v4(),
    href: '#',
    text: 'Наші проекти'
  },
  {
    id: v4(),
    href: ROUTES.TEAM,
    text: 'Команда'
  },
  {
    id: v4(),
    href: '#',
    text: 'Послуги'
  },
  {
    id: v4(),
    href: '#',
    text: 'Вакансії'
  },
  {
    id: v4(),
    href: '#',
    text: 'Новини'
  }
];

export const TEAM_BREADCRUMBS = [
  {
    name: 'Головна',
    link: ROUTES.HOME
  },
  {
    name: 'Команда'
  }
];

export interface ITeamPerson {
  photo: string;
  name: string;
  profession: string;
  city: string;
  age: number;
  socials: {
    label: string;
    url: string;
    iconName: string;
  }[];
}

export const TEAM_PERSONS: ITeamPerson[] = [
  {
    photo: getImageUrl('photo/1.png'),
    name: 'Олена Проуторова',
    profession: 'акторка озвучення',
    city: 'м. Дніпро',
    age: 24,
    socials: [
      {
        url: 'https://uk-ua.facebook.com/',
        label: 'Facebook',
        iconName: 'socials/facebook'
      },
      {
        url: 'https://www.instagram.com/',
        label: 'Instagram',
        iconName: 'socials/instagram'
      },
      {
        url: 'https://www.tiktok.com/uk-UA/',
        label: 'Tiktok',
        iconName: 'socials/tik-tok'
      }
    ]
  },
  {
    photo: getImageUrl('photo/2.png'),
    name: 'Сова Андрій',
    profession: 'звукорежисер та дабер',
    city: 'м. Краматорськ',
    age: 22,
    socials: [
      {
        url: 'https://uk-ua.facebook.com/',
        label: 'Facebook',
        iconName: 'socials/facebook'
      },
      {
        url: 'https://www.instagram.com/',
        label: 'Instagram',
        iconName: 'socials/instagram'
      },
      {
        url: 'https://www.tiktok.com/uk-UA/',
        label: 'Tiktok',
        iconName: 'socials/tik-tok'
      }
    ]
  },
  {
    photo: getImageUrl('photo/3.png'),
    name: 'Чигирик Ольга',
    profession: 'акторка озвучення/сабер(перекладач)',
    city: 'м. Львів',
    age: 18,
    socials: [
      {
        url: 'https://uk-ua.facebook.com/',
        label: 'Facebook',
        iconName: 'socials/facebook'
      },
      {
        url: 'https://www.instagram.com/',
        label: 'Instagram',
        iconName: 'socials/instagram'
      },
      {
        url: 'https://www.tiktok.com/uk-UA/',
        label: 'Tiktok',
        iconName: 'socials/tik-tok'
      }
    ]
  },
  {
    photo: getImageUrl('photo/4.png'),
    name: 'Денис Проуторов',
    profession: 'актор озвучення',
    city: 'м. Дніпро',
    age: 30,
    socials: [
      {
        url: 'https://uk-ua.facebook.com/',
        label: 'Facebook',
        iconName: 'socials/facebook'
      },
      {
        url: 'https://www.instagram.com/',
        label: 'Instagram',
        iconName: 'socials/instagram'
      },
      {
        url: 'https://www.tiktok.com/uk-UA/',
        label: 'Tiktok',
        iconName: 'socials/tik-tok'
      }
    ]
  },
  {
    photo: getImageUrl('photo/5.png'),
    name: 'Чернов Микита',
    profession: 'актор озвучення, звукоінженер',
    city: 'м.Харків',
    age: 22,
    socials: [
      {
        url: 'https://uk-ua.facebook.com/',
        label: 'Facebook',
        iconName: 'socials/facebook'
      },
      {
        url: 'https://www.instagram.com/',
        label: 'Instagram',
        iconName: 'socials/instagram'
      },
      {
        url: 'https://www.tiktok.com/uk-UA/',
        label: 'Tiktok',
        iconName: 'socials/tik-tok'
      }
    ]
  }
];
