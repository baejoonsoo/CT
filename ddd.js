function solution(S) {
  S = S.replace(/(\/\*)([^\/\*]+)(\*\/)/, "");

  const tempS = /^\((\)\()\)$/.test(S.replace(/[^()]/g, ""));

  if (!tempS) return "FALSE";

  temp2 = S.slice(1, S.length - 1).split(/\)\(/g);

  let mapT = {};

  for (let c of temp2) {
    if (c[0] === "!") {
      c = c.slice(1);
      if (!/(\w.+)=(\d+)/.test(c)) return "FALSE";

      const [n, v] = c.split("=");

      mapT[n] = v;
    } else {
      const a = mapT[c];

      if (a) {
        return `()(${a})`;
      } else {
        return "FALSE";
      }
    }
  }
}

console.log(solution("(!abcd=10/*()}[*/)abcd)"));
console.log(solution("(!abcd=10/*()}[*/)/*abcd*/)"));
