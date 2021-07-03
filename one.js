/**
 * Group users by address
 *
 * Expected structure
 *
 * {
 *  address_1: [user_id1, user_id2, user_id3],
 *  address_2: [user_id4, user_id5, user_id6]
 * }
 *
 * Performance: Execution time must not exceed 0.1 ms
 */

const perf = require('./utils/perf')
const users = require('./data/users')
const obj = {}
const existingAddress = {}
const address = []
let found = {}

const groupByAddress = () => {
  for (let i = 0; i < users.length; i++) {
    
    if (existingAddress[users[i].address]) {
      continue
    }

    address.push(users[i].address)
    existingAddress[users[i].address] = 1

    for (let j = 0; j < address.length; j++) {
      obj['address_' + (j + 1)] = []
      found = users.filter(ad => ad.address === address[j])

        if (found.length > 1) {
          for (let i = 0; i < found.length; i++) {
            obj['address_' + (j + 1)].push('user_id' + found[i].id)            
          }

        } else {
            obj['address_' + (j + 1)].push('user_id' + found[0].id)
      }
      
    }    
  }
  return obj
}

console.log(groupByAddress())
perf(groupByAddress) 

