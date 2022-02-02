const { DateTime, Duration } = require('luxon')

// Get current time
console.log(DateTime.now().toString()) // 2022-02-02T10:15:44.173-07:00

// Get current year
console.log(DateTime.now().year) // 2022

// Generate UTC timestamps
console.log(DateTime.utc().toString()) // 2022-02-02T17:18:26.725Z
console.log(DateTime.utc().toMillis()) // 1643822306725

// Compute duration
console.log(DateTime.now().minus(Duration.fromObject({ day: 1 })).toString()) // 2022-02-01T10:20:58.866-07:00
console.log(Duration.fromObject({ month: 1 }).toHuman()) // 1 month

// See https://moment.github.io/luxon/#/formatting?id=table-of-tokens
// Format date strings for presentation or submission to the back-end
console.log(DateTime.now().toFormat('D')) // 2/2/2022
