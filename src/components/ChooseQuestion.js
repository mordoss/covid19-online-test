import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ChooseQuestion = ({ answerProps }) => {
  const { dispatch, currentQuestionObject, currentQuestionName } = answerProps;
  const { posibleAnswers } = currentQuestionObject;

  return (
    <Grid container justify="center" alignItems="center">
      {posibleAnswers.map((answer, index) => (
        <Grid
          item
          xs={12}
          lg={answer.length < 30 ? 2 : 12}
          key={answer}
          style={{ textAlign: 'center', marginTop: 8, marginBottom: 8 }}
        >
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => dispatch({ type: 'CHOOSE_ANSWERED', currentQuestionName, value: index })}
          >
            {answer}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ChooseQuestion;
