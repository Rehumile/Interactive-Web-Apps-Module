// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const bookOne = document.querySelector("#book1");
let bookStatus1 = bookOne.querySelector(".status")
let bookReserve1 = bookOne.querySelector(".reserve")
let bookCheckout1 = bookOne.querySelector(".checkout")
let bookCheckin1 = bookOne.querySelector(".checkin")

const bookTwo = document.querySelector("#book2")
let bookStatus2 = bookTwo.querySelector(".status")
let bookReserve2 = bookTwo.querySelector(".reserve")
let bookCheckout2 = bookTwo.querySelector(".checkout")
let bookCheckin2 = bookTwo.querySelector(".checkin")

const bookThree = document.querySelector("#book3")
let bookStatus3 = bookThree.querySelector(".status")
let bookReserve3 = bookThree.querySelector(".reserve")
let bookCheckout3 = bookThree.querySelector(".checkout")
let bookCheckin3 = bookThree.querySelector(".checkin")

bookCheckin1.style.color = 'black'
bookStatus1.style.color = STATUS_MAP.overdue.color
bookReserve1 = (STATUS_MAP.overdue.canReserve === true) ? bookReserve1.disabled = false : bookReserve1.disabled = true
bookCheckout1 = (STATUS_MAP.overdue.canCheckout === true) ? bookCheckout1.disabled = false: bookCheckout1.disabled = true
bookCheckin1 = (STATUS_MAP.overdue.canCheckIn === true) ? bookCheckin1.disabled = false : bookCheckin1.disabled = true

bookCheckin2.style.color = 'black'
bookStatus2.style.color = STATUS_MAP.reserved.color
bookReserve2 = (STATUS_MAP.reserved.canReserve === true) ? bookReserve2.disabled = false : bookReserve2.disabled = true
bookCheckout2 = (STATUS_MAP.reserved.canCheckout === true) ? bookCheckout2.disabled = false: bookCheckout2.disabled = true
bookCheckin2 = (STATUS_MAP.reserved.canCheckIn === true) ? bookCheckin2.disabled = false : bookCheckin2.disabled = true

bookCheckin3.style.color = 'black'
bookStatus3.style.color = STATUS_MAP.shelf.color
bookReserve3 = (STATUS_MAP.shelf.canReserve === true) ? bookReserve3.disabled = false : bookReserve3.disabled = true
bookCheckout3 = (STATUS_MAP.shelf.canCheckout === true) ? bookCheckout3.disabled = false: bookCheckout3.disabled = true
bookCheckin3 = (STATUS_MAP.shelf.canCheckIn === true) ? bookCheckin3.disabled = false : bookCheckin3.disabled = true