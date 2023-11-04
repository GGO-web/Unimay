import { Genre } from '@services/Genre/interfaces/Genre.interface';
import { Keyword } from '@services/Keywords/interfaces/Keyword.interface';

export interface Title {
  id: string;
  name: string;
  imageLink: string;
  genres: Genre[];
  keywords: Keyword[];
  description: string;
  country: string;
  year: number;
  directors: string;
  actors: string;
  sequenceId: number;
  createdAt: string;
  updatedAt: string;
}
