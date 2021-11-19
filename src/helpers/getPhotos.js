import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const apiKey = process.env.REACT_APP_API_KEY;

export const getPhotos = async (params) => {
  const rover = params?.rover;

  const {
    data: { photos }
  } = await axios.get(`${baseUrl}/${rover}/photos`, {
    params: {
      api_key: apiKey,
      ...(params?.camera && { camera: params?.camera }),
      page: params?.page || 1,
      ...(params?.earth_date && { earth_date: params?.earth_date }),
      ...(params?.sol && { sol: params?.sol })
    }
  });

  return photos;
};
