module.exports = {
  timeElapsed: (date) => {
    if (!date) {
      return "";
    }
    const givenDate = new Date(date);
    // Get the current date and time
    const currentDate = new Date();
    // Calculate the time difference in milliseconds
    const timeDifferenceInMs = currentDate - givenDate;

    // Calculate the elapsed hours and minutes
    const elapsedHours = Math.floor(timeDifferenceInMs / (1000 * 60 * 60));
    const elapsedMinutes = Math.floor((timeDifferenceInMs % (1000 * 60 * 60)) / (1000 * 60));
    const elapsedSeconds = Math.floor((timeDifferenceInMs/ 1000)) +1;
    const txt = elapsedHours > 0 ? `${elapsedHours} hours , ${elapsedMinutes} minutes` : elapsedMinutes > 0 ? `${elapsedMinutes} minutes` : `${elapsedSeconds} seconds`;
    return txt;
  }

};
