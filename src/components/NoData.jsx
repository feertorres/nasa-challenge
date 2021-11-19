import NoDataImage from '../assets/image/no-data.jpg';
import useStyles from '../styles';

export const NoData = () => {
  const classes = useStyles();

  return (
    <div style={classes.noDataImageContainer}>
      <img style={classes.noDataImage} src={NoDataImage} />
    </div>
  );
};