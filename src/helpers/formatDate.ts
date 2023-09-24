import dayjs from 'dayjs';
import uaLocale from 'dayjs/locale/uk';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);
dayjs.locale(uaLocale);

export const formatDate = (date: Date, format = 'D MMM YYYY, dd') => {
  return dayjs(date).format(format);
};
