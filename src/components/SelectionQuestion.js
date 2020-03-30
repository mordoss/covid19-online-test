import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(2),
    },
  },
  spanBold: {
    fontWeight: 700,
  },
}));

const SelectionQuestion = ({ answerProps }) => {
  const classes = useStyles();
  const { dispatch, currentQuestionObject, currentQuestionName } = answerProps;
  const { posibleAnswers, answer } = currentQuestionObject;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Okrug</InputLabel>
        <Select
          native
          value={answer || ''}
          onChange={(e) => {
            dispatch({
              type: 'SELECTION_ANSWERED',
              currentQuestionName,
              value: e.target.value,
            });
          }}
        >
          <option aria-label="None" value="" />
          {posibleAnswers.map((ans) => (
            <option value={ans} key={ans}>
              {ans}
            </option>
          ))}
        </Select>
      </FormControl>
      <Typography variant="caption">*Ne morate dati odgovor na ovo pitanje</Typography>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        component={Link}
        to="/result"
      >
        Kraj
      </Button>
    </div>
  );
};

export default SelectionQuestion;
