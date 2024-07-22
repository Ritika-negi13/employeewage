console.log("hello")

let attendance=require('./employeeattendance')
console.log(attendance.calAttendance()==1?"Present":"Absent");

let dailywage =require('./dailywage')
console.log(dailywage.calDailyWage(employeeAttendance));