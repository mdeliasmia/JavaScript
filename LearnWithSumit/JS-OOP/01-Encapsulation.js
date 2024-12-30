// YoutubeTutorialLink = https://www.youtube.com/watch?v=COn9x4NbOBY
class Player{
    #name; // # is ES-6 private access modifier !
    #birtyDay;
    #noOfMonth;
    #monthlySalary;
    constructor( nm, bD, mS, nOM ){
        this.#name = nm;
        this.#birtyDay = bD;
        this.#noOfMonth = nOM;
        this.#monthlySalary = mS;
    };
    calculate_age(){
        const diff_ms = Date.now() - new Date(this.#birtyDay).getTime();
        //console.log(typeof(diff_ms));
        console.log(diff_ms);
        const age_dt = new Date(diff_ms);
        console.dir(age_dt);

        return Math.abs( age_dt.getUTCFullYear()-1970);
    };
    calculate_age1(dob) { 
        // Calculate the difference in milliseconds between the current date and the provided date of birth
        var diff_ms = Date.now() - new Date(dob).getTime();
        // Create a new Date object representing the difference in milliseconds and store it in the variable age_dt (age Date object)
        var age_dt = new Date(diff_ms); 
        console.log(age_dt);
        // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
        return Math.abs(age_dt.getUTCFullYear()-1970);
    };
    _calculateAge(birthday) { 
        var ageDifMs = Date.now() - new Date(birthday).getTime();
        var ageDate = new Date(ageDifMs); 
        //The getUTCFullYear() methods return the date and time in the UTC timezone, while the other functions return the date and time in the local timezone of the computer that the script is running on
        return Math.abs(ageDate.getFullYear() - 1970);
    }
    getSalary(){
        return (this.#monthlySalary * this.#noOfMonth).toLocaleString();
    }
}

const musfiq = new Player( "Musfiq", "12-21-1982", 200000, 12); //DateFormate("Month-day-year")
const sakib = new Player( "sakib", "12/21/1982", 200000, 12); //DateFormate("Month/day/year")
console.log(musfiq.calculate_age());
console.log(sakib.calculate_age());
console.log(musfiq.calculate_age1("1982,01,21"));//DateFormate("year/Month/day")
console.log(musfiq._calculateAge("1982,01,01"));//DateFormate("year/Month/day")
console.log(musfiq._calculateAge("01-01-1982"));
console.log(musfiq.getSalary());
