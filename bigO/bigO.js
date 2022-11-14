const users = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 30 },
    { name: 'Jack', age: 40 }
]

const users2 = [
    { name: 'John', age: 20 },
    { name: 'Robson', age: 30 },
    { name: 'Sam', age: 40 }
]

//é exponencial pois para cada um dos elementos do array,
//ele vai percorrer todo o array novamente
//3^2 = 9
for (const user of users) {
    for (const user2 of users2) {
        if (user.name === user2.name) {
            console.log(user.name, 'encontramos um nome em comum')
        }
    }
} //O(n^2)


//é linear pois ele vai percorrer todo o array
//3
const cache = {}
for (const user of users) {
    cache[user.name] = user
    /*
    cache =
    {
    John: { name: 'John', age: 20 },
    Jane: { name: 'Jane', age: 30 },
    Jack: { name: 'Jack', age: 40 }
    }
    */
}

for (const user of users2) {
    if (cache[user.name]) {
        console.log(user.name, 'encontramos um nome em comum')
    }
    /*      
    users2 = [
    { name: 'John', age: 20 },
    { name: 'Robson', age: 30 },
    { name: 'Sam', age: 40 }
    ]
    */
} //O(n)

console.log(cache)