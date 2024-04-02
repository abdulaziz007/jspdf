// Import the necessary libraries
const { jsPDF } = require("jspdf");






// ========= helper function ====================
const generateData = function(amount) {
    var result = [];
    var data = {
      coin: "محتوى",
      game_group: "محتوى ٢",
      game_name: "محتوى ٣",
      game_version: "رقم١",
      machine: "20485861",
      vlt: "0"
    };
    for (var i = 0; i < amount; i += 1) {
      data.id = (i + 1).toString();
      result.push(Object.assign({}, data));
    }
    return result;
  };


function createHeaders(keys) {
    var result = [];
    for (var i = 0; i < keys.length; i += 1) {
      result.push({
        id: keys[i],
        name: keys[i],
        prompt: keys[i],
        width: 65,
        align: "center",
        padding: 0
      });
    }
    return result;
  }


  var headers = createHeaders([
    "م",
    "عمود",
    "عمود",
    "عمود",
    "عمود",
    "عمود",
    "عمود"
  ]);














// Create a new jsPDF instance
const doc = new jsPDF();

// Set up the font
const fontPath = 'fonts/Tajawal-Regular.ttf'; // Replace with the actual path to the Tajawal font file
// doc.addFileToVFS('Tajawal-Regular.ttf', fontPath);
doc.addFont(fontPath, "Tajawal", "normal");
doc.addFont("fonts/Tajawal-Bold.ttf", "Tajawal", "bold");
// doc.addFont('Tajawal-Regular.ttf', 'Tajawal', 'normal');

// Set the font for the document
doc.setFont('Tajawal');


doc.setFontSize(18);
let arabicText = "عنوان التقرير";
doc.text(arabicText, doc.internal.pageSize.getWidth() / 2, 10, { align: 'center' });

// Add header and footer
// doc.addImage('images/logo.png', 'PNG', 10, 10, 50, 15);
doc.addImage("images/logo.jpg", "JPEG", 15, 40, 180, 180);
doc.addImage("images/logo.png", "PNG", 15, 40, 180, 180);

// Generate the table
// doc.table(doc.internal.pageSize.getWidth() / 2, 1, generateData(100), headers, { autoSize: true });

// Save the PDF document
doc.save('report.pdf');



















