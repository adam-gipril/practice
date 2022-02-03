const { getYear, subDays, formatDistance, addMonths, format } = require('date-fns')

const date = new Date()

// Get current time
console.log(date) // 2022-02-03T19:01:41.703Z

// Get current year
console.log(getYear(date)) // 2022

// Generate UTC timestamps
console.log(date.toISOString()) // 2022-02-03T19:12:46.681Z
console.log(Math.floor(date.getTime() / 1000)) // 1643915566

// Compute duration
console.log(subDays(date, 1)) // 2022-02-02T19:12:46.681Z
console.log(formatDistance(addMonths(date, 1), date)) // 28 days

// Format date strings for presentation or submission to the back-end
// See https://date-fns.org/v2.28.0/docs/format
console.log(format(date, 'P')) // 02/03/2022
