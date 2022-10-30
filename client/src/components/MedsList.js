import MedsListItem from "./MedsListItem";
import 'antd/dist/antd.css'

// pass current data and prior data received from App.js as props to MedsListItem

export default function MedsList(props) {
  return (
    <div className="meds-page">
      <h2>Medications</h2>
      <br></br>
      <h3>Existing</h3>
      <MedsListItem
        currentData={props.currentData}
        priorData={props.priorData}
      />
    </div>
  );
}
