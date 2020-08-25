const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;


const Inbox = require('./Inbox.js');
const Tasks = require('./Tasks.js');
const Projects = require('./Projects.js');

const database = {};

const db = Object.assign(database, Inbox, Tasks, Projects);

const app = express();

app.use(cors());

const user = {
  name: "amenchrist",
  class: "developer",
  level: 1
}
//console.log(db)
app.get('/',(req, res) => res.send(db));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))



/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(user))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

  //.get('/', (req, res) => res.render('pages/index'))