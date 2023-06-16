
var day,
  mon,
  year,
  date,
  x = document.querySelectorAll("input");
  let arrow = document.querySelector(".circle");
setInterval(function(){
    date = new Date();
 x = document.querySelectorAll("input");
     day = x[0].value;
     mon = x[1].value;
     year = x[2].value;
   
console.log(day, mon, year,date.getDate(),date.getFullYear(),date.getMonth());},1000)

let days = document.querySelector(".days span");
let years = document.querySelector(".year span");
let month = document.querySelector(".month span");
let d = document.querySelector(".d");
let m = document.querySelector(".m");
let y = document.querySelector(".y");

 arrow.addEventListener("click",sumbit);
 function sumbit(){
    let count=0;
    let leap;
    if (year % 4 == 0) {

     
      if (year % 100 == 0) {

     
        if (year % 400 == 0)
          leap = true;
        else
          leap = false;
      }
    
      else
        leap = true;
    }
    
    else
      leap = false;

    if(day==="") {d.innerHTML="This field is required";   }
    else if(day<32&&day>0)
    {
        if(day===31){if(mon===1&&mon===3&&mon===5&&mon===7&&mon===8&&mon==10&&mon===12){ count++; d.innerHTML = "";}
    else{d.innerHTML = "Enter valid day";}}
        else if(day===30){if(mon===2){d.innerHTML = "Enter valid day";}
    else {count++; d.innerHTML = "";}}
        else if(day===29) {if(mon===2){if (leap) {
          count++; d.innerHTML = "";
        } else {
          d.innerHTML = "Enter valid day";
        }}
        else {count++; d.innerHTML = "";}
    
}
        else if(day<29){count++;d.innerHTML = "";}
     else { d.innerHTML = " Enter valid day";}}
    else {
      d.innerHTML = " Enter valid day";
  
    }
    if (mon === "") {
      m.innerHTML = "This field is required";
    }
    else if(mon<13&&mon>0){ count++;m.innerHTML = "";}
    
    else {
      m.innerHTML = "Enter valid month";
   }
    if (year === "") {
      y.innerHTML = "This field is required";
   }
   else if(year<=date.getFullYear()&&year>0){count++;y.innerHTML = "";}
     else {
      y.innerHTML = "Enter valid year";
    
}
if(count===3){
     let leap;
     if (date.getFullYear() % 4 == 0) {
       if (date.getFullYear() % 100 == 0) {
         if (date.getFullYear() % 400 == 0) leap = true;
         else leap = false;
       } else leap = true;
     } else leap = false;

let x=date.getDate();
let y=date.getMonth()+1;
let z=date.getFullYear();
if (x - day<0){
   
    if(y===2){if(leap){x=x+29;  days.innerHTML = x - day;}
     else {x=x+28;  days.innerHTML = x - day;}}
     else if(y===1&&y===3&&y===5&&y===7&&y===8&&y==10&&y===12){x=x+31; days.innerHTML = x - day;}
    else {x=x+30;  days.innerHTML = x - day;}
 if (y === 1) {
   y = 12;
   z = z - 1;
 } else {
   y = y - 1;
 } }
else { days.innerHTML = x - day;} 


if(y-mon<0){y=y+12; month.innerHTML = y - mon; z=z-1;}
else {month.innerHTML = y - mon;}
years.innerHTML=z-year;
}
else {
    days.innerHTML="--";
    month.innerHTML="--";
    years.innerHTML="--";
}
 }

 x[0].addEventListener('keyup',function (e){
    if(e.code==='Enter') {   arrow.click();}
 });

 x[1].addEventListener("keyup", function (event) {
   if (event.code === "Enter") {
   arrow.click();
   }
   
 });
  x[2].addEventListener("keyup", function (e) {
    if (e.code === "Enter") {
     
  arrow.click();
    }
  });