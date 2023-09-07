import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const sendRequest = useCallback(
    async (applyData: any, param: number | string) => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await applyData(param);
        return data;
      } catch (err: unknown) {
        console.error(err);
        setError(err || "Something went wrong!");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
