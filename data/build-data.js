const fs = require('fs');
const fieldNames = require('../constants/fieldNames.json');

function renameRows(rows) {
  const names = {
    'Joint Account Option': 'Joint Accounts',
    'Expense Alternative': 'Expenses',
    'Goal Alternative': 'Goals',
    'Safe To Spend Alt': 'Safe to Spend',
    'Auto Save (round up)': 'Round Up',
    'Automatic Goal funding': 'Automatic Goal Funding',
    'Automatic expense funding': 'Automatic Expense Funding',
    'Mobile Check Deposit': 'Mobile Deposits',
    'Automatic goal/ expense spending': 'Automatic Goal/Expense Spending',
    'Real-time accuracy (i.e. do transactions show up in the app instantly -- or are they batched and processed once a day)': 'Real-Time Accuracy',
    'ATM Access (i.e. which network / is it fee free / etc)': 'ATM Access',
    'Auto Save (auto transfer)': 'Auto Transfer',
    'Kids Teen Accounts': 'Kids/Teens Accounts',
    'Graphical Spending analysis like simple': 'Graphical Analysis',
    'Custom notes on transactions': 'Custom Transaction Notes',
    '"OFX Downloads (for integration with Quicken': 'OFX Downloads',
    "No fee for card declined": "No Card Decline Fees",
    "Monthly Fees (recurring fee)": "Monthly Fees"
  };

  const renamed = rows.map(row => names?.[row] ?? row);

  return renamed;
}

const csv = fs.readFileSync('./data/simple.csv', {encoding: 'utf-8'});
const rows = csv.split('\n');
const rowNames = renameRows(rows.map(row => row.split(',')[0]).filter(x => Boolean(x)));

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
    const rowName = fieldNames[renameRows([columns.shift()])];

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

function buildPossibleBadges(banks, fieldNames) {

  const badges = banks.reduce((acc, cur) => {
    const bankKeys = Object.keys(cur);


    bankKeys.forEach(key => {
      if (typeof cur[key] === 'boolean' && !acc.includes(key)) {
        acc.push(key);
      }
    });

    return acc;
  }, []);

  const badgesWithNames = badges.reduce((acc, cur) => {
    const name = Object.keys(fieldNames).find(key => fieldNames[key] === cur);

    acc[name] = cur;

    return acc;
  }, {});

  return badgesWithNames;
}

const json = buildJSON(rows, fieldNames);

fs.writeFileSync('./constants/possibleBadges.json', JSON.stringify(buildPossibleBadges(json, fieldNames)));

fs.writeFileSync('./constants/banks.json', JSON.stringify(json));
