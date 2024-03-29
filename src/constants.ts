import { ICarouselItem } from './types/constants';
import { v4 } from 'uuid';
import { getImageUrl } from '@helpers/getImageUrl';

export type FunctionService = (id: string) => string;
export interface ServiceOptions {
  serviceName: string;
  // invalidationKey?: string;
  [key: string]: string | FunctionService;
}
export interface ApiServiceOptions {
  TITLE: ServiceOptions;
  [key: string]: ServiceOptions;
}

export const API_SERVICES: ApiServiceOptions = {
  TITLE: {
    serviceName: 'titles',
    GET_ALL: '',
    GET_BY_ID: (id: string) => {
      return `/${id}`;
    },
    invalidationKey: 'titles'
  },
  GENRE: {
    serviceName: 'genres',
    GET_ALL: '',
    GET_BY_ID: (id: string) => {
      return `/${id}`;
    },
    invalidationKey: 'genres'
  }
};

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

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
  NEWS: '/news',
  SEARCH: '/search',
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
    href: ROUTES.NEWS,
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

export const NEWS_BREADCRUMBS = [
  {
    name: 'Головна',
    link: ROUTES.HOME
  },
  {
    name: 'Новини'
  }
];

export const TITLE_BREADCRUMBS = [
  {
    name: 'Головна',
    link: ROUTES.HOME
  },
  {
    name: 'Cеріли',
    link: '#'
  },

  {
    name: 'Субтитровані серіали',
    link: '#'
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

export const SERVICES_LIST = [
  {
    id: v4(),
    position: 1,
    title: 'Озвучення діалогів',
    subtitle:
      'це озвучення голосами акторів діалогів між персонажами. Це може бути здійснено в різних мовах для різних аудиторій'
  },
  {
    id: v4(),
    position: 2,
    title: 'Запис звукових ефектів та музики',
    subtitle:
      'студії озвучення забезпечують запис звуків, які використовуються в фільмах та анімаційних фільмах, таких як звук вибуху, дзвінок дверей, тощо'
  },
  {
    id: v4(),
    position: 3,
    title: 'Монтаж',
    subtitle:
      'студії озвучення займаються монтажем аудіо та відео файлів, додаванням звукових ефектів та музики, регулюванням гучності та іншими послугами'
  },
  {
    id: v4(),
    position: 4,
    title: 'Переклад',
    subtitle:
      'спеціалізовані команди перекладачів, які перекладають діалоги та інші аудіоелементи з оригінальної мови на різні інші мови'
  }
];

export const TABLET_POINT = 993;
export const MOBILE_POINT = 769;
export const MOBILE_SMALL_POINT = 480;

export interface ICurrentAnime {
  [name: string]: any;
  image: string;
  rating: number;
  year: number;
  country: string;
  producer: string;

  genre?: string;
  actors?: string;
  subtitles?: boolean;
}

export interface INextSeasson extends ICurrentAnime {
  vote: number;
  voteRating: number;
  numberOfSeasons: number;
}

export interface IRecommendations {
  name: string;
  image: string;
  hashtags: string[];
  voteRating: number;
  quantityComment: number;
}

export const CURRENT_ANIME: ICurrentAnime = {
  name: 'Константин: Місто Демонів 1 сезон',
  rating: 8.5,
  image: getImageUrl('Konstantin-city-of-demons.jpg'),
  year: 2018,
  country: 'США',
  genre: 'Субтитровані серіали , Мультсеріали',
  producer: 'Девід С. Гойер, Сем Реджістер, Сара Шечтер',
  actors:
    "Метт Райан, Даміан О'Хара, Лаура Бейлі, Емілі О'Брайен, Рейчел Кімзі, Аткін Даунс, Джим Мескімен",
  subtitles: true
};

export const NEXT_ANIME: INextSeasson = {
  name: 'Атака Титанов',
  rating: 8.5,
  vote: 4.5,
  voteRating: 3.5,
  numberOfSeasons: 4,
  image: getImageUrl('attack-of-the-titans.jpg'),
  year: 2018,
  country: 'США',
  producer: 'Девід С. Гойер, Сем Реджістер, Сара Шечтер'
};

export const RECOMMENDATIONS_ANIME: IRecommendations = {
  hashtags: ['нове', 'топ'],
  name: 'Чотири людини та брехня кожного',
  voteRating: 1.5,
  image: getImageUrl('chotiri-people-that-skin-nonsense.jpg'),
  quantityComment: 220
};

export const LENGTH_CHARS_14 = 14;
export const LENGTH_CHARS_3 = 3;

export const DESCRIPTION_ANIME = {
  heading: 'Константин: Місто Демонів (1 сезон)',
  paragraph:
    'Між живим і мертвим світом дуже тонка грань. Нерідко породження пекла порушують цю межу. Вони проникають в тіла в чоловіків, жінок і навіть дітей, починаючи творити щось жахливе. Окультист і мисливець за усілякою нечистю Джон Костянтин не зовсім звичайна людина. На ньому лежить жахлива печать самогубці. Джон побував на тому світі і зміг повернутися в нормальне життя. Тепер за сюжетом мультсеріалу "Костянтин" він володіє древніми знаннями, які допомагають йому відправляти демонів назад у пекло. Людям він допомагає позбутися від темної сутності, проводячи необхідні обряди екзорцизму.\n Звичайно у Джона є маса недоліків. Він багато курить, що негативно позначається на його здоров\'ї. Однак безвідмовний дробовик завжди з ним. Темні сили природно бажають з ним розправитися. Вони придумують різні витончені способи знищити Костянтина. У цій боротьбі мисливцеві допомагає гострий розум і чудове знання свого супротивника. Часто доводиться діяти одному, оскільки навіть кохана дівчина не зовсім розуміє Джона.'
};

export interface SeriesReleaseScheduleItem {
  id: string;
  season: number;
  series: number;
  episode: number;
  date: Date;
}

export const LIST_RELEASE_SCHEDULE: SeriesReleaseScheduleItem[] = [
  {
    id: v4(),
    season: 1,
    series: 5,
    episode: 5,
    date: new Date()
  },
  {
    id: v4(),
    season: 1,
    series: 4,
    episode: 4,
    date: new Date()
  },
  {
    id: v4(),
    season: 1,
    series: 3,
    episode: 3,
    date: new Date()
  }
];

export interface ITitleInfo {
  id: string;
  characteristic: string;
  [key: string]: any;
}

export const TITLE_INFO: ITitleInfo[] = [
  { id: v4(), characteristic: 'Рік виходу:', key: 'year' },
  { id: v4(), characteristic: 'Країна:', key: 'country' },
  { id: v4(), characteristic: 'Жанр:', key: 'genre' },
  { id: v4(), characteristic: 'Режисер:', key: 'producer' },
  { id: v4(), characteristic: 'Актори:', key: 'actors' },
  { id: v4(), characteristic: 'Озвучення:', key: 'subtitles' }
];

export const TITLE_IMAGES = [
  { id: v4(), image: getImageUrl('title-images/1.jpg') },
  { id: v4(), image: getImageUrl('title-images/2.jpg') },
  { id: v4(), image: getImageUrl('title-images/3.jpg') },
  { id: v4(), image: getImageUrl('title-images/4.jpg') },
  { id: v4(), image: getImageUrl('title-images/5.jpg') },
  { id: v4(), image: getImageUrl('title-images/6.jpg') },
  { id: v4(), image: getImageUrl('title-images/7.jpg') }
];

export const COMMENTS = [
  {
    id: v4(),
    user: 'John Doe',
    isAuth: true,
    comment: 'Це чудове кіно!',
    timestamp: new Date(),
    replies: [
      {
        id: v4(),
        user: 'Author',
        isAuth: false,
        comment: 'Згоден з тобою John Doe!',
        timestamp: new Date(),
        replies: [
          {
            id: v4(),
            user: 'Alexey',
            isAuth: true,
            comment:
              "Я нещодавно подивився аніме, і я залишився вражений. Це було неймовірно захоплююче та чарівне досвід. Аніме майстерно поєднує в собі захоплюючий сюжет, чудово прорисованих персонажів та яскраву анімацію. Сюжет викликав у мене цікавість та емоційне зв'язку з головними героями. Якщо говорити про аніме, то ця історія мала всі елементи, які мені подобаються - пригоди, дружбу, справжні відносини та велику дозу фантазії. І звісно ж, стиль малюнка був вражаючим. Якщо ви любите анімацію, то це аніме варте вашої уваги. В цілому, якщо ви шукаєте захоплюючий та емоційний досвід, який залишить вас з бажанням більше, я вам рекомендую подивитися це аніме. Воно точно варте вашого часу",
            timestamp: new Date()
          },
          {
            id: v4(),
            user: 'NKJS',
            isAuth: false,
            comment:
              'Мультсеріал аніме - це дивовижний світ фантазії та мистецтва, який захоплює своєю непередбачуваністю та яскравістю. Цей жанр привертає своєю неймовірною графікою, живописними ландшафтами та надзвичайними персонажами.',
            timestamp: new Date()
          },
          {
            id: v4(),
            user: 'Nikita',
            isAuth: true,
            comment:
              'Не можна не відзначити музичний супровід у мультсеріалах аніме. Чудова музика додає атмосфери та підсилює емоційний досвід глядача, роблячи кожну сцену незабутньою.',
            timestamp: new Date()
          }
        ]
      },
      {
        id: v4(),
        user: 'Alice Smith',
        isAuth: true,
        comment: 'I agree, John!',
        timestamp: new Date()
      }
    ]
  },
  {
    id: v4(),
    user: 'Наталка',
    isAuth: false,
    comment:
      'Цей мультсеріал аніме, на жаль, залишив мене розчарованим. Я очікував більше від цього, але отримав надто простий та нудний сюжет. Персонажі були мало цікавими та поверхневими, і я не відчував з ними жодної емпатії.',
    timestamp: new Date(),
    replies: [
      {
        id: v4(),
        user: 'Cat',
        isAuth: false,
        comment:
          'Згоден с тобою Наталка! Сюжет також не зачарував. Він виявився передбачуваним та кліше, не несучи в собі чогось нового чи цікавого. Події розгорталися повільно, а деякі епізоди взагалі не приносили значущих відкриттів чи розвитку сюжету.',
        timestamp: new Date()
      },
      {
        id: v4(),
        user: 'Bob Johnson',
        isAuth: true,
        comment: 'Не згоден з вами !!!',
        timestamp: new Date()
      }
    ]
  }
];

export const SWIPER_PROPS_TEAM = {
  spaceBetween: 20,
  grabCursor: true,
  keyboard: { enabled: true },
  breakpoints: {
    [TABLET_POINT]: {
      slidesPerView: 4
    },
    [MOBILE_POINT]: {
      slidesPerView: 3
    },
    [MOBILE_SMALL_POINT]: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
};

export const ANIME_GENRES = [
  { id: v4(), title: 'Бойовик' },
  { id: v4(), title: 'Пригоди' },
  { id: v4(), title: 'Комедія' },
  { id: v4(), title: 'Драма' },
  { id: v4(), title: 'Фентезі' },
  { id: v4(), title: 'Жахи' },
  { id: v4(), title: 'Містика' },
  { id: v4(), title: 'Романтика' },
  { id: v4(), title: 'Наукова фантастика' },
  { id: v4(), title: 'Повсякденність' }
];

const ANIME_YEARS: { id: string; year: number }[] = [];

for (let year = 1980; year <= new Date().getFullYear(); year++) {
  ANIME_YEARS.push({ id: v4(), year });
}

export { ANIME_YEARS };

interface IFiltersMax {
  min: number;
  max: number;
  step: number;
}

export const FILTERS_MAX: IFiltersMax = {
  min: 0,
  max: 10,
  step: 0.1
};
