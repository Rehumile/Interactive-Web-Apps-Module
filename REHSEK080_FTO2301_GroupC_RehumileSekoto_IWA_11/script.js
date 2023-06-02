
//ORDER 1
const oneRoot = document.querySelector('[data-key = "order1"]')
const oneBiscuits= oneRoot.querySelector('.biscuits')
const oneDonuts= oneRoot.querySelector('.donuts')
const onePancakes= oneRoot.querySelector('.pancakes')
const oneStatus= oneRoot.querySelector('.status')

let oneBiscuitsValue = oneBiscuits.querySelector('.count') 
let oneDonutsValue = oneDonuts.querySelector('.count') 
let onePancakesValue = onePancakes.querySelector('.count')
let oneStatusValue = oneStatus.querySelector('dd')  

oneBiscuitsValue.textContent = oneRoot.dataset.biscuits
oneDonutsValue.textContent = oneRoot.dataset.donuts
onePancakesValue.textContent = oneRoot.dataset.pancakes
oneStatusValue.textContent = (oneRoot.dataset.delivered === "true") ? 'Delivered' : 'Pending'

// ORDER 2
const twoRoot = document.querySelector('[data-key = "order2"]')
const twoBiscuits= twoRoot.querySelector('.biscuits')
const twoDonuts= twoRoot.querySelector('.donuts')
const twoPancakes= twoRoot.querySelector('.pancakes')
const twoStatus= twoRoot.querySelector('.status')

let twoBiscuitsValue = twoBiscuits.querySelector('.count') 
let twoDonutsValue = twoDonuts.querySelector('.count') 
let twoPancakesValue = twoPancakes.querySelector('.count')
let twoStatusValue = twoStatus.querySelector('dd')  

twoBiscuitsValue.textContent = twoRoot.dataset.biscuits
twoDonutsValue.textContent = twoRoot.dataset.donuts
twoPancakesValue.textContent = twoRoot.dataset.pancakes
twoStatusValue.textContent = (twoRoot.dataset.delivered === "true") ? 'Delivered' : 'Pending'

//ORDER 3

const threeRoot = document.querySelector('[data-key = "order3"]')
const threeBiscuits= threeRoot.querySelector('.biscuits')
const threeDonuts= threeRoot.querySelector('.donuts')
const threePancakes= threeRoot.querySelector('.pancakes')
const threeStatus= threeRoot.querySelector('.status')

let threeBiscuitsValue = threeBiscuits.querySelector('.count') 
let threeDonutsValue = threeDonuts.querySelector('.count') 
let threePancakesValue = threePancakes.querySelector('.count')
let threeStatusValue = threeStatus.querySelector('dd')  

threeBiscuitsValue.textContent = threeRoot.dataset.biscuits
threeDonutsValue.textContent = threeRoot.dataset.donuts
threePancakesValue.textContent = threeRoot.dataset.pancakes
threeStatusValue.textContent = (threeRoot.dataset.delivered === "true") ? 'Delivered' : 'Pending'
