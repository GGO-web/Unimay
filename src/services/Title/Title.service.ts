import { Api } from '@api/api';
import { GetAllTitlesResponse } from './interfaces/query/getAll/response.interface';
import { GetAllTitlesRequest } from './interfaces/query/getAll/request.interface';
import { API_SERVICES, FunctionService } from '@/constants';
import { GetTitleByIdRequest } from '@services/Title/interfaces/query/get/request.interface';
import { Title } from '@services/Title/interfaces/Title.interface';

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

  public async getTitleById<T = GetTitleByIdRequest>(
    id?: string
  ): Promise<Title | undefined> {
    if (!id) {
      return;
    }

    const response = await this.get<T, { data: Title }>(
      (API_SERVICES.TITLE.GET_BY_ID as FunctionService)(id)
    );

    return response.data.data;
  }
}

export const TitleService = new TitleServiceApi(API_SERVICES.TITLE);
