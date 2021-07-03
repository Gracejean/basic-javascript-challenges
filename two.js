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
let email = {}

const getDupes = () => {
  for (let i = 0; i < users.length; i++) {
    findDuplicate = users.filter(data => data.email === users[i].email)

    if (findDuplicate.length > 1) {
      if (duplicateEmail[findDuplicate[0].email]) {
        continue
      }

      result.push(findDuplicate[0].email)
      duplicateEmail[findDuplicate[0].email] = 1
    }
    for (let j = 0; j < result.length; j++) {
      obj['email_' + (j + 1)] = []
      email = users.filter(e => e.email === result[j])

        obj['email_' + (j + 1)].push('user_id' + email[0].id)            
    }
  }

  return obj
}
console.log(getDupes());
perf(getDupes)
