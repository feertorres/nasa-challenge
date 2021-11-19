import useStyles from '../styles';

export const NoData = () => {
  const classes = useStyles();

  return (
    <div style={classes.noDataImageContainer}>
      <img
        style={classes.noDataImage}
        src="https://res.cloudinary.com/drkf21lrz/image/upload/v1637340995/3973481_pwtlse.jpg"
      />
    </div>
  );
};
