import React ,{ useState }from 'react'
import {Minutes , Hours} from './AgendaSchResponse';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AgendaScheduling = () => {
  const [value, setValue] = useState(new Date());
  const handleClick =(e)=>{
    setValue(e);
  }
  return (
    <div>
  <Calendar  onChange ={handleClick}value={value} />
  <h2>{value.toDateString()}</h2>
  
      {Hours.map((e,i)=>{
        return(
          <div>
            <h2>{e}</h2>
            </div>
        )
      })}
    </div>
  )
}

export default AgendaScheduling