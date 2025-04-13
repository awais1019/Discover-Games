import { useData } from "./useData";

type Genre = {
  id: number;
  name: string;
};

export const useGenre = () => useData<Genre>("./genres");
