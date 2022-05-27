const MISSION = 'MISSION';
const UNPLANNED = 'UNPLANNED';

const Missions = [
    {
        type: MISSION,
        id: 1589657001530,
        exp: 50,
        name: "Upload Church service",
        note: 'About Mission 1',
        outcome: "Last week's church service available to watch on Barking Church's website",
        output: 'Recordable proof of completed mission',
        outputRecordID: null, //Assigned on completion
        dueDate: 1591012800, //gmt timestamp
        timeRequired: 2629746, //In seconds (Average Time it has historically taken for the whole mission to be completed by you or someone else)
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
        type: MISSION,
        id: 1589657001531,
        exp: 50,
        name: 'Mission 2',
        note: 'About Mission 2',
        outcome: 'What done looks like for Mission 2',
        output: 'Recordable proof of completed mission',
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
        type: MISSION,
        id: 1589657001532,
        exp: 50,
        name: 'Mission 3',
        note: 'About Mission 3',
        outcome: 'What done looks like for Mission 3',
        output: 'Recordable proof of completed mission',
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
        type: MISSION,
        id: 1589657001533,
        exp: 50,
        name: 'Mission 4',
        note: 'About Mission 4',
        outcome: 'What done looks like for Mission 4',
        output: 'Recordable proof of completed mission',
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
        type: MISSION,
        id: 1589657001534,
        exp: 50,
        name: 'Mission 5',
        note: 'About Mission 5',
        outcome: 'What done looks like for Mission 5',
        output: 'Recordable proof of completed mission',
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

exports.Missions = Missions;