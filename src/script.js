// let userCardNumber = document.getElementById('number')
// let userCardName = document.getElementById('name')
// let userCarddate = document.getElementById('date')
// let userCardcvv = document.getElementById('cvv')
// let cardName = document.getElementById('cardName')
// let expiration = document.getElementById('expiration')
// let securityCode = document.getElementById('securityCode')
// let cardNumber = document.querySelectorAll('.cardNumber>input')


// cardNumber.forEach((val, i) => {
//     val.addEventListener('keyup', (e) => {
//         if (e.keyCode == 8 && val.value.length == 0) {
//             if (i = !0) {
//                 cardNumber[i - 1].focus()
//             }
//         } else {

//             if (val.value.length >= 4) {
//                 if (i != 3) {
//                     userCardNumber.innerText = val.value
//                     cardNumber[i + 1].focus()

//                 }

//             } else if (i == 4) {
//                 cardName.focus()
//             } else if (i == 5) {
//                 expiration.focus()
//             } else if (i == 6) {
//                 securityCode.focus()
//             }
//             val.value = val.value.slice(0, 4)
//         }






//         userCardNumber.innerText = ''
//         cardNumber.forEach((val, i) => {
//             let temp = val.value
//             if (i == 3) {
//                 userCardNumber.innerText += temp
//             } else {
//                 userCardNumber.innerText += temp.length == 4 ? temp + ' - ' : temp

//             }
//         })
//     })

// })


// cardName.addEventListener('input', () => {
//     userCardName.innerText = cardName.value
// })


// expiration.addEventListener('input', (e) => {
//     const inputValue = e.target.value;
//     if (inputValue.length >= 4) {
//         e.target.value = inputValue.slice(0, 5);
//     }
//     if (inputValue.length >= 2) {
//         if (inputValue.length == 2) {
//             e.target.value += '/'
//         }
//         userCarddate.innerText = e.target.value;

//     }

// })



// securityCode.addEventListener('input', (e) => {
//     let inputValue = e.target.value;
//     if (inputValue >= 3) {
//         e.target.value = inputValue.slice(0, 3)
//     }
//     userCardcvv.innerText = securityCode.value
// })

