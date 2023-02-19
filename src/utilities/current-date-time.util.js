export default function currentDateAndTiem() {
  var toDay = new Date();
  var date =
    toDay.getFullYear() + "-" + (toDay.getMonth() + 1) + "-" + toDay.getDate();
  var time =
    toDay.getHours() + ":" + toDay.getMinutes() + ":" + toDay.getSeconds();
  var dateTime = date + " " + time;

  return dateTime;
}
