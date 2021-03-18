showTime();
setInterval(showTime, 1000);

function showTime(){
    var date = new Date();

    var UTCHours = date.getUTCHours();
    setDayPart(UTCHours);

    document.getElementById('date').innerText = date.toLocaleDateString();

    document.getElementById("GMT").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'Europe/London'});
    document.getElementById("EST").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'America/New_York'});
    document.getElementById("PDT").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'America/Los_Angeles'});
    document.getElementById("JST").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'Asia/Tokyo'});
    document.getElementById("HST").innerText = date.toLocaleTimeString('en-EN', {timeZone: 'Pacific/Honolulu'});
}

function setDayPart(hours) {
    if (hours < 6) {
        // good night
        document.getElementById('graphic').className = 'night';
        // document.getElementById('message').innerText = 'Good night! Time to go to bed.';
        document.getElementById('animation-wrapper').className = 'night';
    } else if (hours < 12) {
        // good morning
        document.getElementById('graphic').className = 'morning';
        // document.getElementById('message').innerText = 'Good morning! Time for breakfast.';
        document.getElementById('animation-wrapper').className = 'morning';
    } else if (hours < 18) {
        // good day
        document.getElementById('graphic').className = 'day';
        // document.getElementById('message').innerText = 'Good day! It is a beautiful day today.';
        document.getElementById('animation-wrapper').className = 'day';
    } else {
        // good evening
        document.getElementById('graphic').className = 'evening';
        // document.getElementById('message').innerText = 'Good evening! Movie night!';
        document.getElementById('animation-wrapper').className = 'evening';
    }
}