let days=20
let dailywage=require('./dailywage')
function calWagePerMonth(employeeAttendance){
    let wagePerMonth=days*dailywage.calDailyWage(employeeAttendance=1)
    console.log(wagePerMonth)
}
module.exports={
    calWagePerMonth:calWagePerMonth
}

