import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQueryState = <T = any>(
  key: string,
  defaultValue?: T,
  queryTransformer?: (state: any) => any
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, setState] = useState<T>();

  useEffect(() => {
    let queryValue = state as T;

    if (queryTransformer) {
      queryValue = queryTransformer(queryValue) as T;
    }

    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      [key]: String(queryValue || '')
    });
  }, [state]);

  useEffect(() => {
    const queryValue = (defaultValue as T) || (searchParams.get(key) as T);

    setState(queryValue);
  }, []);

  return [state, setState] as [T, React.Dispatch<React.SetStateAction<T>>];
};
