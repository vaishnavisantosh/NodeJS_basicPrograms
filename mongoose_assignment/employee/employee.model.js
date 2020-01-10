/* eslint-disable semi */
// import { Schema, model } from 'mongoose'
var mongoose = require('mongoose')

const EmployeSchema = new mongoose.Schema({
  name: String,
  doj: Number,
  experienceInYear: Number
}, { collection: 'employee' })

module.exports = mongoose.model('Employee', EmployeSchema)
