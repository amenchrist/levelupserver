if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require("mongoose");
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'))

const Agent = require('./Models/Agent');
const Mission = require('./Models/Mission');
const Task = require('./Models/Task');
const Inbox = require('./Models/Inbox');
const Reference = require('./Models/Reference');
const Event = require('./Models/Event');

async function getRecords(){
  let records = {};
  //console.log("Fetching Records from Database...")

  records.Completed = [];
  records.Processed = [];
  records.Someday = [];
  records.WaitingFor = [];
  records.exp = 0;

  try {
    records.Inbox = await Inbox.find();
    records.Tasks = await Task.find();
    records.Missions = await Mission.find();
    records.Events = await Event.find();
    records.References = await Reference.find();
    records.lastUpdated = new Date().toLocaleString();
  } catch (err) {
    console.log(err);
  }  
  return records
}

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/',async (req, res) => {
  try {
    let data = await getRecords();
    res.send(data)
  }
  catch{
    res.status(500).send()
  }
  });
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

let lists = {}
lists["Inbox"] = Inbox;
lists["Tasks"] = Task;
lists["Missions"] = Mission;
lists["Events"] = Event;
lists["References"] = Reference;

app.post('/amen', (req, res) => {
	const package  = req.body;
  console.log(`Item`, package.item)
  switch(package.action){
		case 'ADD':
      lists[package.list].create(package.item);
        console.log(`an item was added to ${package.list}`);
      ;
      res.json(getRecords());
    break;
		case 'REMOVE':
      lists[package.list].deleteOne(package.item, function (err) {
        if (err) {
          return console.log(err);
        } else {
          console.log(`an item was removed from ${package.list}`);
          res.json(getRecords());
        }
      });
      break;
		case 'UPDATE':
      lists[package.list].updateOne({ id: package.item.id}, package.item, function (err) {
        if (err) {
          return console.log(err);
        } else {
          console.log(`an item was updated from ${package.list}`);
          res.json(getRecords());
        }
      });
      break;
		default:
	}
	
})

app.post('/agents', ( async (req, res) => {
  console.log(req.body)
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    Agent.create({
      id: req.body.id,
      name: req.body.name,
      password: hashedPassword
    })
    res.send('New Agent Added')
  } catch {
    res.send('Something went wrong')
  }
}))

app.post('/login', ( async (req, res) => {
  console.log(req.body)
  try{
    console.log('getting agent');
    Agent.find( { id: "1" }, async function (err, agent) {
      if (err){
        console.log(err)
      } else {
        agent = agent[0];
        if (await bcrypt.compare(req.body.password, agent.password) ){
          res.send('Success')      
        } else {
          res.send('Incorrect')
        }
      }
    });
  } catch {
    res.send('Something went wrong')
  }
}))