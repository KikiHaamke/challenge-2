showTime();
setInterval(showTime, 1000);

function showTime(){
    var date = new Date();

    var UTCHours = date.getUTCHours();
    setDayPart(UTCHours);

    document.getElementById("GMT").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'Europe/London'});
    document.getElementById("EST").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'America/New_York'});
    document.getElementById("PDT").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'America/Los_Angeles'});
    document.getElementById("JST").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'Asia/Tokyo'});
    document.getElementById("HST").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'Pacific/Honolulu'});
}

function setDayPart(hours) {
    if (hours < 6) {
        // good night
        document.body.className = 'night';
        document.getElementById('message').innerText = 'Good night!';
    } else if (hours < 12) {
        // good morning
        document.body.className = 'morning';
        document.getElementById('message').innerText = 'Good morning!';
    } else if (hours < 18) {
        // good day
        document.body.className = 'day';
        document.getElementById('message').innerText = 'Good day!';
    } else {
        // good evening
        document.body.className = 'evening';
        document.getElementById('message').innerText = 'Good evening! It\'s movie night tonight!';
    }
}