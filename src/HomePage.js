import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';
import HomePageBanner from './images/homepageopendaybanner.jpg';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Carousel from 'nuka-carousel';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Monsterrat',
      
    ].join(','),
  },});

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Welcome', url: '#' },
  { title: 'Courses', url: '#' },
  { title: 'Apply', url: '#' },
  { title: 'Fees', url: '#' },
  { title: 'Support and Policies', url: '#' },
  { title: 'Events', url: '#' },
  { title: 'News', url: '#' },
  { title: 'Employer Hub', url: '#' },
  { title: 'Contact Us', url: '#' },
  
];
export default function HomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <ThemeProvider theme = {theme}>
        <Header title="HomePage" sections={sections} />
        <main>
          Hello Jamieeeee
          <img src ={HomePageBanner} alt ="Open Day" height = "100%" width = "100%" />
          <Grid container spacing={4}>
          <Carousel
          initialSlideHeight = "300px">
          <img src="./images/facemask.jpg" height = "300px"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" height = "300px"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" height = "300px"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" height = "300px"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" height = "300px"/>
          <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" height = "300px"/>
          </Carousel>
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            
            
          </Grid>
        </main>
        </ThemeProvider>
      </Container>
      <Footer title="University Center Peterborough" description="Park Crescent Campus ,Peterborough, Cambridgeshire PE1 4DZ, United Kingdom" />
    </React.Fragment>
  );
}


