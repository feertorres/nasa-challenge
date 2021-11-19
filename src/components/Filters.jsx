import { CAMERA_ITEMS, ROVERS } from '../utils/constants';
import { BaseSelect } from './BaseSelect';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BaseCheckbox } from './BaseCheckbox';
import useStyles from '../styles';

export const Filters = ({
  handleChangeCamera,
  handleChangeRover,
  handleChangeFavorites,
  handleSaveFavorite,
  favorites,
  handleChangeSolDay,
  handleChangeEarthDay,
  solDay,
  earthDay
}) => {
  const classes = useStyles();

  return (
    <>
      <div style={classes.checkbox}>
        <BaseCheckbox
          onChange={handleChangeSolDay}
          defaultValue={solDay}
          label="Sol Day (2890)"
        />
      </div>

      <div style={classes.checkbox}>
        <BaseCheckbox
          onChange={handleChangeEarthDay}
          defaultValue={earthDay}
          label="Earth day (2020-09-22)"
        />
      </div>

      <div style={classes.filters}>
        <BaseSelect
          onChange={handleChangeCamera}
          label="Camera"
          id="camera"
          items={CAMERA_ITEMS}
          placeholder="All"
          isClearable={true}
        />
      </div>

      <div style={classes.filters}>
        <BaseSelect
          onChange={handleChangeRover}
          label="Rover"
          id="rover"
          items={ROVERS}
          placeholder="Curiosity"
        />
      </div>

      <div style={classes.favorites}>
        <div>
          <IconButton onClick={handleSaveFavorite} color="error">
            <FavoriteIcon />
          </IconButton>
        </div>
        <div>
          <BaseSelect
            onChange={handleChangeFavorites}
            label="Favorites"
            id="favorites"
            items={favorites}
          />
        </div>
      </div>
    </>
  );
};
