function calAttendance(){
let employeeAttendance=Math.floor(Math.random()*2);
return employeeAttendance;
}

module.exports={
    calAttendance:calAttendance
}
