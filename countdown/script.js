setInterval(() => {
    const countdown = document.getElementById("countdown");
    const Currenttime   = new Date();
    const Targettime = new Date(2027, 11 ,12 ).getTime();
    const TimeDifference = Targettime - Currenttime.getTime();

    const days = Math.floor(TimeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((TimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((TimeDifference % (1000 * 60)) / 1000);
    
    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);