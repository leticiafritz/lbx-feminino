import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function IntegrantesItem({title, imageVoluntaria, regiao, body}) {
  return (
  <Grid container spacing={2}>
  <Grid card xs={11}>
    <Card sx={{ maxWidth: 345, minWidth: 200 }} style={{background: '#eee0ea'}}>
      <CardHeader
        avatar={
          <Avatar alt="" src={imageVoluntaria}/>
        }
        title={title}
        subheader={regiao}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
    </CardContent>
    </Card>
  </Grid>
  </Grid>
  );
}

export default IntegrantesItem;