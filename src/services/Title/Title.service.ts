import { Api } from '@api/api';
import { GetAllTitlesResponse } from './interfaces/query/getAll/response.interface';
import { GetAllTitlesRequest } from './interfaces/query/getAll/request.interface';
import { API_SERVICES } from '@/constants';

export class TitleServiceApi extends Api {
  public constructor({ serviceName }: { serviceName: string }) {
    super(serviceName);
  }

  public async getAllTitles<T = GetAllTitlesRequest>(
    {
      search = '',
      genres = ''
    }: GetAllTitlesRequest = {} as GetAllTitlesRequest
  ) {
    const titles = await this.get<T, GetAllTitlesResponse>(
      API_SERVICES.TITLE.GET_ALL as string,
      {
        params: {
          search,
          genres
        }
      }
    );

    return titles.data.data;
  }
}

export const TitleService = new TitleServiceApi(API_SERVICES.TITLE);
