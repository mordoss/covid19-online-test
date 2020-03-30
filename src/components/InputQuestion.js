import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const InputQuestion = ({ answerProps }) => {
  const { dispatch, currentQuestionObject, currentQuestionName } = answerProps;
  const { answer } = currentQuestionObject;
  const sanitizeInput = (string) => {
    const number = Number(string);
    return number < 0 || number > 110 ? null : number;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        label="Unesite broj godina"
        variant="outlined"
        type="number"
        inputProps={{ maxLength: 3 }}
        style={{ marginBottom: 16 }}
        onChange={(e) =>
          dispatch({
            type: 'INPUT_ANSWERED',
            currentQuestionName,
            value: sanitizeInput(e.target.value),
          })
        }
      />
      <Button
        variant="contained"
        color="secondary"
        disabled={!answer}
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        Sledeće pitanje
      </Button>
    </div>
  );
};

export default InputQuestion;
