import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { TestContext } from '../store/TestContext';
import InputQuestion from '../components/InputQuestion';
import ChooseQuestion from '../components/ChooseQuestion';
import MultipleQuestion from '../components/MultipleQuestion';
import SelectionQuestion from '../components/SelectionQuestion';
import { indexToQuestion } from '../helpers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(6),
    },
  },
  paper: {
    borderRadius: theme.spacing(2),
  },
  question: {
    padding: theme.spacing(2),
    borderTopLeftRadius: theme.spacing(2),
    borderTopRightRadius: theme.spacing(2),
    marginBottom: theme.spacing(5),
    backgroundColor: theme.palette.primary.dark,
    color: 'white',
  },
  answers: {
    marginBottom: theme.spacing(5),
  },
  bold: { fontWeight: 800 },
}));

const Test = () => {
  const classes = useStyles();
  const [state, dispatch] = useContext(TestContext);
  const { currentQuestionIndex, questions } = state;
  const currentQuestionName = indexToQuestion(currentQuestionIndex);
  const currentQuestionObject = questions[currentQuestionName];
  const answerProps = {
    dispatch,
    currentQuestionObject,
    currentQuestionName,
  };

  return (
    <>
      <div className={classes.container}>
        <Grid container justify="flex-end">
          <Grid item xs={12} md={1}>
            <IconButton
              disabled={!currentQuestionIndex}
              color="primary"
              onClick={() => dispatch({ type: 'PREV_QUESTION' })}
            >
              <ArrowBackIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} md={11}>
            <Paper elevation={3} className={classes.paper} variant="outlined">
              <Typography align="center" variant="h5" className={classes.question}>
                <span className={classes.bold}>{currentQuestionObject.question}</span>
              </Typography>
              <div className={classes.answers}>
                {currentQuestionObject.type === 'input' && (
                  <InputQuestion answerProps={answerProps} />
                )}
                {currentQuestionObject.type === 'choose' && (
                  <ChooseQuestion answerProps={answerProps} />
                )}
                {currentQuestionObject.type === 'multiple' && (
                  <MultipleQuestion answerProps={answerProps} />
                )}
                {currentQuestionObject.type === 'selection' && (
                  <SelectionQuestion answerProps={answerProps} />
                )}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Test;
