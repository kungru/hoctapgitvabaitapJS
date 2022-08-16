const birthday = "19 Feb 2023";
const day= document.getElementById("days");
console.log(day);
const hour= document.getElementById('hours');
const minute= document.getElementById('minutes');
const second= document.getElementById('seconds');
function countDown(){
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();
    const Total=Math.floor(birthdayDate-currentDate)/1000;
    const Day= Math.floor(Total /3600/24);
    const Hour=Math.floor(Total/3600)%24;
    const Minute=Math.floor(Total/60)%60;
    const Second=Math.floor(Total)%60;
    console.log(Day, Hour,Minute, Second );
    day.innerHTML = Day;
    hour.innerHTML =FormatTime(Hour);
    minute.innerHTML = FormatTime(Minute);
    second.innerHTML = FormatTime(Second);
};
function FormatTime(time){
    return time <10 ? `0${time}` : time;
}
countDown();

setInterval(countDown, 1000);