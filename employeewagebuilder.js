//importing employee class from employee.js
import { employee } from './employee.js'; 
//importing employeeattendance function from employeeattendance.js
let attendance=require('./employeeattendance')
//importing dailywage function from dailywage.js
let dailywage =require('./dailywage')
//importing wagePerMonth class from wageformonth.js
let wagePerMonth =require('./wageformonth')

export class employeewagebuilder {
    companyname;
    employee;
    wagePerhour=8;
    constructor(companyname, employee) {
        this.employee.hours = employee.hours;
        this.companyname = companyname;
    }
    getcompanyname() {
        return this.companyname;
    }
    getemployeeattendance() {
        return attendance.calAttendance();
    }
    getdailywage(){
        return dailywage.calDailyWage(this.employee.hours);
    }
    getmonthlywage(){
        return wagePerMonth.calWagePerMonth(this.getemployeeattendance);
    }

}