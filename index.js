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

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'))

const User = require('./Models/User');
const Mission = require('./Models/Mission');
const Task = require('./Models/Task');
const Inbox = require('./Models/Inbox');
const Reference = require('./Models/Reference');
const Event = require('./Models/Event');

// Record.create({
//   lastUpdated: 0,
//   exp:0,
//   Inbox: records.Inbox,
//   Tasks: records.Tasks,
//   Missions: records.Missions,
//   References: records.References,
//   Events: records.Events,
// }, err => {
//   if (err){
//     return console.log
//   } else {
//     console.log("New Record Inserted. Try typing db.records.find()")
//   }
// })
let records = {};

function getRecords(){
  //console.log("Fetching Records from Database...")

  records.Completed = [];
  records.Processed = [];
  records.Someday = [];
  records.WaitingFor = [];
  records.exp = 0;
  records.wasChanged = false;
  
  Inbox.find((err, record) => {
    if (err){
      console.log(err);
    } else{
      //console.log("Got Inbox");
      records.Inbox = record;
      console.log("Connected to Database")

      Task.find((err, record) => {
        if (err){
          console.log(err);
        } else{
          records.Tasks = record;
          //console.log("Got Tasks");

          Mission.find((err, record) => {
            if (err){
              console.log(err);
            } else{
              records.Missions = record;
              //console.log("Got Missions");

              Event.find((err, record) => {
                if (err){
                  console.log(err);
                } else{
                  records.Events = record;
                  //console.log("Got Events");

                  Reference.find((err, record) => {
                    if (err){
                      console.log(err);
                    } else{
                      records.References = record;
                      //console.log("Got References");
                      records.wasChanged = true;
                      //console.log("Got all the records");
                      records.lastUpdated = new Date().toLocaleString();
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
  
  if(!records.wasChanged){
    return records
  }else {
    getRecords(records);
  }
}

records = getRecords();

const app = express();
app.use(bodyParser.json());

app.use(cors());

// Record.updateOne({name: "New things are gwan"}, {name: "Glooorraayyyy"}, (err,res) => {
//   err? console.log(err) : console.log("Update successful")
// })

app.get('/',(req, res) => res.send(getRecords()));
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
