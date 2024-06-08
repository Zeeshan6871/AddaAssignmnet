# Facility Booking System

## Overview

This repository contains a simple booking system for various facilities, allowing users to book facilities for specific time slots and dates. The system checks for slot availability, calculates the booking cost, and maintains a record of booked slots to prevent overlapping bookings.

## Facilities and Rates

The available facilities have predefined operating hours with associated rates:

- **Clubhouse**:
  - 10:00-16:00: Rs. 100 per hour
  - 16:00-22:00: Rs. 500 per hour

- **Tennis Court**:
  - Anytime: Rs. 50 per hour

- **Pool**:
  - 10:00-14:00: Rs. 150 per hour
  - 16:00-20:00: Rs. 250 per hour

- **Gym**:
  - 09:00-12:00: Rs. 100 per hour
  - 13:00-17:00: Rs. 200 per hour

- **Concert Hall**:
  - 18:00-21:00: Rs. 300 per hour

## Booking Function

The `bookFacility` function facilitates booking a specific facility on a given date for a designated time slot. Here’s a breakdown of its operation:

### Input Parameters
- `facility`: The name of the facility to be booked.
- `date`: The date for the booking.
- `startTime`: The starting hour of the booking.
- `endTime`: The ending hour of the booking.

### Booking Validation
- **Conflict Check**: The function checks if the requested time slot is already booked for the specified facility and date.
- **Facility Existence Check**: It verifies if the requested facility is available in the system.
- **Rate Calculation**: The function determines the cost of booking based on the facility’s rate for the specified time slot. If no specific rate is found for the requested slot, it defaults to an "anytime" rate if available.

### Booking Confirmation
- **Cost Calculation**: The total cost is computed by multiplying the hourly rate by the duration of the booking.
- **Slot Recording**: The booked slot is added to the record for the specified date.
- **Success Response**: The function logs and returns a success message with the total cost.

## Sample Bookings

The test cases demonstrate various booking scenarios:

- Booking the Gym from 10:00 to 12:00 on 26-10-2020.
- Booking the Tennis Court from 18:00 to 20:00 on 26-10-2020.
- Attempting to book the Pool from 13:00 to 15:00 on 26-10-2020 (which should fail due to an invalid time slot).
- Booking the Concert Hall from 19:00 to 21:00 on 26-10-2020.
- Booking the Clubhouse from 16:00 to 22:00 on 27-10-2020.
- Attempting to book a non-existent "Fitness Studio" on 27-10-2020.

Each booking logs the outcome and, if successful, the total cost for the specified slot.

## Conclusion

This booking system effectively manages the reservation of multiple facilities with varying rates and time slots, ensuring no overlapping bookings occur. It provides clear feedback on booking status and costs, making it a robust solution for facility management.
