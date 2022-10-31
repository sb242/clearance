import MedsListItem from "./MedsListItem";
import 'antd/dist/antd.css'

// pass current data and prior data received from App.js as props to MedsListItem

export default function MedsList(props) {

  const currentData = props.medicine.filter((item) => {
    return item.end_date === null
  })

  const priorData = props.medicine.filter((item) => {
    return item.end_date !== null
  })

  return (
    <div className="meds-page">
      <h2>Medications</h2>
      <br></br>
      <h3>Existing</h3>
      <MedsListItem
        currentData={currentData}
        priorData={priorData}
      />
    </div>
  );
}
