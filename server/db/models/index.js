const User = require('./user')
const Month = require('./month')
const Week = require('./week')
const Day = require('./day')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// One-to-many relationship
Day.belongsTo(Week)
Week.hasMany(Day)

// One-to-many relationship
Week.belongsTo(Month)
Month.hasMany(Week)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Month,
  Week,
  Day
}
