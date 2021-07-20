  
const { User } = require('../models');

const userData = [
    {
      "id": 1,
      "username": "harleyquinn",
      "email": "harleyquinn@dc.com",
      "password": "puddin"
    },
    {
      "id": 2,
      "username": "poisonivy",
      "email": "poisonivy@dc.com",
      "password": "pamela"
    },
    {
      "id": 3,
      "username": "blackcanary",
      "email": "blackcanary@dc.com",
      "password": "dinah"
    },
    {
      "id": 4,
      "username": "batwoman",
      "email": "batwoman@dc.com",
      "password": "kane"
    },
    {
      "id": 5,
      "username": "huntress",
      "email": "huntress@dc.com",
      "password": "helena"
    },
    {
      "id": 6,
      "username": "wonderwoman",
      "email": "wonderwoman@dc.com",
      "password": "amazons"
    },
    {
      "id": 7,
      "username": "supergirl",
      "email": "supergirl@dc.com",
      "password": "krypton"
    },
    {
      "id": 8,
      "username": "catwoman",
      "email": "catwoman@dc.com",
      "password": "selina"
    }
  ];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;