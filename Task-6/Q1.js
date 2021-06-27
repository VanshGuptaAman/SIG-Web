// WAP in js to check given year is leap year.
var Year = 2020;
if(Year % 4 === 0){
    if( Year % 100 === 0){
        if(Year % 400 === 0){
            console.log("The Year " + Year + " is a Leap Year.");
        }
        else{
            console.log("The Year " + Year + " is not a Leap Year.");
        }
    }
    else{
        console.log("The Year " + Year + " is a Leap Year.");
    }
}
else{
    console.log("The Year " + Year + " is not a Leap Year.");
}