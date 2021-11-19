import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiSkeleton from '@mui/material/Skeleton';

export const Skeleton = () => (
  <Card
    sx={{ width: '300px', maxWidth: '25%', minHeight: '25%', margin: '20px' }}
  >
    <MuiSkeleton
      sx={{ width: '100%', height: '300px', borderRadius: '10px', margin: 0 }}
      animation="wave"
      variant="rectangular"
    />
    <CardContent>
      <>
        <MuiSkeleton
          animation="wave"
          height={10}
          width="30%"
          style={{ marginBottom: 5 }}
        />
        <MuiSkeleton
          animation="wave"
          height={10}
          width="30%"
          style={{ marginBottom: 5 }}
        />
        <MuiSkeleton
          animation="wave"
          height={10}
          width="30%"
          style={{ marginBottom: 5 }}
        />
        <MuiSkeleton
          animation="wave"
          height={10}
          width="30%"
          style={{ marginBottom: 5 }}
        />
        <MuiSkeleton
          animation="wave"
          height={10}
          width="30%"
          style={{ marginBottom: 5 }}
        />
        <MuiSkeleton animation="wave" height={10} width="50%" />
      </>
    </CardContent>
  </Card>
);
