// need to uncoment module.exports in this file, babel is not enabled for node
// eslint-disable-next-line import/no-extraneous-dependencies
const firestoreService = require('firestore-export-import');
const regions = require('./store/regions');
const serviceAccount = require('./serviceAccountKey.json');

const templateObj = {
  age: { young: 0, middle: 0, old: 0 },
  sex: { males: 0, females: 0, unkown: 0 },
  temperature: { normal: 0, high: 0, fever: 0, unkown: 0 },
  symptoms1: { dryCough: 0, lossSmell: 0, soreThroat: 0, weakness: 0, changeAppetite: 0 },
  symptoms2: {
    severeCough: 0,
    breathless: 0,
    difficultBreathing: 0,
    drowsiness: 0,
    painChest: 0,
    severeWeakness: 0,
  },
  travel: { no: 0, yes: 0, contact: 0 },
  diseases: {
    diabetes: 0,
    bloodPressure: 0,
    heartDisease: 0,
    kidneyDisease: 0,
    lungDisease: 0,
    stroke: 0,
    reducedImunity: 0,
  },
  last48h: { better: 0, same: 0, worse: 0, critical: 0 },
};

const regionsObj = regions.reduce((obj, cur) => {
  const newObj = obj;
  newObj[cur] = templateObj;
  return newObj;
}, {});

// Initiate Firebase App
firestoreService.initializeApp(serviceAccount, 'https://korona-test-28cb4.firebaseio.com');

// Start uploading your data
firestoreService.restore({ regions: { ...regionsObj, unknown: templateObj } });
