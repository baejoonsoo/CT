const solution = (fees, records) => {
  const [defMin, defMoney, minute, fee] = fees;
  let log = {};

  records.forEach((record) => {
    let [time, carNum, action] = record.split(" ");

    if (action === "IN") {
      if (log[carNum]) {
        log[carNum] = {
          ...log[carNum],
          inTime: time,
        };
      } else {
        log[carNum] = {
          cumTime: 0,
          inTime: time,
        };
      }
    } else if (action === "OUT") {
      let [newH, newM] = record
        .split(" ")[0]
        .split(":")
        .map((n) => parseInt(n));
      let [oldH, oldM] = log[carNum].inTime.split(":").map((n) => parseInt(n));

      const time = newH * 60 + newM - (oldH * 60 + oldM);

      log[carNum] = {
        inTime: "",
        cumTime: log[carNum].cumTime + time,
      };
    }
  });

  Object.keys(log).forEach((key) => {
    if (log[key].inTime) {
      let [oldH, oldM] = log[key].inTime.split(":").map((n) => parseInt(n));
      let [newH, newM] = [23, 59];

      const time = newH * 60 + newM - (oldH * 60 + oldM);

      log[key] = {
        inTime: "",
        cumTime: log[key].cumTime + time,
      };
    }
  });

  return Object.keys(log)
    .sort((a, b) => a - b)
    .map((key) => {
      const cumTime = log[key].cumTime;
      const t = cumTime - defMin > 0 ? cumTime - defMin : 0;

      return defMoney + Math.ceil(t / minute) * fee;
    });
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
