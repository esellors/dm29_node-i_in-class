const express = require('express');
const app = express();

// console.log(app)

const users = [
    {

        "id": 1,

        "first_name": "Raul",

        "last_name": "Wynter",

        "email": "rwynter0@google.com"

    },

    {

        "id": 2,

        "first_name": "Demetri",

        "last_name": "Dakin",

        "email": "ddakin1@google.com"

    },

    {

        "id": 3,

        "first_name": "Lira",

        "last_name": "Collishaw",

        "email": "lcollishaw2@google.com"

    },

    {

        "id": 4,

        "first_name": "Jennette",

        "last_name": "O'Brollachain",

        "email": "jobrollachain3@msn.com"

    },

    {

        "id": 5,

        "first_name": "Annaliese",

        "last_name": "Marishenko",

        "email": "amarishenko4@msn.com"

    },

    {

        "id": 6,

        "first_name": "Delano",

        "last_name": "Millins",

        "email": "dmillins5@yahoo.com"

    },

    {

        "id": 7,

        "first_name": "Allister",

        "last_name": "Rizzetti",

        "email": "arizzetti6@yahoo.com"

    },

    {

        "id": 8,

        "first_name": "Yul",

        "last_name": "Slite",

        "email": "yslite7@yahoo.com"

    },

    {

        "id": 9,

        "first_name": "Stu",

        "last_name": "Liveing",

        "email": "sliveing8@devmountain.com"

    },

    {

        "id": 10,

        "first_name": "Carla",

        "last_name": "Gisbye",

        "email": "cgisbye9@devmountain.com"

    }

]

// console.log('This is my new new code.')
// WRITE A FUNCTION THAT WILL RETURN ALL USERS

// function getAll() {
//     return users;
// }

app.get('/api/users', (req, res) => {
    console.log(req.query);
    // console.log(req)
    res.status(200).json(users)
});
// app.post
// app.put
// app.delete

// WRITE A FUNCTION THAT WILL RETURN A USER THAT MATCHES A PASSED IN ID

app.get('/api/users/user/:userId', (req, res) => {
    // console.log(typeof req.params.userId)
    const user = users.find(user => user.id === +req.params.userId);
    
    if (!user) {
        res.status(200).json({message: 'User not found!'})
    } else {
        res.status(200).json(user);
    }
    // res.sendStatus(200);
});
// api/users/user

// const getOne = (userId) => {
//   const user = users.find(user => user.id === userId);
//   return user;
// }

// getOne(9);

// console.log(users)

app.listen(5050, () => console.log('Server running on 5050'));