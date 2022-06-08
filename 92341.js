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

/*
function solution(fees, records) {
    const parkingTime = {};
    records.forEach(r => {
        let [time, id, type] = r.split(' ');
        let [h, m] = time.split(':');
        time = (h * 1) * 60 + (m * 1);
        if (!parkingTime[id]) parkingTime[id] = 0;
        if (type === 'IN') parkingTime[id] += (1439 - time); // 23:59에서 들어온 시간 뺀 값 저장 // 나온 시간이 찍히지 않은 경우 out에서 처리하지 않아 23:59분까지의 시간이 더해짐
        if (type === 'OUT') parkingTime[id] -= (1439 - time); // 23:59에서 나온 시간 뺀 값 저장
    });
    const answer = [];
    for (let [car, time] of Object.entries(parkingTime)) {
        if (time <= fees[0]) time = fees[1];
        else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
        answer.push([car, time]);
    }
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
} 
*/
