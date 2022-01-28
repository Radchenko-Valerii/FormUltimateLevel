import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { observer } from 'mobx-react-lite';
import FormStore from '../store/FormStore';

export const UserCard = observer(() => {

  const data = FormStore.data;


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
          alt={data.firstName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {`${data.firstName} ${data.lastName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {`${data.email}
          ${data.phone}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
})