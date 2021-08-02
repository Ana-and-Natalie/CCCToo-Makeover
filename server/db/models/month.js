const Sequelize = require('sequelize')
const db = require('../db')

const Month = db.define('month', {
  title: {
    // title: August
    type: Sequelize.ENUM(
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ),
    allowNull: false
  }
})

module.exports = Month
