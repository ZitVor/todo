const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, required: true, unique: true},
  dateofcreate: {type: Data, required: true}
})

module.exports = model('List', schema)