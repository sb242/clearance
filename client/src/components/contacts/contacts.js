import ContactsTable from "./ContactsTable";
import { Button } from 'antd';
import 'antd/dist/antd.css'


function Contacts(props) {
  
  return (
    <div className="contacts-page">
      <h2>Health Professionals Contact Information</h2>
      <img
        className="ahp-photo"
        src="contactImage.png"
        alt='img'
        width='300px'
      />
      <br></br>
      <Button size="large" type="primary">Add New Contact</Button>
      <br></br>
      <ContactsTable contacts={props.contacts}/>
    </div>
  );
}

export default Contacts;