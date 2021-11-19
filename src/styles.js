const useStyles = () => ({
  body: {
    height: '100%',
    backgroundColor: 'lightgrey'
  },
  photosContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%'
  },
  card: {
    height: '200px',
    width: '200px',
    padding: '15px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px'
  },
  filters: {
    width: '150px',
    paddingRight: '10px'
  },
  favorites: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-end'
  },
  checkbox: {
    marginTop: '18px'
  },
  noDataImage: {
    width: '75rem',
    height: '45rem'
  },
  noDataImageContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default useStyles;
