import {
  MOBILE_POINT,
  MOBILE_SMALL_POINT,
  TABLET_POINT
} from '../../../../constants';

export const SWIPER_PROPS_SIMILIAR_ANIME = {
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
