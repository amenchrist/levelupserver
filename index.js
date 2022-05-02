const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require("mongoose");
const { stringify } = require('querystring');
const Schema = mongoose.Schema;


let localDB = "mongodb://localhost:27017/levelUpDB";
let onlineDB = "mongodb+srv://amenchrist:Admin2000@cluster0.yqpye.mongodb.net/levelUpDB";

mongoose.connect(onlineDB, {useNewUrlParser: true});

const usersSchema = new Schema ({
  id: Number,
  name: String
})

const inboxSchema = new Schema ({
  type : String,
  id : Number,
  entryDate : Number,
  name : String,
  description : String,
  status : String,
  isTrashed: Boolean,
  trashedDate: String,
  processedDate: String
})

const taskSchema = new Schema ({
  type : String,
  id : Number,
  entryDate : Number,
  status : String,
  frequency : String,
  priority : String,
  outcomeRecordID : Number,
  name : String,
  outcome : String,
  requiredContext : String,
  note : String,
  dueDate : String,
  timeRequired : Number,
  associatedMissionID : Number,
  requirements : String,
  exp : Number,
  isTrashed: Boolean,
  trashedDate: String,
  doneDate: String,
  timeSpent: Number,
  activeSince: Number,
  order: Number
})

const missionSchema = new Schema ({
  type : String,
  id : Number,
  entryDate: Number,
  status :String,
  
  name : String,
  purpose: String,
  vision: String,
  principles: String,
  toDo: String,
  skillsRequired: String,
  infoRequired: String,
  abilityRequired: String,
  dueDate : String,
  taskList :[ Number ],

  backStory : String,
  outputRef : Number,
  outputRecordUrl: String,
  
  timeRequired : Number,
  timeSpent: Number,

  requirements: String,
  priority: String,
  frequency: String,
  note: String,
  
  isTrashed: Boolean,
  trashedDate: String,
  doneDate: String,

  exp : Number,
})

const referenceSchema = new Schema ({
  type : String,
  id : Number,
  entryDate : Number,
  name : String,
  details : String,
  exp : Number,
  isTrashed: Boolean
})

const eventSchema = new Schema ({
  type : String,
  id : Number,
  entryDate : Number,
  name : String,
  date : String,
  time: String,
  location: String,
  frequency: String,
  exp : Number,
  note : String,
  isTrashed: Boolean,
  trashedDate: String
})



const Mission = mongoose.model("Mission", missionSchema);

const Task = mongoose.model("Task", taskSchema);

const Inbox = mongoose.model("Entry", inboxSchema);

const Reference = mongoose.model("Reference", referenceSchema);

const Event = mongoose.model("Event", eventSchema);


/**
 * 
 * required schemas:
 * Users
 * inbox,
 * task
 * mission
 * reference
 * event
 * 
 */

const INBOX_ITEM = 'INBOX_ITEM';
const UNPROCESSED = 'UNPROCESSED';
const TASK = 'TASK';
const LOW = 'LOW';
const DAILY = 'DAILY';
const PROJECT = 'PROJECT';
const UNPLANNED = 'UNPLANNED';

//let records = JSON.parse(fs.readFileSync('./tempDB.txt', {encoding: 'utf-8', flag: 'r'}));

//Inbox.insertMany(records.Inbox);
//Task.insertMany(records.Tasks);
//Mission.insertMany(records.Missions)

// Record.create({
//   lastUpdated: 0,
//   exp:0,
//   Inbox: records.Inbox,
//   Tasks: records.Tasks,
//   Missions: records.Missions,
//   References: records.References,
//   Events: records.Events,
//   "Someday":[],
//   "WaitingFor":[],
//   "Processed":[],
//   "Completed":[],
//   "Trash":[]
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

  //console.log(records);
  
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

function updateDB() {
    fs.writeFileSync('tempDB.txt', JSON.stringify(records))
        //console.log('Hello World > helloworld.txt');
}



const user = {
  name: "amenchrist",
  class: "developer",
  level: 1
}
//console.log(db)
//Send Records to client when home page is requested
//console.log(records)
app.get('/',(req, res) => res.send(getRecords()));



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

let lists = {}
lists["Inbox"] = Inbox;
lists["Tasks"] = Task;
lists["Missions"] = Mission;
lists["Events"] = Event;
lists["References"] = Reference;

let sampleInbox = {
  type:"INBOX_ITEM",
  id:9,
  entryDate:1212123443,
  name:"Random Input 898989898989898989898989899",
  description:"Optional details on input",
  status:"UNPROCESSED",
  isTrashed:true,
  trashedDate:1650546433134
}

app.post('/amen', (req, res) => {
	const package  = req.body;
  let indx;
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
          //lists[package.list].find((err,rec)=> console.log(rec))
          
          // Trash.find((err, record) => {
          //   if (err){
          //     console.log(err);
          //   } else{
          //     console.log("trash can", record)
          //     record = record[0];
          //     switch(package.item.type){
          //       case "INBOX_ITEM":
          //         console.log(package.item)
          //         record.inbox.push(package.item);
          //         record.save();
          //       break;
          //       case "TASK":
          //         record.tasks.push(package.item);
          //         record.save();
          //       break;
          //       case "MISSION":
          //         record.missions.push(package.item);
          //         record.save();
          //       break;
          //       case "EVENT":
          //         record.events.push(package.item);
          //         record.save();
          //       break;
          //       case "REFERENCE":
          //         record.references.push(package.item);
          //         record.save();
          //       break;
          //       default:
          //     }
          //   }
          // })
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
