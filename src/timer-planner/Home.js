import React, { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { Respons } from './Response'
const Home = () => {
  const [seconds, setSeconds] = useState(0); // Initial countdown time in seconds
  const [isActive, setIsActive] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [inputSeconds, setinputSeconds] = useState(0);
  const [inputMinutes, setinputMinutes] = useState(0);
  const [inputHour, setinputHour] = useState(0);
  const [desc, setdesc] = useState('');
  const [total, setTotal] = useState(0);
  const [Response , setResponse] = useState([...Respons])
  const [obj , setobj] = useState({});


 console.log('fhiure',Response);



  const [data, setdata] = useState([...Response]);

  useEffect(() => {
    let interval;


    if (isActive && Response[selectedId]['startTime'] > 0 ) 
    {
      interval = setInterval(() => {
        setSeconds((prev) => {
          return Response[selectedId]['startTime'] = prev - 1

        }
        
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [selectedId, isActive,Response[selectedId]['startTime']]);

  useEffect(()=>{
    setResponse((arr)=>[...arr,obj])


  } , [obj])

  useEffect(()=>{
    setResponse([...Response])
  },[Response])
  const startTimer = (e, i) => {
    setIsActive(true);
    setSelectedId(i);
    setSeconds(Response[i].startTime)



    // interval = setInterval(() => {
    //     setSeconds(prevSeconds => prevSeconds - 1);
    //   }, 1000);
  };
const AddTimer = (e)=>
{
  let hour = inputHour*3600;console.log('our',hour)
  let minutes = inputMinutes*60;console.log('minutes',minutes)
  let seconds  = parseInt(inputSeconds);console.log('seconds',seconds)
  let total =  seconds + hour + minutes;console.log('total',seconds+ hour + minutes)
  let obj = {
    'startTime' : total,
      'desc'      : desc,
      'resetTime' : total
  }
  setobj(obj)
 console.log(obj);
  // setResponse(Respons.push(obj))
  console.log('push',Response)

}
  const stopTimer = (e) => {
    setIsActive(false);
  };

  const resetTimer = (e, i) => {
    setIsActive(false);
    return Response[i].startTime = Response[i].resetTime


  };
const deleteTask=(e,i)=>{
  Response.splice(i, 1);
console.log(Response);
}
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>
<h2>Add more items </h2>
{/* <form> */}
<input type = "number"  placeholder='Hour' onChange={(e)=>setinputHour(e.target.value)}/>
<input type = "number"  placeholder='Minutes' onChange={(e)=>setinputMinutes(e.target.value)}/>
<input type = "number"  placeholder='Seconds'onChange={(e)=>setinputSeconds(e.target.value)} />
<input type = "text"  placeholder='Task desc 'onChange={(e)=>setdesc(e.target.value)} />

<input type = "submit"  placeholder='submit' value = "Add Task" onClick={AddTimer}/>

{/* </form> */}


      </div>
      <div className=''>
        {Response.map((e, i) => {
          return (
            <div>
              <p>{e.desc} <span> {formatTime(e.resetTime)}</span> <span>{formatTime(Response[i].startTime)}</span></p>
              <button onClick={() => { startTimer(e, i) }}>Start</button>
              <button onClick={stopTimer}>Stop</button>
              <button onClick={() => { resetTimer(e, i) }}>Reset</button>
              <MdDelete onClick={() => { deleteTask(e, i) }}/>
              
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Home