import { useData } from "./useData";

type Genre = {
  id: number;
  name: string;
  image_background:string;
};

export const useGenre = () => useData<Genre>("./genres");
