module.exports = {
  timeElapsed: (date) => {
    const givenDate = new Date(date);
    // Get the current date and time
    const currentDate = new Date();
    // Calculate the time difference in milliseconds
    const timeDifferenceInMs = currentDate - givenDate;

    // Calculate the elapsed hours and minutes
    const elapsedHours = Math.floor(timeDifferenceInMs / (1000 * 60 * 60));
    const elapsedMinutes = Math.floor((timeDifferenceInMs % (1000 * 60 * 60)) / (1000 * 60));
    const txt = elapsedHours > 0 ? `${elapsedHours} hours , ${elapsedMinutes} minutes` : `${elapsedMinutes} minutes`;
    return txt;
  }

};
