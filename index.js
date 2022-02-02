const dayjs = require('dayjs')

/* Plugins */
const utc = require('dayjs/plugin/utc')
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(utc)
dayjs.extend(duration)
dayjs.extend(relativeTime)
/* End plugins */

// Get current time
console.log(dayjs()) // M { '$L': 'en', '$d': 2022-02-02T17:01:46.271Z, '$x': {}, '$y': 2022, '$M': 1, '$D': 2, '$W': 3, '$H': 10, '$m': 1, '$s': 46, '$ms': 271 }

// Get current year
console.log(dayjs().year()) // 2022

// Generate UTC timestamps
console.log(dayjs().utc()) // M { '$L': 'en', '$u': true, '$d': 2022-02-02T17:01:46.281Z, '$x': {}, '$y': 2022, '$M': 1, '$D': 2, '$W': 3, '$H': 17, '$m': 1, '$s': 46, '$ms': 281 }
console.log(dayjs().utc().unix()) // 1643821306

// Compute duration
console.log(dayjs().subtract(1, 'day')) // M { '$L': 'en', '$d': 2022-02-01T17:01:56.072Z, '$x': {}, '$y': 2022, '$M': 1, '$D': 1, '$W': 2, '$H': 10, '$m': 1, '$s': 56, '$ms': 72 }
console.log(dayjs.duration(1, 'month').humanize()) // a month

// Format date strings for presentation or submission to the back-end
console.log(dayjs().format('MM/DD/YYYY')) // 02/02/2022
