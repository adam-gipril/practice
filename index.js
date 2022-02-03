const date = new Date();

// Get current time
console.log(date) // 2022-02-03T19:27:05.167Z

// Get current year
console.log(date.getFullYear()) // 2022

// Generate UTC timestamps
console.log(date) // 2022-02-03T19:27:05.167Z
console.log(Math.floor(date.getTime() / 1000)) // 1643916425

// Compute duration
date.setDate(date.getDate() - 1)
console.log(date) // 2022-02-02T19:27:05.167Z
// ****** — implementing a conversion of date to a colloquial expression would require significant custom logic

// Format date strings for presentation or submission to the back-end
// The month + 1 is because the months are zero-indexed
console.log(`${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`) // 2/3/2022
