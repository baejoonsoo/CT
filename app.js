function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id
    .split(/[^a-z0-9-_.]/gm)
    .join("")
    .split(/\.+/gm)
    .join(".");

  if (new_id[0] === ".") new_id = new_id.slice(1);
  if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);

  if (!new_id.length) new_id += "a";

  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  if (new_id[new_id.length - 1] === ".") new_id = new_id.slice(0, -1);

  if (new_id.length <= 2) {
    for (let i = 0; i <= 3 - new_id.length; i++) {
      new_id += new_id[new_id.length - 1];
    }
  }

  return new_id;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm."));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));
