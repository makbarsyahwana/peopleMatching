const userModels = require('../../models/user')
const { validationResult } = require('express-validator/check');


const controller = {
    post: (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(errors)
            res.status(422).send({
                message: "Your Request is Not Valid",
                errors: errors.array()
            })
        }

        const { facebookID, username, password, age, friends } = req.body

        userModels.find({
            username,
            password
        }).then(foundUser => {
            if(foundUser.length === 0){
                userModels.create({
                    facebookID,
                    username,
                    password,
                    age,
                    friends
                }).then(newUser => {
                    console.log(newUser)
                    res.status(200).send({
                        message: "New User Has Created",
                        data: newUser
                    })
                }).catch(error => {
                    res.status(500).send({
                        message: "Internal Server Error",
                        error: error
                    })
                })
            } else {
                res.status(200).send({
                    message: "User has Exist"
                })
            }
        }).catch(error => {
            res.status(500).send({
                message: "Internal Server Error",
                error: error
            })
        })
    },

    get: (req, res) => {
        userModels.find({})
        .then(foundUsers => {
            foundUsers.map(user => {
                user.password = null
            })
            console.log(foundUsers)
            res.status(200).send({
                message: "Found All Users",
                data: foundUsers
            })
        }).catch(error => {
            console.log(error)
            res.status(500).send({
                message: "Internal Server Error",
                error: error
            })
        })
    },

    match: (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(errors)
            res.status(422).send({
                message: "Your Request is Not Valid",
                errors: errors.array()
            })
        }
        console.log(req.query.currentUser)
        userModels.find({
            age: req.query.age
        }).then(matchUser => {
            // to get currentUser
            let currUser = matchUser.find(user => user.username === req.query.currentUser)
            // to hold matching people based on their friends
            let matchingPeople = []

            // to score how match they are based on their mutual friends
            matchUser.map(user => {
                let matchingFriends = currUser.friends.filter(n => user.friends.includes(n))
                matchingPeople.push({
                    user: user,
                    matchingScore: matchingFriends.length
                })
            })
              
            // sort to descending from matching people based on their score
            matchingPeople.sort(function (a, b) {
                return b.matchingScore - a.matchingScore
            })

            res.status(200).send({
                message: "Found Match Poeple",
                data: matchingPeople.slice(0, 2) // send two of matching people based on their score
            })
        }).catch(error => {
            console.log(error)
            res.status(500).send({
                message: "Internal Server Error",
                error: JSON.parse(JSON.stringify(error))
            })
        })
    }
}

module.exports = controller