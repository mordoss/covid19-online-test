import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useSendAnwers } from '../hooks/useSendAnswers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  typography: {
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(3),
    },
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
    },
  },
  button: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(2),
    },
    color: 'white',
  },
  buttonBack: {
    marginTop: theme.spacing(3),
  },
  thankContainer: {
    minHeight: theme.spacing(4),
  },
}));

const Result = () => {
  const classes = useStyles();
  const [sendAnswers, isSent, currentQuestionIndex] = useSendAnwers();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography className={classes.typography}>
          Ovde bi trebao da stoji savet na osnovu unetih informacija. Potrebno bi bilo napraviti
          kvote za sve simpotome tako da njihov zbir bude 100. Na osnovu tog zbira (0-100) bi bio
          određen savet.
        </Typography>
      </Paper>
      <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendAnswers()}
          className={classes.button}
          disabled={isSent || currentQuestionIndex !== 8}
        >
          Saglasan sam da se informacije pošalju na statističku analizu
        </Button>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to="/test"
          className={`${classes.button} ${classes.buttonBack}`}
        >
          Nazad na test
        </Button>
      </div>
      <div style={{}} className={classes.thankContainer}>
        {isSent && <Typography>Hvala</Typography>}
      </div>
    </div>
  );
};

export default Result;
