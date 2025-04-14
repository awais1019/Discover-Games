
import { GameQurey } from "@/App";
import { useData } from "./useData";

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

export const useGame = (gameQurey:GameQurey)=>
  useData<Game>("./games",{params:{genres:gameQurey.genre?.id,
    platforms:gameQurey.platform?.id,ordering:gameQurey.sortOrder}},[gameQurey]);
  