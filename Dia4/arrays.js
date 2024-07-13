const num = [7, 8, 9]

num.push(10, 11, 12)
num.unshift(1, 2, 3)
num.splice(3, 0, 4, 5, 6)

console.log(num)
console.log(num.indexOf(8))
console.log(num.includes(8))

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'De volta para o futuro'},
    {id: 3, movieName: 'Matrix'}
]

console.localStorage(movies)