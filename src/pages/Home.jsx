import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { PhotosSkeleton } from '../components/PhotosSkeleton';
import { useFetch } from '../hooks/useFetch';
import { MediaCard } from '../components/MediaCard';
import { Filters } from '../components/Filters';
import { nanoid } from 'nanoid';

import moment from 'moment';
import useStyles from '../styles';
import { NoData } from '../components/NoData';

export const Home = () => {
  const [camera, setCamera] = useState('');
  const [rover, setRover] = useState('');
  const [earthDay, setEarthDay] = useState(false);
  const [solDay, setSolDay] = useState(false);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [counter, setCounter] = useState(0);

  const { loading, data: roverPhotos } = useFetch(
    {
      camera,
      rover: rover || 'curiosity',
      earth_date: earthDay ? '2020-09-22' : moment().format('YYYY-MM-DD'),
      sol: solDay ? '2890' : '',
      page
    },
    [camera, rover, earthDay, solDay, page]
  );

  const handleChangeCamera = async (event) => {
    setCamera(event?.value || '');
  };

  const handleChangeRover = async (event) => {
    setRover(event?.value || '');
  };

  const handleChangeEarthDay = (event) => {
    setEarthDay(event.target.checked);
  };

  const handleChangeSolDay = (event) => {
    setSolDay(event.target.checked);
  };

  const handleChangePage = (_, pagination) => {
    setPage(pagination);
  };

  const handleSaveFavorite = () => {
    const count = counter + 1;
    setCounter(count);
    const newFavorite = {
      value: nanoid(),
      label: `Favorite${count}`,
      camera,
      rover,
      earthDay,
      solDay
    };

    setFavorites([...favorites, newFavorite]);

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const getFavorites = () => {
    const myFavorites = JSON.parse(localStorage.getItem('favorites'));
    setFavorites(myFavorites || []);
  };

  const handleChangeFavorites = (event) => {
    const selectedFavorite = favorites.find(
      (favorite) => favorite.value === event.value
    );
    setCamera(selectedFavorite.camera);
    setRover(selectedFavorite.rover);
    setEarthDay(selectedFavorite.earthDay);
    setSolDay(selectedFavorite.solDay);
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    getFavorites();
  }, []);

  const classes = useStyles();

  return (
    <Container
      maxWidth={false}
      sx={{ padding: '0', margin: '0', maxWidth: '100%' }}
    >
      <div style={classes.title}>
        <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />
      </div>

      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
          margin: '0'
        }}
      >
        <Filters
          handleChangeCamera={handleChangeCamera}
          handleChangeRover={handleChangeRover}
          handleChangeFavorites={handleChangeFavorites}
          handleSaveFavorite={handleSaveFavorite}
          favorites={favorites}
          handleChangeSolDay={handleChangeSolDay}
          handleChangeEarthDay={handleChangeEarthDay}
          solDay={solDay}
          earthDay={earthDay}
        />
      </Container>

      {loading ? (
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center'
          }}
        >
          <PhotosSkeleton />
        </Container>
      ) : (
        <Container
          className="animate__animated animate__fadeIn"
          maxWidth={false}
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center'
          }}
        >
          {roverPhotos.length ? (
            roverPhotos?.map((photo) => (
              <MediaCard roverPhoto={photo} key={photo.id} />
            ))
          ) : (
            <NoData />
          )}
        </Container>
      )}

      {!!roverPhotos.length && (
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center'
          }}
        >
          <Pagination
            count={5}
            color="primary"
            onChange={handleChangePage}
            hideNextButton={!roverPhotos.length}
            size="large"
          />
        </Container>
      )}
    </Container>
  );
};
