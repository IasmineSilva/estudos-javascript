for (i = 1; i <= 10; i++) {
    console.log('Numero', i)
}

i = 1

while (i <= 10) {
    console.log('Numero', i)
    i++
}

i=1
do {
    console.log('Numero', i)
    i++
} while (i <= 10)

const myCar = {
    model: 'BMW',
    ano: 2023,
    km: 68000
}

for (let i in myCar)
    console.log(i, myCar[i])