import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const MulitpleQuestion = ({ answerProps }) => {
  const { dispatch, currentQuestionObject, currentQuestionName } = answerProps;
  const { posibleAnswers } = currentQuestionObject;

  const createActionObject = (index) => {
    if (currentQuestionObject.answer.includes(index)) {
      return {
        type: 'MULTIPLE_REMOVED_ANSWER',
        currentQuestionName,
        value: index,
      };
    }
    return {
      type: 'MULTIPLE_ADDED_ANSWER',
      currentQuestionName,
      value: index,
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FormGroup>
        {posibleAnswers.map((ans, index) => (
          <FormControlLabel
            key={ans}
            control={
              <Checkbox
                checked={currentQuestionObject.answer.includes(index)}
                onChange={() => dispatch(createActionObject(index))}
              />
            }
            label={ans}
          />
        ))}
      </FormGroup>
      <Button
        style={{ marginTop: 16 }}
        variant="contained"
        color="secondary"
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        Sledeće pitanje
      </Button>
    </div>
  );
};

export default MulitpleQuestion;
