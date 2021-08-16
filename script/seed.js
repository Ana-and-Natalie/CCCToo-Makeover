'use strict'
const {green, red} = require('chalk')
const db = require('../server/db')
const {
  User,
  Month,
  Week,
  Day,
  Staff,
  Announcement
} = require('../server/db/models')

const seed = async () => {
  try {
    await db.sync({force: true})
    console.log('db synced!')

    // const users = await Promise.all([
    //   User.create({email: 'cody@email.com', password: '123'}),
    //   User.create({email: 'murphy@email.com', password: '123'})
    // ])

    // console.log(`seeded ${users.length} users`)
    // console.log(`seeded successfully`)

    const months = [
      {
        title: 'January'
      },
      {
        title: 'February'
      },
      {
        title: 'March'
      },
      {
        title: 'April'
      },
      {
        title: 'May'
      }
    ]

    const [jan, feb, mar, apr, may] = await Month.bulkCreate(months, {
      returning: true
    })
    console.log(jan)
    console.log(green('Seeded months'))

    const weeks = [
      {
        title: 'Harry Potter',
        dates: 'Jan 1 - Jan 5',
        summary: 'reading Harry Potter',
        monthId: jan.id
      },
      {
        title: 'Harry Potter 2',
        dates: 'Jan 8 - Jan 13',
        summary: 'reading Harry Potter 2',
        monthId: jan.id
      },
      {
        title: 'Harry Potter 3',
        dates: 'Jan 16 - Jan 21',
        summary: 'reading Harry Potter 3',
        monthId: jan.id
      },
      {
        title: 'Twilight',
        dates: 'Feb 1 - Feb 5',
        summary: 'reading Twilight',
        monthId: feb.id
      }
    ]

    const [hp1, hp2, hp3, twilight] = await Week.bulkCreate(weeks, {
      returning: true
    })
    console.log(green('Seeded weeks'))

    const days = [
      {
        date: 1,
        title: 'Welcome to Hogwarts',
        summary: 'Harry arrives at Hogwarts',
        weekId: hp1.id
      },
      {
        date: 2,
        title: 'Welcome to Hogwarts',
        summary: 'Harry returns to Hogwarts',
        weekId: hp1.id
      },
      {
        date: 8,
        title: 'Welcome to Hogwarts',
        summary: 'Harry arrives again at Hogwarts',
        weekId: hp2.id
      },
      {
        date: 1,
        title: 'Welcome to Forks',
        summary: 'Bella arrives at Forks',
        weekId: twilight.id
      }
    ]

    await Day.bulkCreate(days, {returning: true})
    console.log(green('Seeded days'))

    const staff = [
      {
        fullName: 'Debbie Minette',
        position: 'Director',
        bio:
          ' has been with C.C.C. For 43 years. She and her husband Tony live in Frankfort. They have three children Tony, Anna, and Aimee. Mrs. Debbie has earned her degree in Early Childhood Education. She graduated with honors with an Associate in Arts Degree. She holds a current certificate in Red Cross First Aid and CPR.'
      },
      {
        fullName: 'Kelly Drummond',
        position: 'Teacher',
        bio:
          'is our  4-year-old teacher and has been with our staff 32 years. She started in June of 1986. Mrs. Kelly is the assistant Director. She received her CDA and attended Moraine Valley Community College. Mrs. Kelly resides in Frankfort with her husband Dan, their daughter Jennifer, and son Ian. Mrs. Kelly holds a current certificate in First Aid and CPR.',
        class: 'Preschool/Kinderbridge'
      },
      {
        fullName: 'Erin Niemeyer',
        position: 'Teacher',
        bio:
          'is the Lead Teacher in the Infant room. She attended Joliet Junior College and has earned her associates degree in Early Childhood education. She has been with us for 10 years. Mrs. Erin lives in New Lenox with her husband. She Volunteers in the nursery at her church. Mrs. Erin is CPR and first aid certified.',
        class: 'Infant Room'
      }
    ]
    await Staff.bulkCreate(staff, {returning: true})
    console.log(green('Seeded staff'))

    const announcements = [
      {
        description:
          'We are starting our early bird registration for the 2021-2022 school year during the month of February. The early bird registration fee is $50.00 for the first child and $25.00 for the second. Normally, our fee is $65.00.'
      }
    ]
    await Announcement.bulkCreate(announcements, {returning: true})
    console.log(green('Seeded announcements'))
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}

// // We've separated the `seed` function from the `runSeed` function.
// // This way we can isolate the error handling and exit trapping.
// // The `seed` function is concerned only with modifying the database.
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

// // Execute the `seed` function, IF we ran this module directly (`node seed`).
// // `Async` functions always return a promise, so we can use `catch` to handle
// // any errors that might occur inside of `seed`.
// if (module === require.main) {
//   runSeed()
// }

// // we export the seed function for testing purposes (see `./seed.spec.js`)
// module.exports = seed
