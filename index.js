// Initialize facility data
const facilities = {
  Clubhouse: {
    "10:00-16:00": 100,
    "16:00-22:00": 500,
  },
  "Tennis Court": {
    anytime: 50,
  },
  Pool: {
    "10:00-14:00": 150,
    "16:00-20:00": 250,
  },
  Gym: {
    "09:00-12:00": 100,
    "13:00-17:00": 200,
  },
  ConcertHall: {
    "18:00-21:00": 300,
  },
};

// Initialize booked slots
const bookedSlots = {};

// This code snippet defines a function called bookFacility that takes in four parameters: facility, date, startTime, and endTime. The function logs a message indicating the facility, date, start time, and end time of the booking.
function bookFacility(facility, date, startTime, endTime) {
  console.log(
    `Booking for facility: ${facility}, date: ${date}, startTime: ${startTime}, endTime: ${endTime}`
  );

  // It then checks if the requested slot is already booked. If the bookedSlots object has a property corresponding to the date and the bookedSlots[date] array contains a slot that overlaps with the requested start and end times and has the same facility, it logs a message indicating that the booking failed and returns "Booking Failed, Already Booked".
  if (
    bookedSlots[date] &&
    bookedSlots[date].some(
      (slot) =>
        slot[0] <= endTime && slot[1] >= startTime && slot[2] == facility
    )
  ) {
    console.log(
      `Booking Failed, Already Booked for facility: ${facility}, date: ${date}, startTime: ${startTime}, endTime: ${endTime}`
    );
    return "Booking Failed, Already Booked";
  }

  // If the requested facility is not found in the facilities object, it logs a message indicating that the booking failed and returns "Booking Failed, Facility 'facility' not found".
  if (!facilities[facility]) {
    console.log(`Booking Failed, Facility '${facility}' not found`);
    return `Booking Failed, Facility '${facility}' not found`;
  }

  // Next, it calculates the booking rate based on the start and end times. If there is a specific rate defined for the requested time slot in the facilities[facility] object, it uses that rate. Otherwise, it falls back to the anytime rate.
  let rate =
    facilities[facility][`${startTime}:00-${endTime}:00`] ||
    facilities[facility].anytime;
  // If no rate is found, it logs a message indicating that the booking failed and returns "Booking Failed, Slot not Available".
  if (!rate) {
    return "Booking Failed, Slot not Available";
  }
  for (const slot in facilities[facility]) {
    const [slotStart, slotEnd] = slot.split("-").map(Number);
    if (slotStart <= startTime && endTime <= slotEnd) {
      rate = facilities[facility][slot];
      break;
    }
  }

  // Finally, it calculates the total cost of the booking by multiplying the rate by the difference between the end and start times. It adds the booked slot to the bookedSlots[date] array and logs a message indicating that the booking was successful along with the total cost. It returns a message indicating that the booking was successful and the total cost.
  const totalCost = rate * (endTime - startTime);
  bookedSlots[date] = bookedSlots[date] || [];
  bookedSlots[date].push([startTime, endTime, facility]);
  console.log(
    `Booked, Rs. ${totalCost} for facility: ${facility}, date: ${date}, startTime: ${startTime}, endTime: ${endTime}`
  );
  return `Booked, Rs. ${totalCost}`;
}

// Test cases
console.log(bookFacility("Gym", "26-10-2020", 10, 12));
console.log(bookFacility("Tennis Court", "26-10-2020", 18, 20));
console.log(bookFacility("Pool", "26-10-2020", 13, 15));
console.log(bookFacility("ConcertHall", "26-10-2020", 19, 21));
console.log(bookFacility("Clubhouse", "27-10-2020", 16, 22));
console.log(bookFacility("Tennis Court", "27-10-2020", 16, 20));
console.log(bookFacility("Pool", "27-10-2020", 10, 14));
console.log(bookFacility("Gym", "27-10-2020", 13, 17));
console.log(bookFacility("ConcertHall", "27-10-2020", 18, 21));
console.log(bookFacility("Fitness Studio", "27-10-2020", 10, 12));
console.log(bookFacility("Clubhouse", "26-10-2020", 16, 22));
