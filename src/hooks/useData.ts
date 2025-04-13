import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

export const useData = <T>(endpoint: string,requestConfig?:AxiosRequestConfig,dep?:unknown[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, SetError] = useState();
  const [isLoading, SetLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    SetLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal,...requestConfig })
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
  }, dep?[...dep]:[]);
  return { data, error, isLoading };
};
