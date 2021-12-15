const { Users } = require('../models/users');

const resolvers = {
  users: async () => {
    const usersData = await Users.find()
    console.log(usersData)
    return usersData
  },
  user: async ({ id }) => {
    return await Users.findOne({ id });
  }
 
};
 
module.exports = resolvers;