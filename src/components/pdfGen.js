import jsPDF from "jspdf";
import "jspdf-autotable";
import "../App.css";

const PdfGen = () => {
  const doc = new jsPDF();
  doc.text("Vehicle Pass", 100, 15, "center");
  doc.autoTable({ theme: "plain" });
  doc.autoTable({ html: "#pdf-table" });
  doc.autoTable({
    theme: "plain",
    body: [
      ["Token Number & Transaction", ":", "xxxxx xxxxx xxxxx"],
      ["Custome Name", ":", "Bhivin"],
      ["Customer Phone", ":", "9767456799"],
      ["House No. & Name", ":", "2456 & testname"],
      ["Bank Reference Number", ":", "xxxx xxxx xxx"],
      ["Place", ":", "kozhikode"],
      ["LSGD Name, Address and Phone No.", ":", "LSGD1"],
      ["Vehicle number", ":", "KL/45/3534345"],
      ["Driver license number", ":", "1234"],
      ["Quantity of Dredged Material(Ton)", ":", "10"],
      ["Loading Place", ":", "Kozhikode"],
      ["Unloading Place", ":", "ABC"],
      ["Vehicle Pass issued Date & Time", ":", "26-06-2023 & 10.30 AM"],
      ["Route", ":", "ABC"],
      ["Driver Mobile Number", ":", "9865456789"],
      ["Date", ":", "26-06-2023"],
      ["Duration of Pass", ":", "5"],
      [
        {
          content:
            "----------------------------------------------------------------------------------------------------",
          colSpan: 3,
          styles: { halign: "center" },
        },
      ],
      [{ content: "Bill", colSpan: 3, styles: { halign: "center" } }],
      [
        {
          content:
            "----------------------------------------------------------------------------------------------------",
          colSpan: 3,
          styles: { halign: "center" },
        },
      ],
      ["Cost of Sand", ":", "3000"],
      ["SGST @ 2.5% (on Cost of sand)", ":", "4000"],
      ["CGST @ 2.5% (on Cost of sand)", ":", "4500"],
      ["Vehicle Pass", ":", "ABC"],
      ["SGST @ 9% (on Vehicle Pass)", ":", "1000"],
      ["CGST @ 9% (on Vehicle Pass)", ":", "1500"],
      ["Total Amount", ":", "5000"],
      ["Place", ":", "kozhikode"],
      ["Customer Name & Signature", "Bhivin", "Signature of Zone Supervisor"],
    ],
  });

  doc.save("vechiclePass.pdf");
};

export default PdfGen;
