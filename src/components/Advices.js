import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Advice from './Advice';
import { ReactComponent as WashingHands } from '../assets/icon-washing-hands.svg';
import { ReactComponent as Cough } from '../assets/icon-cough.svg';
import { ReactComponent as Wave } from '../assets/icon-wave.svg';
import { ReactComponent as Tissues } from '../assets/icon-tissues.svg';
import { ReactComponent as Mask } from '../assets/icon-mask.svg';
import { ReactComponent as House } from '../assets/icon-house.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
    },
  },
  bold: {
    fontWeight: 600,
  },
}));

const Advices = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={6} xs={12}>
        <Typography color="primary" variant="h3" className={classes.bold}>
          Saveti
        </Typography>
        <Typography variant="h5">
          Kako da svojim aktivnostima smanjite rizik od zaraze COVID-19 virusom
        </Typography>
      </Grid>

      <Grid item md={6} xs={12}>
        <Advice Component={WashingHands}>
          <Typography variant="h6">
            <span className={classes.bold}>Redovno</span> perite ruke sapunom ili toplom vodim ili
            koristite gel za dezifinkovanje
          </Typography>
        </Advice>
        <Advice Component={Cough}>
          <Typography variant="h6">
            Kašljite i kijajte{' '}
            <span className={classes.bold}>u maramicu ili u unutrašnju stranu svog lakta</span>
          </Typography>
        </Advice>
        <Advice Component={Wave}>
          <Typography variant="h6">
            Nemojte se grliti, ljubiti niti dodirivati
            <span className={classes.bold}> ni sa kim</span>
          </Typography>
        </Advice>
        <Advice Component={Tissues}>
          <Typography variant="h6">
            Koristite jednakokratke maramamice i{' '}
            <span className={classes.bold}> obavezno ih bacite nakon upotrebe</span>
          </Typography>
        </Advice>
        <Advice Component={Mask}>
          <Typography variant="h6">
            <span className={classes.bold}>Nosite masku</span>
          </Typography>
        </Advice>
        <Advice Component={House}>
          <Typography variant="h6">
            <span className={classes.bold}>Ostanite kući</span>, neki ljudi šire virus bez vidljivih
            simptoma
          </Typography>
        </Advice>
      </Grid>
    </Grid>
  );
};

export default Advices;
