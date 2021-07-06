/**
 * Group users into an array of 5
 *
 * Expected structure
 *
 * [
 *  [{...}, {...}, {...}, {...}, {...}],
 *  [{...}, {...}, {...}, {...}, {...}],
 * ]
 *
 * Performance: Execution time must not exceed 0.02 ms
 */

const perf = require('./utils/perf')
const users = require('./data/users')
let newArray
let list = []

const group = () => {
  
  while (users.length > 0) {
    newArray = users.splice(0, 5)
    list.push(newArray)
  }
  return list
} 

console.log(group())
perf(group)

