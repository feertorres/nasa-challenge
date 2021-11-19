import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export const MediaCard = ({ roverPhoto }) => {
  const { img_src: image, sol, earth_date, rover, camera } = roverPhoto;

  return (
    <Card sx={{ maxWidth: '25%', minHeight: '25%', margin: '20px' }}>
      <CardMedia
        component="img"
        image={image}
        sx={{ width: '300px', height: '300px', borderRadius: '10px' }}
      />
      <CardContent>
        <Typography color="text.secondary">Rover: {rover.name}</Typography>
        <Typography color="text.secondary">Camera: {camera.name}</Typography>
        <Typography color="text.secondary">Status: {rover.status}</Typography>
        <Typography color="text.secondary">Sol: {sol}</Typography>
        <Typography color="text.secondary">Earth date: {earth_date}</Typography>
      </CardContent>
    </Card>
  );
};
