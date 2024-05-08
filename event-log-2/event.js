// Define a class for WerewolfEvent
class WerewolfEvent {
    constructor(description, date) {
      this.description = description;
      this.date = date;
    }
  
    // Method to format the event for display
    formatEvent() {
      return `${this.date}: ${this.description}`;
    }
  }
  
// Define a class for WerewolfEventLog
class WerewolfEventLog {
    constructor() {
      this.eventLog = [];
    }
  
    // Method to log a new event
    logEvent(description, date) {
      const event = new WerewolfEvent(description, date);
      this.eventLog.push(event);
    }
  
    // Method to display all events in the log
    displayEventLog() {
      console.log("Werewolf Event Log:");
      this.eventLog.forEach((event, index) => {
        console.log(`${index + 1}. ${event.formatEvent()}`);
      });
    }
  }
  
// Create an instance of WerewolfEventLog
const newEvent = new WerewolfEventLog();
  
  // Sample events
  newEvent.logEvent("Full moon spotted in the sky.", new Date().toLocaleString());
  newEvent.logEvent("Animal attacks reported in the area.", new Date().toLocaleString());
  newEvent.logEvent("Strange growling noises heard at night.", new Date().toLocaleString());
  
  // Display the event log
  newEvent.displayEventLog();