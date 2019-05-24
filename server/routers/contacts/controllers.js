const reader = require('./reader');
const CONTACT_FILE_PATH = '/sample-data/contacts.csv';

const search = async (req, res) => {
  const { term = '' } = req.query;
  const result = await reader.search(`${__dirname}${CONTACT_FILE_PATH}`, term);
  res.send(result);
};

module.exports = { search };
