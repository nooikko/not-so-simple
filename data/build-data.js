const fs = require('fs');
const fieldNames = require('../constants/fieldNames.json');

const csv = fs.readFileSync('./data/simple.csv', {encoding: 'utf-8'});
const rows = csv.split('\n');
const rowNames = rows.map(row => row.split(',')[0]).filter(x => Boolean(x));

function validateFieldNames(fieldNames, rowNames) {
  const fieldKeys = Object.keys(fieldNames);
  const missing = rowNames.filter(name => !fieldKeys.includes(name));
  if (missing.length) {
    console.log(missing);
    throw new Error('Some field names not found');
  }
}

validateFieldNames(fieldNames, rowNames);

function fixValue(val) {
  if (val.trim() === 'TRUE') {
    return true;
  }

  if (val.trim() === 'FALSE') {
    return false;
  }

  if (val.trim() === '' || val.trim() === 'N/A') {
    return 'Not Available';
  }

  return val.replace('\r', '');
}

function buildJSON(rows, fieldNames) {
  const output = [];

  rows.forEach(row => {
    const columns = row.split(',');
    const rowName = fieldNames[columns.shift()];

    if (output.length === 0) {
      columns.forEach(val => {
        output.push({
          [rowName]: fixValue(val),
        });
      });
    } else {
      columns.forEach((val, index) => {
        if (output[index]) {
          const current = output[index];
          current[rowName] = fixValue(val);
        }
      })
    }
  });

  return output;
}

fs.writeFileSync('./constants/banks.json', JSON.stringify(buildJSON(rows, fieldNames)));
