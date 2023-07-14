javascript: (function () {
  const addZero = (x) => (`${x}`.length <= 1 ? `0${x}` : `${x}`);
  const totaltime = (x) =>
    addZero(Math.floor(x / 3600)) +
    ":" +
    addZero(Math.floor((x % 3600) / 60)) +
    ":" +
    addZero(x % 60);
  const toSecs = (x) => x.split(":")[0] * 60 + +x.split(":")[1];
  let matches = [...document.querySelectorAll(".MatchCard")];
  let matchesWithTime = matches
    .map((x) => x.textContent)
    .filter((x) => /(\d*:\d\d)/.test(x))
    .map((x) => x.match(/(\d*:\d\d)/)[0]);
  let totalMatchTimeSecs = matchesWithTime.reduce((t, v) => t + toSecs(v), 0);
  let avgMatchTime = totaltime(
    Math.floor(totalMatchTimeSecs / matchesWithTime.length)
  );
  let totalMatchTime = totaltime(totalMatchTimeSecs);
  let matchInfoString = `Matches With Time = ${matchesWithTime.length}\nTotal Match Time = ${totalMatchTime}\nAverage Match Time = ${avgMatchTime}`;
  console.log(matchInfoString);
})();
