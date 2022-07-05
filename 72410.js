function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/(^\.|\.$)/, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return new_id.padEnd(3, new_id[new_id.length - 1]);
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
