import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function NewsCard(props) {
  const classes = useStyles()
  const { image, date, title, description} = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Updated Covid 19 Guidance"
          height="140"
          image= {image}
          title="Contemplative Reptile"
          paddingLeft="50px"
          paddingRight="50px"
        />
       <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {date}
          </Typography>
          <Typography  gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography  variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}