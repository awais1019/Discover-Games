import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


type Genre={
    id:number,
    name:string;
}

type FetchGenreResponse = {
  count: number;
  results: Genre[];
};

export const useGenre = () => {
  const [genres, SetGenres] = useState<Genre[]>([]);
  const [error, SetError] = useState();
  const [isLoading, SetLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    SetLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", { signal })
      .then((res) => {
        SetGenres(res.data.results);
        SetLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        SetError(error.massage);
        SetLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};