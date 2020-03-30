import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(3),
  },

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    minWidth: '80px',
  },
}));
const Advice = ({ Component, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <Component />
      </div>
      {children}
    </div>
  );
};

export default Advice;
