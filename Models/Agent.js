const express = require('express');
const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema ({
    id: String,
    name: String,
    password: String
  })

  module.exports = mongoose.model('Agent', agentSchema);