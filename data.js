const UserList = [
    {
        id: 1,
        name: 'john',
        username: 'john123',
        age: 20,
        nationality: 'canada',
        friends: [
            {
                id: 2,
                name: 'smith',
                username: 'smith123',
                age: 32,
                nationality: 'brazil'
            },
            {
                id: 3,
                name: 'carlo',
                username: 'carlo65',
                age: 54,
                nationality: 'turkiye'
            }
        ]
    },
    {
        id: 2,
        name: 'smith',
        username: 'smith123',
        age: 32,
        nationality: 'brazil'
    },
    {
        id: 3,
        name: 'carlo',
        username: 'carlo65',
        age: 54,
        nationality: 'turkiye'
    },
    {
        id: 4,
        name: 'marc',
        username: 'marc87',
        age: 43,
        nationality: 'usa',
        friends: [
            {
                id: 3,
                name: 'carlo',
                username: 'carlo65',
                age: 54,
                nationality: 'turkiye'
            },
        ]
    },
    {
        id: 5,
        name: 'luca',
        username: 'luca34',
        age: 43,
        nationality: 'italy'
    },
]

const MovieList = [
    {
        id: 1,
        name: 'avengers',
        releaseYear: 2018,
        isInTheaters: true
    },
    {
        id: 2,
        name: 'superman',
        releaseYear: 2008,
        isInTheaters: true
    }, {
        id: 3,
        name: 'mission impossible',
        releaseYear: 2022,
        isInTheaters: false
    }, {
        id: 4,
        name: 'die hard',
        releaseYear: 2012,
        isInTheaters: false
    },
]

module.exports = { UserList, MovieList }