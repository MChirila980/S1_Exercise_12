"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Melinda Chirila
   Date:  9/19/2019

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/


/* Set the date displayed in the calendar */

var thisDay = new Date("August 24, 2018");

// Write the calendar to the element with the id "calendar"

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// a function to generate the calander table

function createCalendar(calDate) {

      var calendarHTML = "<table id='calendar_table’>"
      calendarHTML += "</table>";
      return calendarHTML;
}

//creating a function to write the calander caption

function calCaption(calDate) {

      //contains the list of month names.

      var monthName = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
      ];

      //used to determine the current month

      var thisMonth = calDate.getMonth();

      //determine the current year

      var thisYear = calDate.getFullYear();

      //this writes the caption

      return "<caption>" + monthName[thisMonth] + "" + thisYear + "</caption>";
}

function createCalendar(calDate) {

      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += "</table>";
      return calendarHTML;

}

//function to write a table row of weekday abbreviations 
function calWeekdayRow() {
      //array of weekday abbreveations
      var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      var rowHTML = "<tr>";

      //look through the dayName array
      for (var i = 0; i < dayName.length; i++) {
            rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
      }
      rowHTML += "</tr>";
      return rowHTML;
}

// funtion to calculate the number of days in a month

function daysInMonth(calDate) {
      //array of days in each month
      var dayCount = [31, 28, 21, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      //extract the four didget year and month value
      var thisYear = calDate.getFullYear();
      var thisMonth = calDate.getMonth();

      //revise thedays in February fir the leap year
      if (thisYear % 4 === 0) {
            if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
                  dayCount[1] = 29;
            }
      }

      //return the number of days for the current month
      return dayCount[thisMonth];
}