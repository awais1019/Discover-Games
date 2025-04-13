import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

export const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, SetError] = useState();
  const [isLoading, SetLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    SetLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal })
      .then((res) => {
        setData(res.data.results);
        SetLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        SetError(error.massage);
        SetLoading(false);
      });

    return () => controller.abort();
  }, [endpoint]);
  return { data, error, isLoading };
};
