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
const existingId = {}

const groupByAddress = () => {

  for (let i = 0; i < users.length; i++) {    
    if (existingAddress[users[i].address]) {     
      continue
    }
    existingAddress[users[i].address] = 1
    
    obj[users[i].address] = []
    obj[users[i].address].push('user_id' + users[i].id)
    
  }
  // return obj
  
}

console.log(groupByAddress())
// perf(groupByAddress) 


const perf = require('./utils/perf')
const users = require('./data/users')
const obj = {}
const existingAddress = {}

const groupByAddress = () => {
  const address = users.map(item => item.address)

  for (let i = 0; i < address.length; i++) {
    if (existingAddress[address[i]]) {
      continue
    }

    const b = users.filter(ad => ad.address === address[i])
    obj[address[i]] = b.map(e => 'user_id' + e.id)
    existingAddress[address[i]] = 1
    
  }
  return obj
}
