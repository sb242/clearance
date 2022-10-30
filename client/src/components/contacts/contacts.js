import ContactsList from "./contactsList";
import ContactsListItem from "./contactsListItem";
import { Button } from 'antd';
import 'antd/dist/antd.css'


function Contacts() {
  
  return (
    <div className="contacts-page">
      <h2>Health Professionals Contact Information</h2>
      <br></br>
      <h3>Existing</h3>
      <ContactsList >
      
      </ContactsList>
      <ContactsListItem />
      <Button size="large" type="primary">Add New Contact</Button>
    </div>
  );
}

export default Contacts;