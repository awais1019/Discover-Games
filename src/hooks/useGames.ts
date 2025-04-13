import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export type Game = {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:WrapperPlatForm[]
  
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};
export type PlatForm={
  id:number;
  name:string;
  slug:string;
}
type WrapperPlatForm={
  platform:PlatForm;
}


export const useGame=()=>{
     const [games, SetGames] = useState<Game[]>([]);
      const [error, SetError] = useState();
    
      useEffect(() => {
        const controller=new AbortController();
        const signal=controller.signal
        apiClient
          .get<FetchGamesResponse>("/games",{signal})
          .then((res) => SetGames(res.data.results))
          .catch((error) => 
          {
            if(error  instanceof CanceledError) return;
            SetError(error.massage);
          })
         
          return ()=>controller.abort()
      }, []);
      return {games,error}
}