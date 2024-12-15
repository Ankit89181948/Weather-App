const apiKey="7f5c69a5e2897db1885a008efe5f5ae0";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric";
async function check_weather(city_name){
    const response = await fetch(apiURL+`&q=${city_name}`+ `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp").innerText=data.main["temp"]+"°C";
    document.querySelector(".humidity").innerText=data.main["humidity"]+"%";
    document.querySelector(".wind").innerText=data.wind["speed"]+" km/h";
}
let city_name1="";
let city_name2="";

city_name1=document.querySelector(".city").innerText;
check_weather(city_name1);

let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    city_name2=document.querySelector(".inp").value;
    if(city_name2!=""){
        city_name1=city_name2;
    }
    console.log(city_name1);
    check_weather(city_name1);

});

