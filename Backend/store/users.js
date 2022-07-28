//store all users
//some dummy data for example

const users = [
  {
    id: 1,
    name: "Willi Wedel",
    email: "Willi.wedel@web.de",
    password: "12345",
    type: "Privatperson",
  },
  {
    id: 2,
    name: "Freiwillige Feuerwehr - Hemsbach",
    email: "ffw@web.de",
    password: "12345",
    type: "Verein",
  },
  {
    id: 3,
    name: "Peter Maier",
    email: "Peter.Maier@aoe.de",
    password: "12345",
    type: "Privatperson",
  },
  {
    id: 4,
    name: "Bäckerei Möbius",
    email: "Möbius@web.de",
    password: "12345",
    type: "Geschäft",
  },
];

// get all users
const getUsers = () => users;

// get users by email (authentification, login)
const getUserByEmail = (email) => users.find((user) => user.email === email);

// add a new user
const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  addUser,
};
