export default (state, action) => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case 'PREV_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
      };
    case 'INPUT_ANSWERED':
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.currentQuestionName]: {
            ...state.questions[action.currentQuestionName],
            answer: action.value,
            isAnswered: true,
          },
        },
      };
    case 'CHOOSE_ANSWERED':
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.currentQuestionName]: {
            ...state.questions[action.currentQuestionName],
            answer: action.value,
          },
        },
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };

    case 'MULTIPLE_ADDED_ANSWER':
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.currentQuestionName]: {
            ...state.questions[action.currentQuestionName],
            answer: [...state.questions[action.currentQuestionName].answer, action.value],
          },
        },
      };

    case 'MULTIPLE_REMOVED_ANSWER':
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.currentQuestionName]: {
            ...state.questions[action.currentQuestionName],
            answer: [
              ...state.questions[action.currentQuestionName].answer.filter(
                (ans) => ans !== action.value
              ),
            ],
          },
        },
      };
    case 'SELECTION_ANSWERED':
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.currentQuestionName]: {
            ...state.questions[action.currentQuestionName],
            answer: action.value,
            isAnswered: true,
          },
        },
      };

    default:
      return state;
  }
};
