function formatTime(timeStamp) {
  const date = new Date(timeStamp);
  const day = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];
  return day;
}
// @param reservationTime:预约时间
// @param startTime：开始预约时间
// @param cookTime：需要煮的时长
function reservation({ reservationTime, startTime, cookTime }) {
  const date = new Date();
  const tomrrow = formatTime(date.getTime() + 24 * 60 * 60 * 1000);
  const tomrrowTime = `${tomrrow[0]}/${tomrrow[1]}/ ${tomrrow[2]}  ${reservationTime}`;
  const now = formatTime(date.getTime());
  const setTime = startTime
    ? `${now[0]}/${now[1]}/ ${now[2]}  ${startTime}`
    : date.getTime();
  const distance = new Date(tomrrowTime) - new Date(setTime) || date;
  const cook = cookTime.split(":");

  return [
    distance / 1000 / 60 / 60 + +cook[0],
    ((distance / 1000 / 60) % 60) + +cook[1],
    ((distance / 1000) % 60) + +cook[2]
  ];
}

const time = reservation({
  reservationTime: "6:30:00",
  // startTime: "23:30:00",
  cookTime: "01:10:00"
});
const res = `${Math.floor(time[0])}:${time[1].toFixed()}:${time[2].toFixed()}`;
console.log(res);
