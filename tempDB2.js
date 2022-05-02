let rec = {
	"lastUpdated":0,
	"exp":0,
	"Inbox":[{
		"type":"INBOX_ITEM",
		"id":1,
		"entryDate":1212123443,
		"name":"Random Input 1",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},
	{
		"type":"INBOX_ITEM",
		"id":2,
		"entryDate":1212123443,
		"name":"Random Input 2",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},
	{
		"type":"INBOX_ITEM",
		"id":3,
		"entryDate":1212123443,
		"name":"Random Input 3",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},{
		"type":"INBOX_ITEM",
		"id":4,"entryDate":1212123443,
		"name":"Random Input 4",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},{
		"type":"INBOX_ITEM",
		"id":5,
		"entryDate":1212123443,
		"name":"Random Input 5",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},{
		"type":"INBOX_ITEM",
		"id":6,"entryDate":1212123443,
		"name":"Random Input 6",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},{
		"type":"INBOX_ITEM",
		"id":7,
		"entryDate":1212123443,
		"name":"Random Input 7",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},{
		"type":"INBOX_ITEM",
		"id":8,
		"entryDate":1212123443,
		"name":"Random Input 8",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},{
		"type":"INBOX_ITEM",
		"id":9,
		"entryDate":1212123443,
		"name":"Random Input 9",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	},{
		"type":"INBOX_ITEM",
		"id":10,
		"entryDate":1212123443,
		"name":"Random Input 10",
		"description":"Optional details on input",
		"status":"UNPROCESSED"
	}],
	"Tasks":[{
		"type":"TASK",
		"id":1589657001522,
		"entryDate":20,
		"status":"PENDING",
		"frequency":0,
		"timeSpent":600000,
		"priority":"LOW",
		"outcomeRecordID":0,
		"name":"Buy bread 5 ",
		"outcome":"Bread in the fridge",
		"requiredContext":"At the Supermarket",
		"note":"Brown bread preferably",
		"dueDate":"2020-10-25",
		"timeRequired":900,
		"associatedMissionID":1589657001530,
		"requirements":"£1 minimum",
		"exp":10
	},
	{
		"type":"TASK",
		"id":1589657001523,
		"entryDate":20,
		"status":"PENDING",
		"frequency":0,
		"timeSpent":300000,
		"priority":"LOW",
		"outcomeRecordID":0,
		"name":"Buy bread 4 ",
		"outcome":"Bread in the fridge",
		"requiredContext":"At the Supermarket",
		"note":"Brown bread preferably",
		"dueDate":1589657001523,
		"timeRequired":900,
		"associatedMissionID":1589657001530,
		"requirements":"£1 minimum",
		"exp":10
	},
	{
		"type":"TASK",
		"id":1589657001524,
		"entryDate":20,
		"status":"PENDING",
		"frequency":"DAILY",
		"timeSpent":150000,
		"priority":"LOW",
		"outcomeRecordID":0,
		"name":"Buy bread 3 ",
		"outcome":"Bread in the fridge",
		"requiredContext":"At the Supermarket",
		"note":"Brown bread preferably",
		"dueDate":1589657001526,
		"timeRequired":900,
		"associatedMissionID":1589657001531,
		"requirements":"£1 minimum",
		"exp":10
	},{
		"type":"TASK",
		"id":1589657001525,
		"entryDate":20,
		"status":"PENDING",
		"frequency":"DAILY",
		"timeSpent":400000,
		"priority":"LOW",
		"outcomeRecordID":0,
		"name":"Buy bread 2",
		"outcome":"recordable product of task completion",
		"requiredContext":"At the Supermarket",
		"note":"Brown bread preferably",
		"dueDate":"ASAP",
		"timeRequired":900,
		"associatedMissionID":1589657001532,
		"requirements":"£1 minimum"
		,"exp":10
	},
	{
		"type":"TASK",
		"id":1589657001526,
		"entryDate":20,
		"status":"PENDING",
		"frequency":0,
		"timeSpent":500000,
		"priority":"LOW",
		"outcomeRecordID":0,
		"name":"Buy bread",
		"outcome":"recordable product of task completion",
		"requiredContext":"At the Supermarket",
		"note":"Brown bread preferably",
		"dueDate":1589657001526,
		"timeRequired":900,
		"associatedMissionID":1589657001533,
		"requirements":"£1 minimum",
		"exp":10
	}
	],
	"Missions":[{
		"type":"MISSION",
		"id":1589657001530,
		"exp":50,
		"name":"Upload Church service",
		"note":"About Mission 1",
		"description":"Last week's church service available to watch on Barking Church's website",
		"output":"Recordable proof of completed mission",
		"outputRecordID":null,
		"dueDate":1591012800,
		"timeRequired":2629746,
		"timeRemaining":2629746,
		"status":"UNPLANNED",
		"nextAction":{
			"id":16,
			"task":"First physical action",
			"output":"recordable product of task completion"
		},
		"taskList":[1589657001522,1589657001523]
	},
	{
		"type":"MISSION",
		"id":1589657001531,
		"exp":50,
		"name":"Mission 2",
		"note":"About Mission 2",
		"description":"What done looks like for Mission 2",
		"output":"Recordable proof of completed mission",
		"outputRecordID":null,
		"dueDate":1591012800,
		"timeRequired":2629746,
		"timeRemaining":2629746,
		"status":"UNPLANNED",
		"nextAction":{
			"id":17,
			"task":"First physical action"
		},
		"taskList":[1589657001524]
	},{
		"type":"MISSION",
		"id":1589657001532,
		"exp":50,"name":"Mission 3",
		"note":"About Mission 3",
		"description":"What done looks like for Mission 3",
		"output":"Recordable proof of completed mission",
		"outputRecordID":null,
		"dueDate":1591012800,
		"timeRequired":2629746,
		"timeRemaining":2629746,
		"status":"NOT_STARTED",
		"nextAction":{
			"id":16,
			"task":"First physical action"
		},
		"taskList":[1589657001525]
	},
	{
		"type":"MISSION",
		"id":1589657001533,
		"exp":50,
		"name":"Mission 4",
		"note":"About Mission 4",
		"description":"What done looks like for Mission 4",
		"output":"Recordable proof of completed mission",
		"outputRecordID":null,
		"dueDate":1591012800,
		"timeRequired":2629746,
		"timeRemaining":2629746,
		"status":"NOT_STARTED",
		"nextAction":{
			"id":16,
			"task":"First physical action"
		},"taskList":[1589657001526]
	},
	{
		"type":"MISSION"
		,"id":1589657001534,
		"exp":50,
		"name":"Mission 5",
		"note":"About Mission 5",
		"description":"What done looks like for Mission 5",
		"output":"Recordable proof of completed mission",
		"outputRecordID":null,
		"dueDate":1591012800,
		"timeRequired":2629746,
		"timeRemaining":2629746,
		"status":"NOT_STARTED",
		"nextAction":{
			"id":16,
			"task":"First physical action"
		},
		"taskList":[]
	}
	],
	"References":[],
	"Someday":[],
	"WaitingFor":[],
	"Reminders":[],
	"Processed":[],
	"Completed":[],
	"Trash":[]
}