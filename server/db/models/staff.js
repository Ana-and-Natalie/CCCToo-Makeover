const Sequelize = require('sequelize')
const db = require('../db')

const Staff = db.define('staff', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  position: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  class: {
    type: Sequelize.TEXT
  }
})

module.exports = Staff
