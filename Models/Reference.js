const express = require('express');
const mongoose = require('mongoose');

const referenceSchema = new mongoose.Schema ({
    type : String,
    id : Number,
    entryDate : Number,
    name : String,
    details : String,
    exp : Number,
    isTrashed: Boolean
  });
  
module.exports = mongoose.model("Reference", referenceSchema);