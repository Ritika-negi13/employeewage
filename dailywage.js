let hours=8, wagePerHour=20;

function calDailyWage( employeeAttendance){
    if(employeeAttendance==0)
    {
        return 0;
    }
    return hours*wagePerHour;
}

module.exports={
    calDailyWage:calDailyWage
}


