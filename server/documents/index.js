module.exports = ({
  name,
  medications,
  patient,
  contacts,
  allergies,
  medHistory,
}) => {
  function meds() {
    let string = "";
    medications.forEach((medication) => {
      string += `<tr class="item">
      <td>${medication.med_name}</td>
      <td>${medication.purpose}</td>
      <td>${medication.dosage_number}</td>
      <td>${medication.dosage_unit}</td>
      <td>${medication.frequency}</td>
      <td>${medication.start_date.slice(0, 10)}</td>
      <td>${
        medication.end_date ? medication.end_date.slice(0, 10) : "Ongoing"
      }</td>
   </tr>`;
    });
    return string;
  }

  function allergiesGenerate() {
    let string = "";
    console.log("allergies", allergies);
    allergies.forEach((allergy) => {
      string += `<tr class="item">
     <td>${allergy.type}</td>
     <td>${allergy.anaphylactic}</td>
     <td>${allergy.sensitivity}</td>
     <td>${allergy.intolerance}</td>
  </tr>`;
    });
    return string;
  }

  function generateMedHistory() {
    let string = "";
    console.log("medhisotyr", medHistory);
    medHistory.forEach((element) => {
      string += `<tr class="item">
     <td>${element.condition}</td>
     <td>${element.start_date.slice(0, 10)}</td>
     <td>${element.end_date ? element.end_date.slice(0, 10) : "Ongoing"}</td>
  </tr>`;
    });
    return string;
  }

  function generateContacts() {
    let string = "";
    contacts.forEach((contact) => {
      string += `<tr class="item">
     <td>${contact.name}</td>
     <td>${contact.specialty}</td>
     <td>${contact.phone_number}</td>
     <td>${contact.email}</td>
     <td>${contact.address}</td>
  </tr>`;
    });
    return string;
  }
  const today = new Date();

  return `
  <!doctype html>
  <html>
     <head>
        <meta charset="utf-8">
        <title>PDF Result Template</title>
        <style>
           .invoice-box {
           max-width: 800px;
           margin: 7px;
           padding: 30px;
           border: 1px solid #eee;
           box-shadow: 0 0 10px rgba(0, 0, 0, .15);
           font-size: 12px;
           line-height: 24px;
           font-family: 'Helvetica Neue', 'Helvetica',
           color: #555;
           font-weight: bold;
           }
           .margin-top {
           margin-top: 50px;
           }
           .justify-center {
           text-align: center;
           }
           .invoice-box table {
           width: 100%;
           line-height: inherit;
           text-align: left;
           }
           .invoice-box table td {
           padding: 5px;
           vertical-align: top;
           }
           .invoice-box table tr td:nth-child(2) {
           text-align: right;
           }
           .invoice-box table tr.top table td {
           padding-bottom: 20px;
           }
           .invoice-box table tr.top table td.title {
           font-size: 45px;
           line-height: 45px;
           color: #333;
           }
           .invoice-box table tr.information table td {
           padding-bottom: 0px;
           }
           .invoice-box table tr.heading td {
           background: #eee;
           border-bottom: 1px solid #ddd;
           font-size: 12px;
           font-weight: bold;
           text-align: left;
           }
           .invoice-box table tr.details td {
           padding-bottom: 20px;
           }
           .invoice-box table tr.item td {
            font-size: 10px;
            text-align: left;
            font-weight: normal;
           border-bottom: 1px solid #eee;
           }
           .invoice-box table tr.item.last td {
           border-bottom: none;
           }
           .invoice-box table tr.total td:nth-child(2) {
           border-top: 2px solid #eee;
           }
           @media only screen and (max-width: 600px) {
           .invoice-box table tr.top table td {
           width: 100%;
           display: block;
           text-align: center;
           }
           .invoice-box table tr.information table td {
           width: 100%;
           display: block;
           text-align: center;
           }
           }
        </style>
     </head>
     <body>
        <div class="invoice-box" style="page-break-after: always">
           <table cellpadding="0" cellspacing="0">
              <tr class="top">
                 <td colspan="7">
                    <table>
                       <tr>
                          <td class="title"><img  src="https://cdn.dribbble.com/users/2130/screenshots/6162090/media/60447984e4f87813184e7a50cfed6986.png"
                             style="width:100%; max-width:156px;"></td>
                          <td>
                             Date: ${`${today.getDate()}. ${
                               today.getMonth() + 1
                             }. ${today.getFullYear()}.`}
                             <br>
                             <br>
                             <br>
                             <div style="font-size: 30px">
                             Clearance
                             </div>
                          </td>
                       </tr>
                    </table>
                 </td>
              </tr>
              <tr class="information">
                 <td colspan="7">
                    <table>
                       <tr>
                          <td>
                            Patient name: ${patient[0].first_name} ${
    patient[0].last_name
  }
                          </td>
                          <td>
                           email: ${patient[0].email}
                          </td>
                       </tr>
                    </table>
                 </td>
              </tr>
              <tr>
              <td style="vertical-align: middle"><h2 style="text-align: center">Medications<h2></td>
              </tr>
              
              <tr class="heading">
                 <td>Name</td>
                 <td>Purpose</td>
                 <td>Dosage</td>
                 <td>Units</td>
                 <td>Frequency</td>
                 <td>Start</td>
                 <td>End</td>
              </tr>
              ${meds()}
              </table>
              <br />
              </div>
              <div class="invoice-box" style="page-break-after: always">
              <h2>Allergies<h2>
              <table cellpadding="0" cellspacing="0">
                 </tr>
                 <tr class="heading">
                    <td>Name</td>
                    <td>Anaphylactic</td>
                    <td>Sensitive</td>
                    <td>Intolerant</td>
                 </tr>
                 ${allergiesGenerate()}
                 </table>
                 <br />
                 </div>
              <div class="invoice-box" style="page-break-after: always">
              <h2>Medical History<h2>
              <table cellpadding="0" cellspacing="0">
                 </tr>
                 <tr class="heading">
                    <td>Name</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                 </tr>
                 ${generateMedHistory()}
                 </table>
                 <br />
                 </div>
              <div class="invoice-box">
              <h2>Contacts<h2>
              <table cellpadding="0" cellspacing="0">
                 </tr>
                 <tr class="heading">
                    <td>Name</td>
                    <td>Specialty</td>
                    <td>Phone Number</td>
                    <td>Email</td>
                    <td>Address</td>
                 </tr>
                 ${generateContacts()}
                 </table>
                 <br />
                 </div>
     </body>
  </html>
  `;
};
