const express = require('express');
const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema ({
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

module.exports = mongoose.model("Mission", missionSchema);