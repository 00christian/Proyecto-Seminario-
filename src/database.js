const mongoose = require('mongoose');

const URI= 'mongodb://localhost/tareas';

mongoose.connect(URI)
  .then(db => console.log('DB conectada'))
  .catch(error => console.error(error));

module.exports = mongoose;





