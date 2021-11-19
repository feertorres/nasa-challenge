import { useEffect, useState } from 'react';
import { getPhotos } from '../helpers/getPhotos';

export const useFetch = (options, dependencies = []) => {
  const [state, setState] = useState({ data: [], loading: true, error: null });

  const reFetch = async () => {
    setState({
      data: [],
      loading: true,
      error: null
    });

    const photos = await getPhotos(options);
    setState({
      data: photos,
      loading: false,
      error: null
    });
  };

  useEffect(() => {
    reFetch(options);
  }, dependencies);

  return state;
};
