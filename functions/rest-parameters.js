// const team = (team, coach, ...players) => {
//   return `Team: ${team}, Coach:${coach}, Players ${players}`;
// };

// const print = team(
//   "Liberty",
//   "Omar Vega",
//   "Omar Aleandro",
//   "Rosely de los Santos",
//   "Abigail"
// );

// console.log(print);
function doAsyncTask(cb) {
  cb(message);
}
doAsyncTask(_ => console.log(message));

let message = "callback called";
