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

const groupByAddress = () => {
  const data = users.reduce((obj, currentObj) => {
    const address = currentObj.address

    if (!obj[address]) {
      obj[address] = []     
    }
    
    obj[address].push('user_id' + currentObj.id)
    return obj
    }, {})  
    
  return data
}

console.log(groupByAddress())
perf(groupByAddress) 

