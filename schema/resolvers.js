const { UserList, MovieList } = require('../data')
const _ = require('lodash')
const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, { id: Number(id) })
            return user
        },
        movies: () => {
            return MovieList
        },
        movie: (parent, args) => {
            const name = args.name
            const movie = _.find(MovieList, { name })
            return movie
        },
        User: {
            favouriteMovies: () => {
                return _.filter(MovieList,
                    (movie) => movie.releaseYear >= 2000 && movie.releaseYear <= 2010)
            }
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UserList[UserList.length - 1].id
            user.id = lastId + 1
            UserList.push(user)
            return user
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input
            let updatedUser
            UserList.forEach((user) => {
                if (user.id === id) {
                    user.username = newUsername
                    updatedUser = user
                }
            })
            return updatedUser
        },
        deleteUser: (parent, args) => {
            const id = args.id
            _.remove(UserList, (user) => user.id === Number(id))
            return null
        }
    }
}

module.exports = { resolvers }