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
const result = []
let findDuplicate = {}
const duplicateEmail = {}
let email = []

const getDupes = () => {
  for (let i = 0; i < users.length; i++) {
    const item = users[i]
    duplicateEmail[item.email] = duplicateEmail[item.email] >= 1 ? duplicateEmail[item.email] + 1 : 1
    if (duplicateEmail[item.email] > 1) {
      result.push(item.email)
      continue    
    }
    
    for (let j = 0; j < result.length; j++) {
      obj['email_' + (j + 1)] = []
      email = users.filter(e => e.email === result[j])

      for (let i = 0; i < email.length; i++) {
        obj['email_' + (j + 1)].push('user_id' + email[i].id)            
      }
    }
  }   
   
  return obj
}

console.log(getDupes());
perf(getDupes)

