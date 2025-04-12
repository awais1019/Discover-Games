import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

type Game = {
  id: number;
  name: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};


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