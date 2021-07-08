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
const obj = {}
let existingEmail = {}      

const getDupes = () => {      
  const email = users.map(e => e.email)
  
  for (let i = 0; i < email.length; i++) {        
    if (existingEmail[email[i]]) {
      continue
    }
    
    const data = users.filter(e => e.email === email[i])
    if (data.length > 1) {
      obj[email[i]] = data.map(e => 'user_id' + e.id)
    }        
    existingEmail[email[i]] = true
  }

  return obj
}

console.log(getDupes());
perf(getDupes)
