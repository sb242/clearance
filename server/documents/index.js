module.exports = ({ name, medications, patient }) => {
  function meds() {
    let string = "";
    medications.forEach((medication) => {
      string += `<tr class="item">
      <td>${medication.name}</td>
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
           margin: auto;
           padding: 30px;
           border: 1px solid #eee;
           box-shadow: 0 0 10px rgba(0, 0, 0, .15);
           font-size: 12px;
           line-height: 24px;
           font-family: 'Helvetica Neue', 'Helvetica',
           color: #555;
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
           padding-bottom: 40px;
           }
           .invoice-box table tr.heading td {
           background: #eee;
           border-bottom: 1px solid #ddd;
           font-size: 12px;
           font-weight: bold;
           text-align: center;
           }
           .invoice-box table tr.details td {
           padding-bottom: 20px;
           }
           .invoice-box table tr.item td {
            font-size: 10px;
            text-align: left;
           border-bottom: 1px solid #eee;
           }
           .invoice-box table tr.item.last td {
           border-bottom: none;
           }
           .invoice-box table tr.total td:nth-child(2) {
           border-top: 2px solid #eee;
           font-weight: bold;
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
        <div class="invoice-box">
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
     </body>
  </html>
  `;
};
