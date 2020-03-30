import regions from './regions';

export default {
  currentQuestionIndex: 0,
  questions: {
    age: {
      question: 'Koliko imate godina?',
      type: 'input',
      answer: null,
    },
    sex: {
      question: 'Vaš pol',
      type: 'choose',
      answer: null,
      posibleAnswers: ['Muški', 'Ženski', 'Ne Želim da se izjasnim'],
    },
    temperature: {
      question: 'Kolika je Vaša telesna temperatura?',
      type: 'choose',
      answer: null,
      posibleAnswers: [
        'Normalna (35.5°C - 37°C)',
        'Povišena (37°C - 38.9°C)',
        'Visoka (Preko 38.9°C)',
        'Ne znam',
      ],
    },
    symptoms1: {
      question: 'Da li osećate neki od navedenih simpotoma?',
      type: 'multiple',
      answer: [],
      posibleAnswers: [
        'Suvi kašalj',
        'Smanjeno čulo mirisa',
        'Suvo grlo',
        'Slabost',
        'Promena apetita',
      ],
    },
    symptoms2: {
      question: 'Da li osećate neki od navedenih simpotoma?',
      type: 'multiple',
      answer: [],
      posibleAnswers: [
        'Jak kašalj',
        'Gubitak daha',
        'Teškoću u disanju',
        'Pospanost',
        'Bol i pritisak u grudima',
        'Iznemoglost',
      ],
    },
    travel: {
      question:
        'Da li ste putovali ili bili u kontaktu sa potencijalno zaraženom osobom zadnjih 14 dana?',
      type: 'choose',
      answer: null,
      posibleAnswers: [
        'Nisam putovao/la i nisam imao/la kontakt ni sa kim sa simptomima',
        'Putovao/la sam i/ili sam imao/la kontakt sa osobom sa simpotmima',
        'Imao/la sam kontakt sa osobom kod koje potvrđen COVID-19',
      ],
    },
    diseases: {
      question: 'Da li imate neku od navedenih bolesti?',
      type: 'multiple',
      answer: [],
      posibleAnswers: [
        'Dijabetes',
        'Povišen krvni pritisak',
        'Bolest srca',
        'Bolest bubrega',
        'Bolest pluća',
        'Šlog',
        'Narušen imunitet',
      ],
    },
    last48h: {
      question: 'Kakav je tok Vaših simpotoma u poslednjih 48 sati?',
      type: 'choose',
      answer: null,
      posibleAnswers: ['Stanje se poboljšalo', 'Nema promena', 'Stanje se pogoršalo', 'Kritično'],
    },
    region: {
      question: 'U kom okrugu Srbije se trenutno nalazite?',
      type: 'selection',
      answer: null,
      posibleAnswers: regions,
    },
  },
};
