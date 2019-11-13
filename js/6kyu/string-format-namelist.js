// https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(people) {
  let nameString = "";
  people.forEach((person, i) => {
    nameString += person.name + getSeparator(i + 1, people.length);
  });
  return nameString;
}

function getSeparator(order, numberOfNames) {
  if(numberOfNames === 1 || order === numberOfNames) {
    return "";
  } else if(order === numberOfNames - 1) {
    return " & ";
  } else {
    return ", ";
  }
}