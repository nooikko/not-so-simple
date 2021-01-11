const fs = require('fs');

const fieldNames = {
  'Bank Name': 'name',
  'Verified By Mod': 'verified',
  'Checking Account': 'checking',
  'Savings Account': 'savings',
  'Investing Options': 'investing',
  'Joint Accounts': 'joint',
  Expenses: 'expenses',
  Goals: 'goals',
  'Safe To Spend': 'safetospend',
  'Round Up': 'roundup',
  'Savings Rate': 'savingsrate',
  'Online Bill Pay': 'onlinebillpay',
  'Mobile Deposits': 'mobilecheckdeposit',
  Checks: 'checks',
  Venmo: 'venmo',
  Zelle: 'zelle',
  'Outgoing Wires': 'outgoingwires',
  'Incoming Wires': 'incomingwires',
  'No Fees': 'nofees',
  'Business Banking': 'businessbanking',
  'Card Type': 'cardtype',
  'Big Bank Backer': 'backer',
  Website: 'website',
  'Plaid Integration': 'plaid',
  Web: 'webapp',
  Ios: 'ios',
  Android: 'android',
}

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
