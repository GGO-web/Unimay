import { ICarouselItem } from './types/constants';

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
  TITLE: '/title/:id',
  NOT_FOUND: '*',
  VIEW_TITLE_BY_ID: (id: string) => {
    return `/title/${id}`;
  }
};
