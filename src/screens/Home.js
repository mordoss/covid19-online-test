import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  infoContainer: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(6),
    },
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  typography: {
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(3),
    },
  },
  paper: { padding: theme.spacing(3) },

  buttonContainer: {
    textAlign: 'center',
    margin: theme.spacing(3),
  },
  button: {
    fontSize: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(3),
    },
  },
  spanBold: {
    fontWeight: 700,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={12} sm={9} className={classes.infoContainer}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.typography}>
              <span className={classes.spanBold}>Nijedan zvanični pojedinac ili organizacija</span>{' '}
              ne stoji iza ovog upitnika. Sve što pročitate ovde uzimajte sa dozom rezerve. Upitnik
              je još u uvek u izradi. Za cilj će imati procenu rizika i savet na osnovu unetih
              informacija, kao i prikupljanje podataka o epidemiji korona virusa u Srbiji.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} className={classes.buttonContainer}>
          <Button
            color="primary"
            className={classes.button}
            variant="contained"
            component={Link}
            to="/test"
          >
            Počni test
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
