/**
 * List the user_id of users with duplicate emails
 *
 * Expected structure
 *
 * {
 *  email_1: [user_id1, user_id2, user_id3],
 *  email_2: [user_id4, user_id5, user_id6]
 * }
 *
 * Performance: Execution time must not exceed 0.3 ms
 */

const perf = require('./utils/perf')
const users = require('./data/users')

const getDupes = () => {
  const data = {}  
  users.reduce((obj, currentObj) => {
    const email = currentObj.email

    if (!obj[email]) {
      obj[email] = []
    }
    
    obj[email].push('user_id' + currentObj.id)

    if (obj[email].length > 1) {
      data[email] = obj[email]
    }

    return obj
     
  }, {})  
 
  return data
}

console.log(getDupes());
perf(getDupes)
