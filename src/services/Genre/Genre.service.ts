import { Api } from '@api/api';

import { GetAllGenresResponse } from './interfaces/query/getAll/response.interface';
import { API_SERVICES } from '@/constants';

export class GenreServiceApi extends Api {
  public constructor({ serviceName }: { serviceName: string }) {
    super(serviceName);
  }

  public async getAllGenres() {
    const genres = await this.get<GetAllGenresResponse>(
      API_SERVICES.GENRE.GET_ALL as string
    );
    return genres.data.data;
  }
}

export const GenreService = new GenreServiceApi(API_SERVICES.GENRE);
