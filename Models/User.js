const express = require('express');
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema ({
    id: Number,
    name: String
  })

  module.exports = mongoose.model('User', usersSchema);