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

const groupByAddress = () => {
  const address = [...new Set(users.map(item => item.address))]

  for (let i = 0; i < address.length; i++) {
    const b = users.filter(ad => ad.address === address[i])
    obj[address[i]] = b.map(e => 'user_id' + e.id)
  }
  return obj
}

console.log(groupByAddress())
perf(groupByAddress) 

