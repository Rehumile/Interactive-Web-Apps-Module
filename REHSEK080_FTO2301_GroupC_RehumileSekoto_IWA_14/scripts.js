const firstName = 'John';
const age = 35;
const userHobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function Hobby() {
  logTwice(`Hello, ${firstName} (${age}). I love ${userHobby}!`)
}

Hobby();
