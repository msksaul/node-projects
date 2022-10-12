const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided']
  },
  price: {
    type: String,
    required: [true, 'product price must be provided']
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    deafult: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported'
    }
    //enum: ['ikea', 'liddy', 'casessa', 'marcos']
  }
})

module.exports = mongoose.model('Product', productSchema)