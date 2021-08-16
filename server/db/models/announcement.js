const Sequelize = require('sequelize')
const db = require('../db')

const Announcement = db.define('announcement', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Announcement
