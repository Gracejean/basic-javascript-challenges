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

const group = () => {
  while (users.length > 0) {
    newArray = users.splice(0, 5)
  }
  return newArray
}
  

console.log(group())
perf(group)

