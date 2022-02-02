const moment = require('moment')

// Get current time
console.log(moment()) // Moment<2022-02-02T09:29:36-07:00>

// Get current year
console.log(moment().year()) // 2022

// Generate UTC timestamps
console.log(moment().utc()) // Moment<2022-02-02T16:30:39Z>
console.log(moment().utc().unix()) // 1643819494

// Compute duration
console.log(moment().subtract(1, 'day')) // Moment<2022-02-01T09:32:21-07:00>
console.log(moment.duration(1, 'month').humanize()) // a month

// Format date strings for presentation or submission to the back-end
console.log(moment().format('MM/DD/YYYY')) // 02/02/2022
