const fs = require('fs');
const { isEmpty, sortBy } = require('lodash');

// build one contact from a line
const buildOneContact = (line) => {
  // first_name,last_name,company_name,address,city,county,state,zip,phone1,phone,email
  const items = line.split(',');
  const [
   firstName = '',
   lastName = '',
   companyName,
   address,
   city,
   county,
   state,
   zip,
   phone1,
   phone = '',
   email = ''
  ] = items;

  // only return necessary data for client
  return {
    firstName,
     lastName,
     phone,
     email
  };
}

// read data from given fileName and return a promise.
const readFile = (fileName) => new Promise(function(resolve) {
  fs.readFile(fileName, 'utf8', (err, rawData) => {
    // error
    if (err) {
      // code = 100, system error
      resolve({ code: 100, err });
      return;
    }

    const contacts = rawData.split('\r\n')
      .map(line => buildOneContact(line));
    resolve({ code: 0, data: contacts });
  });
});

// search contact function
const search = async (fileName, term) => {
  const dataFromFile = await readFile(fileName);
  let { code, data } = dataFromFile;

  // search all
  if (isEmpty(term)) {
    // default sort by firstName
    data = sortBy(data, ['firstName']);
    return { code, data };
  }

  // read data from file failed
  if (code !== 0) {
    return dataFromFile;
  }

  term = term.toLowerCase();
  // filter by each criteria
  data = data.filter(item => (item.firstName.toLowerCase().indexOf(term) >= 0 || term === '') ||
      (item.lastName.toLowerCase().indexOf(term) >= 0 || term === '') ||
      (item.email.toLowerCase().indexOf(term) >= 0 || term === '') ||
      (item.phone.toLowerCase().indexOf(term) >= 0 || term === '')
  );

  // default sort by firstName
  data = sortBy(data, ['firstName']);
  return { code, data };
}

module.exports = { search };
