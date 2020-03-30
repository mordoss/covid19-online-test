/* eslint-disable import/prefer-default-export */
import { useState, useContext } from 'react';
import firebase from '../firebase';
import { TestContext } from '../store/TestContext';
import {
  sexIndexToProperty,
  yearsToAge,
  temperatureIndexToProperty,
  travelIndexToProperty,
  last48hIndexToProperty,
} from '../helpers';

export const useSendAnwers = () => {
  const [isSent, setIsSent] = useState(false);
  const [state] = useContext(TestContext);
  const { questions, currentQuestionIndex } = state;

  const answersObj = Object.entries(questions).reduce((obj, cur) => {
    const newObj = obj;
    newObj[cur[0]] = cur[1].answer;
    return { ...newObj, timestamp: firebase.firestore.FieldValue.serverTimestamp() };
  }, {});

  const { sex, age, temperature, travel, last48h, region } = answersObj;
  const sexProperty = sexIndexToProperty(sex);
  const ageProperty = yearsToAge(age);
  const temperatureProperty = temperatureIndexToProperty(temperature);
  const travelProperty = travelIndexToProperty(travel);
  const last48hProperty = last48hIndexToProperty(last48h);

  const increment = () => firebase.firestore.FieldValue.increment(1);

  const sendAnswers = () => {
    const db = firebase.firestore();
    const ref = db.collection('regions').doc(region || 'unknown');
    ref.update({
      [sexProperty]: increment(),
      [ageProperty]: increment(),
      [temperatureProperty]: increment(),
      [travelProperty]: increment(),
      [last48hProperty]: increment(),
    });
    setIsSent(true);
  };

  return [sendAnswers, isSent, currentQuestionIndex];
};
