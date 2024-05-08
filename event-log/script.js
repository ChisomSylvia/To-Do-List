const wereWolfLog = [];

function logEvent(event) {
    wereWolfLog.push(`${new Date().toLocaleString()}: ${event}`);
}

function displayLog() {
    wereWolfLog.forEach((event, index) => {
        console.log(`${index+1}. ${event}`);
    });
}

logEvent('full moon night');
logEvent('Werewolf growling sounds');
logEvent('Dead carcasses found in the area');

displayLog();