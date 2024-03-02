import React, { useState, useEffect, ComponentType } from 'react';
import dataFetch from '../fetching/dataFetch';
import { AllProducts, ElementType, RequestOptions } from '../lib/types';

const withDataFetching = (
  WrappedComponent: ComponentType<ElementType & AllProducts>,
  fetchDataFn: typeof dataFetch
) => {
  return function DataFetchingComponent(props: RequestOptions) {
    const [data, setData] = useState<object | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
      const fetchDataAsync = async () => {
        setLoading(true);
        try {
          const response = await fetchDataFn(props);
          console.log(typeof(response))
          setData(response as object);
          console.log(typeof(response))
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      };

      fetchDataAsync();
    }, [props]);

    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <WrappedComponent {...props} data={data} allProducts={data} />}
      </div>
    );
  };
}

export default withDataFetching;
