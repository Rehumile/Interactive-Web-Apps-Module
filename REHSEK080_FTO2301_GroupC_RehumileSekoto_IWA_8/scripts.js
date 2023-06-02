const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'
// const sarahBalance = '-5'

// Only change below this line
/**
 * @typedef {Object} personDetails
 * @property {string} userName - Name and Surname of Person
 * @property {number} balance - Balance of the person
 * @property {string} 'access id' - Id of person
 * @property {number} age - age of person
 * @property {{number : number, street : string, 'postal-code' : string}} address - address of person
 */

/**
 * @type {personDetails}
 */
const leo = {
	userName: 'Leo Musvaire',
	balance: -10,
	'access id': '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	 address: {
		number: 2,
		street: 'Church St.',
		'postal-code': 3105,
	}
}
/**
 * @type {personDetails}
 */
const sarah = {
	userName: 'Sarah Kleinhans',
	age: 62,
	'access id': '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: -4582.21000111,
	address: {
		number: 13,
		street: 'William Close',
		'postal-code': 0310,
	}
}

console.log(leo, leo['address']['postal-code'])
console.log(sarah, sarah['address']['postal-code'])