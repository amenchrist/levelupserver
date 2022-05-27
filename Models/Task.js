const express = require('express');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema ({
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

module.exports = mongoose.model("Task", taskSchema);