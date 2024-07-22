function calAttendance(){
let employeeAttendance=Math.floor(Math.random()*2);
return employeeAttendance;
}

module.exports={
    calAttendance:calAttendance
}
// if(employeeAttendance==1)
// {
//     console.log("Present");
// }
// else
// {
//     console.log("Absent");
// }