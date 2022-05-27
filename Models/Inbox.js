const express = require('express');
const mongoose = require('mongoose');

const inboxSchema = new mongoose.Schema ({
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

module.exports = mongoose.model("Entry", inboxSchema);