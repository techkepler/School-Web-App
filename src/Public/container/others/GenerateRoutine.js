import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a tickets argument
const generatePDF = (tickets) => {
  // initialize jsPDF
  const doc = new jsPDF({
    orientation: "landscape",
    format: "a4",
  });
  
  const examTerm = tickets.map((data) => data.exam_term);
  const grade = tickets.map((data) => data.grade);

  // define the columns we want and their titles
  const tableColumn = ["Date", "Subject", "Exam Start Time", "Exam End Time"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  tickets.forEach((ticket) => {
    const examDate = new Date(ticket.date).getDay();
    const ticketData = [
      examDate === 0
        ? "Sunday"
        : examDate === 1
        ? "Monday"
        : examDate === 2
        ? "Tuesday"
        : examDate === 3
        ? "Wednesday"
        : examDate === 4
        ? "Thursday"
        : examDate === 5
        ? "Friday"
        : "Saturday",

      ticket.subject,

      ticket.start_time.split(":")[0] === "12"
        ? `${ticket.start_time} p.m.`
        : ticket.start_time.split(":")[0] > 12
        ? `${
            ticket.start_time.split(":")[0] - 12 < 10
              ? `0${ticket.start_time.split(":")[0] - 12}`
              : `${ticket.start_time.split(":")[0] - 12}`
          }:${ticket.start_time.split(":")[1]} p.m.`
        : `${ticket.start_time} a.m.`,

      ticket.end_time.split(":")[0] === "12"
        ? `${ticket.end_time} p.m.`
        : ticket.end_time.split(":")[0] > 12
        ? `${
            ticket.end_time.split(":")[0] - 12 < 10
              ? `0${ticket.end_time.split(":")[0] - 12}`
              : `${ticket.end_time.split(":")[0] - 12}`
          }:${ticket.end_time.split(":")[1]} p.m.`
        : `${ticket.end_time} a.m.`,

      // called date-fns to format the date on the ticket
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  // we use a date string to generate our filename.
  doc.text(`${examTerm[0]} Exam Routine For Grade ${grade[0]}`, 14, 15);
  // we define the name of our PDF file.
  doc.save(`grade_${grade[0]}_${examTerm[0]}_routine.pdf`);
};

export default generatePDF;
