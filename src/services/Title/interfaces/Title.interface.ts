import { Genre } from '@services/Genre/interfaces/Genre.interface';
import { Keyword } from '@services/Keywords/interfaces/Keyword.interface';
import { Player } from '@services/Players/interfaces/Player.interface';

export interface Title {
  id: string;
  name: string;
  imageLink: string;
  genres: Genre[];
  keywords: Keyword[];
  players: Player[];
  description: string;
  country: string;
  year: number;
  directors: string;
  actors: string;
  sequenceId: number;
  createdAt: string;
  updatedAt: string;
}
