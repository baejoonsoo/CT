const solution = (jobs) => {
  let time = 0;
  let workingTime = 0;
  let queue = [];
  let isWork = false;
  jobs = jobs.sort((a, b) => a[0] - b[0]);

  while (jobs.length) {
    const newWork = jobs.find((job) => job[0] === workingTime);
    if (newWork) {
      queue.push(newWork);
    }

    if (!isWork) {
      queue = queue.sort((a, b) => a[1] - b[1]);
      isWork = true;
      work;
    }

    time++;
  }
};

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
