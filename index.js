console.log("hello")

let attendance=require('./employeeattendance')
let employeeattendance=attendance.calAttendance();
console.log(employeeattendance==1?"Present":"Absent");

let dailywage =require('./dailywage')
console.log(dailywage.calDailyWage(employeeattendance));

let parttimewage=require('./parttimemployee')
console.log(parttimewage.partTimeWage());