const solution = (phone) => {
  return "*".repeat(phone.length - 4) + phone.substring(phone.length - 4);
};

console.log(solution("01033334444"));
console.log(solution("027778888"));
