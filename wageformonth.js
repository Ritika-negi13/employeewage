let days=20
let dailywage=require('./dailywage')
let employeeattendance=require('./employeeattendance')
function calWagePerMonth(employeeAttendance){
    let wagePerMonth=0;
    for(let i=1;i<=days;i++)
    {
        wagePerMonth+=dailywage.calDailyWage(employeeattendance.calAttendance())
    }
    
    console.log(wagePerMonth)
}
module.exports={
    calWagePerMonth:calWagePerMonth
}

