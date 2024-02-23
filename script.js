var date = document.createElement("input");
date.setAttribute("type","date");
date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button");
button.innerHTML = "Check your age";
button.addEventListener("click",getdate);

document.body.append(date,button);

function getdate(){
    var dob_year = document.getElementById("dob").value;
    var dob_year = new Date(document.getElementById("dob").value);
    var user_year = new Date(dob_year);
    var cur_year = new Date();
    console.log(user_year.getTime());
    console.log(cur_year.getTime());

    var millisec = parseInt(cur_year.getTime() - user_year.getTime());
//    console.log("Milli Seconds: " + millisec);

    var sec = Math.floor(millisec/1000);
//    console.log("Seconds: " + sec);

    var min = Math.floor(sec/60);
//    console.log("Minutes: " + min);
    
    var hours = Math.floor(min/60);
//    console.log("Hours: " + hours);

    var day = Math.floor(hours/24);
//    console.log("Days: " + day);

    var years = (cur_year.getFullYear() - user_year.getFullYear());
//    console.log("Years: " + years);
    
    var months = Math.floor(years*12) + (cur_year.getMonth() - user_year.getMonth());
    //console.log("Months: " + months); 

    var ele = document.createElement("div");
    ele.innerHTML = `Milli Seconds: ${millisec}<br/>
    Seconds: ${sec}<br/>
    Minutes: ${min}<br/>
    Hours: ${hours}<br/>
    Days: ${day}<br/>
    Months: ${months}<br/>
    Years: ${years}`;  

    document.body.append(ele);
}