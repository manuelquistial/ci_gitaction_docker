const { graphql } = require('graphql');
const { schema } = require('../graphql/schema');
const {
  getContext,
}  = require('./helpers/helper');

const mongoose = require('mongoose');
const { populateUsers } = require('../__test__/seeds/data')
 
describe('Unit testing', () => {

  beforeAll((done) => {
    console.log("MONGO URL:", process.env.MONGO_URL); // this environmental variable is set by shelf/jest-mongodb

    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
        .then(async res => {
            return await populateUsers();
        }).then((res2) => {
            //console.log(":::::USERS ADDED TO LOCAL DATABASE:::")
            done()
        });
        
  });

  afterAll(() => {
    mongoose.disconnect();
});
  
  it('should be null when user is not logged in',(done) => {
    //language=GraphQL
    const query = `
      query Q {
        users {
          _id
          name
        }
      }
    `;
  
    
    done()
  });

})