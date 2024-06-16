
let productValue = Number(prompt('Enter the Product value: '))


if (productValue >= 20) {
    document.getElementById('result').innerHTML = 'Approved'
}
else{
    document.getElementById('result').innerHTML = 'Denied'
}