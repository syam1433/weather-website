
//menu bar
document.getElementById("toggleButton").addEventListener("click", function() {
    var menus = document.getElementById("menus");
    if (menus.style.display === "none" || menus.style.display === "") {
        menus.style.display = "block"; 
        setTimeout(function() {
            menus.style.right = "0"; 
        }, 10); 
    } else {
        menus.style.right = "-220px"; 
        setTimeout(function() {
            menus.style.display = "none"; 
        }, 500); n
    }
});

let btn=document.getElementById("search")
let temp=document.querySelector(".p1");
let pcondition=document.querySelector(".cloudy");
let splace=document.querySelector(".place");
let mintemp=document.querySelector(".p2");
let maxtemp=document.querySelector(".p3");
let windspeed=document.querySelector(".p4");
let address=document.querySelector(".address");
let day2=document.querySelector(".day-2");
let day3=document.querySelector(".day-3");
let day4=document.querySelector(".day-4");
let day5=document.querySelector(".day-5");
let day6=document.querySelector(".day-6");
let day7=document.querySelector(".day-7");
//day1
let daytemp1=document.getElementById("temp1");
let mintemp1=document.getElementById("mintemp1");
let maxtemp1=document.getElementById("maxtemp1");
let windtemp1=document.getElementById("windtemp1");
let windsppedtemp1=document.getElementById("windspeedtemp1");
//day2
let daytemp2=document.getElementById("temp2");
let mintemp2=document.getElementById("mintemp2");
let maxtemp2=document.getElementById("maxtemp2");
let windtemp2=document.getElementById("windtemp2");
let windsppedtemp2=document.getElementById("windspeedtemp2");
//day3
let daytemp3=document.getElementById("temp3");
let mintemp3=document.getElementById("mintemp3");
let maxtemp3=document.getElementById("maxtemp3");
let windtemp3=document.getElementById("windtemp3");
let windsppedtemp3=document.getElementById("windspeedtemp3");
//day4
let daytemp4=document.getElementById("temp4");
let mintemp4=document.getElementById("mintemp4");
let maxtemp4=document.getElementById("maxtemp4");
let windtemp4=document.getElementById("windtemp4");
let windsppedtemp4=document.getElementById("windspeedtemp4");
//day5
let daytemp5=document.getElementById("temp5");
let mintemp5=document.getElementById("mintemp5");
let maxtemp5=document.getElementById("maxtemp5");
let windtemp5=document.getElementById("windtemp5");
let windsppedtemp5=document.getElementById("windspeedtemp5");
//day6
let daytemp6=document.getElementById("temp6");
let mintemp6=document.getElementById("mintemp6");
let maxtemp6=document.getElementById("maxtemp6");
let windtemp6=document.getElementById("windtemp6");
let windsppedtemp6=document.getElementById("windspeedtemp6");
//day7
let daytemp7=document.getElementById("temp7");
let mintemp7=document.getElementById("mintemp7");
let maxtemp7=document.getElementById("maxtemp7");
let windtemp7=document.getElementById("windtemp7");
let windsppedtemp7=document.getElementById("windspeedtemp7");
//condtions
let winddirection=document.querySelector(".conwinddir");
let windspped=document.querySelector(".conwindspeed");
let windgust=document.querySelector(".conwindgust");
let sunrise=document.querySelector(".sunrise");
let sunset=document.querySelector(".sunset");
let visibility=document.querySelector(".visibility");
let dew=document.querySelector(".Dew");
let humidity=document.querySelector(".Humidity");
let clouds=document.querySelector(".clouds");
btn.addEventListener("click", async ()=>{
    let city=document.querySelector(".input").value;
    let base_url1=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/$%7B${city}%7D?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`;
    let respone= await fetch(base_url1);
    if (!respone.ok){
        alert("unable fetch the weather data please enter the correct city name");
    }
    else{
    let data=await respone.json();
    //datetime to day converting
    function getDayOfWeek(dateString) {
        const date = new Date(dateString);
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[date.getDay()]; 
    }
    let datetime = data.days[0].datetime;
    let dayOfWeek = getDayOfWeek(datetime);
    //placing the data
    temp.innerText=data.currentConditions.temp;
    splace.innerText=city;
    pcondition.innerText=data.currentConditions.conditions;
    mintemp.innerText=`mintemp = ${data.days[0].tempmin}`;
    maxtemp.innerText=`maxtemp = ${data.days[0].tempmax}`;
    windspeed.innerText=`windspeed = ${data.days[0].windspeed}`;
    address.innerText=`${data.resolvedAddress}`;
    //day2
    datetime=data.days[1].datetime;
    dayOfWeek=getDayOfWeek(datetime);
    day2.innerText=dayOfWeek;
    //day3
    datetime=data.days[2].datetime;
    dayOfWeek=getDayOfWeek(datetime);
    day3.innerText=dayOfWeek;
    //day4
    datetime=data.days[3].datetime;
    dayOfWeek=getDayOfWeek(datetime);
    day4.innerText=dayOfWeek;
    //day5
    datetime=data.days[4].datetime;
    dayOfWeek=getDayOfWeek(datetime);
    day5.innerText=dayOfWeek;
    //day6
    datetime=data.days[5].datetime;
    dayOfWeek=getDayOfWeek(datetime);
    day6.innerText=dayOfWeek;
    //day7
    datetime=data.days[6].datetime;
    dayOfWeek=getDayOfWeek(datetime);
    day7.innerText=dayOfWeek;
    //weeklydata
    daytemp1.innerText=`${data.days[0].temp}`;
    mintemp1.innerText=`min temp ${data.days[0].tempmin}`;
    maxtemp1.innerText=`max temp ${data.days[0].tempmax}`;
    windtemp1.innerText=` wind dir ${data.days[0].winddir}`;
    windsppedtemp1.innerText=`wind speed ${data.days[0].windspeed}`;
    //day2
    daytemp2.innerText=`${data.days[1].temp}`;
    mintemp2.innerText=`min temp ${data.days[1].tempmin}`;
    maxtemp2.innerText=`max temp ${data.days[1].tempmax}`;
    windtemp2.innerText=` wind dir ${data.days[1].winddir}`;
    windsppedtemp2.innerText=`wind speed ${data.days[1].windspeed}`;
    //day3
    daytemp3.innerText=`${data.days[2].temp}`;
    mintemp3.innerText=`min temp ${data.days[2].tempmin}`;
    maxtemp3.innerText=`max temp ${data.days[2].tempmax}`;
    windtemp3.innerText=` wind dir ${data.days[2].winddir}`;
    windsppedtemp3.innerText=`wind speed ${data.days[2].windspeed}`;
    //day4
    daytemp4.innerText=`${data.days[3].temp}`;
    mintemp4.innerText=`min temp ${data.days[3].tempmin}`;
    maxtemp4.innerText=`max temp ${data.days[3].tempmax}`;
    windtemp4.innerText=` wind dir ${data.days[3].winddir}`;
    windsppedtemp4.innerText=`wind speed ${data.days[3].windspeed}`;
    //day5
    daytemp5.innerText=`${data.days[4].temp}`;
    mintemp5.innerText=`min temp ${data.days[4].tempmin}`;
    maxtemp5.innerText=`max temp ${data.days[4].tempmax}`;
    windtemp5.innerText=` wind dir ${data.days[4].winddir}`;
    windsppedtemp5.innerText=`wind speed ${data.days[4].windspeed}`;
    //day6
    daytemp6.innerText=`${data.days[5].temp}`;
    mintemp6.innerText=`min temp ${data.days[5].tempmin}`;
    maxtemp6.innerText=`max temp ${data.days[5].tempmax}`;
    windtemp6.innerText=` wind dir ${data.days[5].winddir}`;
    windsppedtemp6.innerText=`wind speed ${data.days[5].windspeed}`;
    //day7
    daytemp7.innerText=`${data.days[6].temp}`;
    mintemp7.innerText=`min temp ${data.days[6].tempmin}`;
    maxtemp7.innerText=`max temp ${data.days[6].tempmax}`;
    windtemp7.innerText=` wind dir ${data.days[6].winddir}`;
    windsppedtemp7.innerText=`wind speed ${data.days[6].windspeed}`;
    //conditions
    winddirection.innerText=`wind direction: ${data.days[0].winddir}`;
    windspeed.innerText=`wind speed: ${data.days[0].windspeed}`;
    windgust.innerText=`wind gust: ${data.days[0].windgust}`;
    sunrise.innerText=`sunrise : ${data.days[0].sunrise}`;
    sunset.innerText=`sunset : ${data.days[0].sunset}`;
    visibility.innerText=`Visibility : ${data.days[0].visibility}`;
    dew.innerText=`dew : ${data.days[0].dew}`;
    humidity.innerText=`humidity : ${data.days[0].humidity}`;
    clouds.innerText=`clouds : ${data.days[0].cloudcover}`;
    }
});