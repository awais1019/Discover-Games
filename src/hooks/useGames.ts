
import { useData } from "./useData";
import { Genre } from "./useGenres";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: WrapperPlatForm[];
  metacritic: number;
};


export type PlatForm = {
  id: number;
  name: string;
  slug: string;
};
type WrapperPlatForm = {
  platform: PlatForm;
};

export const useGame = (selectedGenre:Genre |null)=>useData<Game>("./games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);
  