import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call

// define a generatePDF function that accepts a datas argument
const stuAttendancePdf = (datas) => {
  // initialize jsPDF
  const doc = new jsPDF({
    orientation: "landscape",
    format: "a4",
  });

  const grabGrade = datas.map((data) => data.grade);

  // define the columns we want and their titles
  const tableColumn = [
    "ID",
    "Name",
    "Grade",
    "Absent Day",
    "Attend Day",
    "Total Day",
  ];
  // define an empty array of rows
  const tableRows = [];

  // for each data pass all its data into an array
  datas.forEach((data) => {
    const dataData = [
      data.id,
      data.name,
      data.grade,
      data.absent_day,
      data.attend_day,
      data.total_day,

      // called date-fns to format the date on the data
    ];
    // push each tickcet's info into a row
    tableRows.push(dataData);
  });

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  // we use a date string to generate our filename.
  doc.text(`Asgard Grade ${grabGrade[0]} Students Attendance`, 15, 15);
  // we define the name of our PDF file.
  doc.save(`asgardGrade${grabGrade[0]}StuAttendance.pdf`);
};

export default stuAttendancePdf;
