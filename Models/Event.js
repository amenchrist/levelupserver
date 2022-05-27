const express = require('express');
const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema ({
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
  
module.exports = mongoose.model("Event", eventSchema);