const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const INBOX_ITEM = 'INBOX_ITEM';
const UNPROCESSED = 'UNPROCESSED';
const TASK = 'TASK';
const LOW = 'LOW';
const DAILY = 'DAILY';
const PROJECT = 'PROJECT';
const UNPLANNED = 'UNPLANNED';

const records = {
	lastUpdated: 0,
	Inbox: [
    {
        type: INBOX_ITEM,
        id: 1,
        entryDate: 1212123443,
        name: 'Random Input 1',
        description: 'Optional details on input',
        status: UNPROCESSED
    },
    {
        type: INBOX_ITEM,
        id: 2,
        entryDate: 1212123443,
        name: 'Random Input 2',
        description: 'Optional details on input',
        status: UNPROCESSED       
    },
    {
        type: INBOX_ITEM,
        id: 3,
        entryDate: 1212123443,
        name: 'Random Input 3',
        description: 'Optional details on input',
        status: UNPROCESSED
    }
    ,{
        type: INBOX_ITEM,
        id: 4,
        entryDate: 1212123443,
        name: 'Random Input 4',
        description: 'Optional details on input',
        status: UNPROCESSED
    }
    ,{
        type: INBOX_ITEM,
        id: 5,
        entryDate: 1212123443,
        name: 'Random Input 5',
        description: 'Optional details on input',
        status: UNPROCESSED
    }
    ,{
        type: INBOX_ITEM,
        id: 6,
        entryDate: 1212123443,
        name: 'Random Input 6',
        description: 'Optional details on input',
        status: UNPROCESSED
    }
    ,{
        type: INBOX_ITEM,
        id: 7,
        entryDate: 1212123443,
        name: 'Random Input 7',
        description: 'Optional details on input',
        status: UNPROCESSED
    }
    ,{
        type: INBOX_ITEM,
        id: 8,
        entryDate: 1212123443,
        name: 'Random Input 8',
        description: 'Optional details on input',
        status: UNPROCESSED
    },
    {
        type: INBOX_ITEM,
        id: 9,
        entryDate: 1212123443,
        name: 'Random Input 9',
        description: 'Optional details on input',
        status: UNPROCESSED
    },
    {
        type: INBOX_ITEM,
        id: 10,
        entryDate: 1212123443,
        name: 'Random Input 10',
        description: 'Optional details on input',
        status: UNPROCESSED
    }
    ],
    Tasks:  [
    {
        type: TASK,
        id: 1589657001522,
        entryDate: 20,
        status: 'PENDING' ,//PENDING, STARTED, UNFINISHED, DEFERED, NOT_STARTED, COMPLETED
        frequency: 0,
        timeSpent: 600000,
        priority : LOW,
        outcomeRecordID: 0, //Assigned on task completion
        name: 'Buy bread 5 ',
        outcome: 'Bread in the fridge',
        requiredContext: 'At the Supermarket',
        note: 'Brown bread preferably',
        dueDate: new Date().toISOString().substr(0, 10), //gmt timestamp
        timeRequired: 900, //In seconds
        associatedProject: {
            name: 'Project',
            id: 1589657001530
        },
        requirements: '£1 minimum',
        exp: 10
    },
    {
        type: TASK,
        id: 1589657001523,
        entryDate: 20,
        status: 'PENDING' ,//PENDING, STARTED, UNFINISHED, DEFERED, NOT_STARTED, COMPLETED
        frequency: 0,
        timeSpent: 300000,
        priority : LOW,
        outcomeRecordID: 0, //Assigned on task completion
        name: 'Buy bread 4 ',
        outcome: 'Bread in the fridge',
        requiredContext: 'At the Supermarket',
        note: 'Brown bread preferably',
        dueDate: 1589657001523, //gmt timestamp
        timeRequired: 900, //In seconds
        associatedProject: {
            name: 'Project',
            id: 1589657001530
        },
        requirements: '£1 minimum',
        exp: 10
    },
    {
        type: TASK,
        id: 1589657001524,
        entryDate: 20,
        status: 'PENDING' ,//PENDING, STARTED, UNFINISHED, DEFERED, NOT_STARTED, COMPLETED
        frequency: DAILY,
        timeSpent: 150000,
        priority : LOW,
        outcomeRecordID: 0, //Assigned on task completion
        name: 'Buy bread 3 ',
        outcome: 'Bread in the fridge',
        requiredContext: 'At the Supermarket',
        note: 'Brown bread preferably',
        dueDate: 1589657001526, //gmt timestamp
        timeRequired: 900, //In seconds
        associatedProject: {
            name: 'Project',
            id: 1589657001531
        },
        requirements: '£1 minimum',
        exp: 10
    },
    {
        type: TASK,
        id: 1589657001525,
        entryDate: 20,
        status: 'PENDING' ,//PENDING, STARTED, UNFINISHED, DEFERED, NOT_STARTED, COMPLETED
        frequency: DAILY,
        timeSpent: 400000,
        priority : LOW,
        outcomeRecordID: 0, //Assigned on task completion
        name: 'Buy bread 2',
        outcome: 'recordable product of task completion',
        requiredContext: 'At the Supermarket',
        note: 'Brown bread preferably',
        dueDate: 1589657001526, //gmt timestamp
        timeRequired: 900, //In seconds
        associatedProject: {
            name: 'Project',
            id: 1589657001532
        },
        requirements: '£1 minimum',
        exp: 10
    },
    {
        type: TASK,
        id: 1589657001526,
        entryDate: 20,
        status: 'PENDING' ,//PENDING, STARTED, UNFINISHED, DEFERED, NOT_STARTED, COMPLETED
        frequency: 0,
        timeSpent: 500000,
        priority : LOW,
        outcomeRecordID: 0, //Assigned on task completion
        name: 'Buy bread',
        outcome: 'recordable product of task completion',
        requiredContext: 'At the Supermarket',
        note: 'Brown bread preferably',
        dueDate: 1589657001526, //gmt timestamp
        timeRequired: 900, //In seconds
        associatedProject: {
            name: 'Project',
            id: 1589657001533
        },
        requirements: '£1 minimum',
        exp: 10
    }
    ],
    Projects: [
    {
        type: PROJECT,
        id: 1589657001530,
        exp: 50,
        name: "Upload Church service",
        note: 'About Project 1',
        outcome: "Last week's church service available to watch on Barking Church's website",
        output: 'Recordable proof of completed project',
        outputRecordID: null, //Assigned on completion
        dueDate: 1591012800, //gmt timestamp
        timeRequired: 2629746, //In seconds (Average Time it has historically taken for the whole project to be completed by you or someone else)
        timeRemaining: 2629746,
        status: UNPLANNED, //STARTED, ONGOING, NOT_STARTED, COMPLETED, UNPLANNED, UNFINISHED
        nextAction: {
            id: 16,
            task: 'First physical action',
            output: 'recordable product of task completion' //information, document etc
        },
        taskList: [ 1589657001522, 1589657001523 ]
    },
    {
        type: PROJECT,
        id: 1589657001531,
        exp: 50,
        name: 'Project 2',
        note: 'About Project 2',
        outcome: 'What done looks like for Project 2',
        output: 'Recordable proof of completed project',
        outputRecordID: null, //Assigned on completion
        dueDate: 1591012800, //gmt timestamp
        timeRequired: 2629746, //In seconds
        timeRemaining: 2629746,
        status: UNPLANNED,
        nextAction: {
            id: 17,
            task: 'First physical action'
        },
        taskList: [ 1589657001524 ]
    },
    {
        type: PROJECT,
        id: 1589657001532,
        exp: 50,
        name: 'Project 3',
        note: 'About Project 3',
        outcome: 'What done looks like for Project 3',
        output: 'Recordable proof of completed project',
        outputRecordID: null, //Assigned on completion
        dueDate: 1591012800, //gmt timestamp
        timeRequired: 2629746, //In seconds
        timeRemaining: 2629746,
        status: 'NOT_STARTED',
        nextAction: {
            id: 16,
            task: 'First physical action'
        },
        taskList: [ 1589657001525 ]
    },
    {
        type: PROJECT,
        id: 1589657001533,
        exp: 50,
        name: 'Project 4',
        note: 'About Project 4',
        outcome: 'What done looks like for Project 4',
        output: 'Recordable proof of completed project',
        outputRecordID: null, //Assigned on completion
        dueDate: 1591012800, //gmt timestamp
        timeRequired: 2629746, //In seconds
        timeRemaining: 2629746,
        status: 'NOT_STARTED',
        nextAction: {
            id: 16,
            task: 'First physical action'
        },
        taskList: [ 1589657001526 ]
    },
    {
        type: PROJECT,
        id: 1589657001534,
        exp: 50,
        name: 'Project 5',
        note: 'About Project 5',
        outcome: 'What done looks like for Project 5',
        output: 'Recordable proof of completed project',
        outputRecordID: null, //Assigned on completion
        dueDate: 1591012800, //gmt timestamp
        timeRequired: 2629746, //In seconds
        timeRemaining: 2629746,
        status: 'NOT_STARTED',
        nextAction: {
            id: 16,
            task: 'First physical action'
        },
        taskList: []
    }
    ]
}

const app = express();
app.use(bodyParser.json());

app.use(cors());

const user = {
  name: "amenchrist",
  class: "developer",
  level: 1
}
//console.log(db)
app.get('/',(req, res) => res.send(records));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.post('/amen', (req, res) => {
	const package  = req.body;
	switch(package.type){
		case INBOX_ITEM:
		records.Inbox.unshift(package);
		break;
		case TASK:
		records.Tasks.unshift(package);
		break;
		case PROJECT:
		records.Projects.unshift(package);
		break;
		default:
	}
	res.json(records);
})


/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send(user))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

  //.get('/', (req, res) => res.render('pages/index'))