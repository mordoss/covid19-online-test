export function indexToQuestion(index) {
  const questions = [
    'age',
    'sex',
    'temperature',
    'symptoms1',
    'symptoms2',
    'travel',
    'diseases',
    'last48h',
    'region',
  ];
  return questions[index];
}

export function yearsToAge(years) {
  if (years > 65) return 'age.old';
  if (years < 40) return 'age.young';
  return 'middle';
}

export function sexIndexToProperty(index) {
  if (index === 0) return 'sex.males';
  if (index === 1) return 'sex.females';
  return 'sex.unkown';
}

export function temperatureIndexToProperty(index) {
  if (index === 0) return 'temperature.normal';
  if (index === 1) return 'temperature.high';
  if (index === 2) return 'temperature.fever';
  return 'temperature.unkown';
}

export function travelIndexToProperty(index) {
  if (index === 0) return 'travel.no';
  if (index === 1) return 'travel.yes';
  return 'travel.contact';
}

export function last48hIndexToProperty(index) {
  if (index === 0) return 'last48h.better';
  if (index === 1) return 'last48h.same';
  if (index === 2) return 'last48h.worse';
  return 'last48h.critical';
}
