# Clearance

Clearance is an app designed to provide accurate and up-to-date medication, allergy, and medical history information prior to a subsequent appointment with your allied health professional.

### Contributors: [Spencer Bethel](https://github.com/sb242), [Kyra Henningson](https://github.com/k-henningson), [Chris McAnulty](https://github.com/chrismcanulty)

### Final Product

!["Landing page"](https://github.com/sb242/clearance/blob/fix/cleanupFiles/docs/landingPage.gif?raw=true)
<br></br>
!["Update contact"](https://github.com/sb242/clearance/blob/fix/cleanupFiles/docs/updateContact.gif?raw=true)
<br></br>
!["Add medication"](https://github.com/sb242/clearance/blob/fix/cleanupFiles/docs/addMedication.png?raw=true)
<br></br>
!["Delete allergy"](https://github.com/sb242/clearance/blob/fix/cleanupFiles/docs/deleteAllergy.gif?raw=true)
<br></br>
!["Generate PDF"](https://github.com/sb242/clearance/blob/fix/cleanupFiles/docs/generatePDF.png?raw=true)
<br></br>
!["PDF"](https://github.com/sb242/clearance/blob/fix/cleanupFiles/docs/pdf.png?raw=true)
<br></br>
!["Dark mode"](https://github.com/sb242/clearance/blob/fix/cleanupFiles/docs/darkMode.png?raw=true)
<br></br>

### Tech Stack
- Front End: React, Ant Design
- Back End: Node, Express
- DB: PostgreSQL
- PDF feature: Nodemailer, html-pdf

### Setup 
1. Run `npm install` in both server and client folders
2. Set up a DB with the instructions in the .env example
3. in psql `CREATE DATABASE final OWNER labber;`
4. In the server directory run `npm run db:reset`
5. Start the server with `npm run local`
6. Start the client with `npm run start`