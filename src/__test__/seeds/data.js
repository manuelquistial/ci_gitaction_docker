const { Users } = require('../../models/users');

const UserData = [
    {
      name: "Fikayo Adepoju",
      email: "fik4christ@yahoo.com",
      posts: [
        {
          title: "Creating an Emoji Game with Vue, Auth0, and Google Vision API",
          published: true,
          link:
            "https://auth0.com/blog/creating-an-emoji-game-with-vue-auth0-and-google-vision-api/",
          author: 1
        },
        {
          title: "Electron Tutorial: Building Modern Desktop Apps with Vue.js",
          published: true,
          link:
            "https://auth0.com/blog/electron-tutorial-building-modern-desktop-apps-with-vue-js/",
          author: 1
        },
        {
          title: "State Management with Vuex: a Practical Tutorial",
          published: true,
          link:
            "https://auth0.com/blog/state-management-with-vuex-a-practical-tutorial/",
          author: 1
        }
      ]
    },
    {
      name: "John Doe",
      email: "john@company.com",
      posts: [
        {
          title: "Build a CI powered RESTful API with Laravel",
          published: true,
          link:
            "https://circleci.com/blog/build-a-ci-powered-restful-api-with-laravel/",
          author: 2
        },
        {
          title: "Automate your Nuxt.js app deployment",
          published: true,
          link: "https://circleci.com/blog/automate-your-nuxt-js-app-deployment/",
          author: 2
        }
      ]
    },
    {
      id: 3,
      name: "Jane Paul",
      email: "jane@company.com",
      posts: []
    }
];

const populateUsers = async() => {
  const userOne = await new Users(UserData[0]).save();

  const userTwo = await new Users(UserData[1]).save();

  const userThree = await new Users(UserData[2]).save();
}

module.exports = {
  populateUsers
};