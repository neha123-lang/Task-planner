import React, { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { Respons } from './Response'
import { FiEdit } from "react-icons/fi";
import Modal from '../Modal';
import '../Modal.css';
const Home = () => {
  const [seconds, setSeconds]                   = useState(0); // Initial countdown time in seconds
  const [isActive, setIsActive]                 = useState(false);
  const [selectedId, setSelectedId]             = useState(0);
  const [inputSeconds, setinputSeconds]         = useState(0);
  const [inputMinutes, setinputMinutes]         = useState(0);
  const [inputHour, setinputHour]               = useState(0);
  const [desc, setdesc]                         = useState('');
  const [total, setTotal]                       = useState(0);
  const [Response, setResponse]                 = useState([...Respons])
  const [obj, setobj]                           = useState({});
  const [isdelete, setIsDelete]                 = useState(false)
  const [data, setdata]                         = useState([...Response]);
  const [isModalOpen, setModalOpen]             = useState(false);
  const [editObj, setEditObj]                   = useState();


  const openModal = (e, i) => {
    e.formatTime = formatTime(e.resetTime, true)
    setEditObj(e);
    console.log(e)
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    console.log('a')
    let interval;


    if (isActive && Response[selectedId]['startTime'] > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          return Response[selectedId]['startTime'] = prev - 1

        }

        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [selectedId, isActive, Response[selectedId]['startTime']]);

  useEffect(() => {
    console.log('b')
    setResponse((arr) => [...arr, obj])


  }, [obj])

  useEffect(() => {
    console.log('c')
    setResponse([...Response])
  }, [isdelete, isActive])
  const startTimer = (e, i) => {
    setIsActive(true);
    setSelectedId(i);
    setSeconds(Response[i].startTime)



    // interval = setInterval(() => {
    //     setSeconds(prevSeconds => prevSeconds - 1);
    //   }, 1000);
  };

  const AddTimer = (e) => {
    let hour = inputHour * 3600; console.log('our', hour)
    let minutes = inputMinutes * 60; console.log('minutes', minutes)
    let seconds = parseInt(inputSeconds); console.log('seconds', seconds)
    let total = seconds + hour + minutes; console.log('total', seconds + hour + minutes)
    let obj = {
      'startTime': total,
      'desc': desc,
      'resetTime': total
    }
    setobj(obj)
    console.log(obj);
    // setResponse(Respons.push(obj))
    console.log('push', Response)

  }
  const stopTimer = (e) => {
    setIsActive(false);
  };

  const resetTimer = (e, i) => {
    setIsDelete(!isdelete)
    setIsActive(false);
    return Response[i].startTime = Response[i].resetTime


  };
  console.log(Response)
  const deleteTask = (e, i) => {
    setIsDelete(!isdelete)
    Response.splice(i, 1);
    console.log(Response);
  }
  const formatTime = (time, forObj) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    let formateedHour = hours.toString().padStart(2, '0')
    let formateedMinutes = minutes.toString().padStart(2, '0')
    let formateedSeconds = seconds.toString().padStart(2, '0')

    
    if (forObj) {
      return {
        'hour': formateedHour,
        'minutes': formateedMinutes,
        'seconds': formateedSeconds
      }
    } else {
      return `${formateedHour}:${formateedMinutes}:${formateedSeconds}`;

    }
  };

  return (
    <div>
      <div>
        <h2>Add more items </h2>
        {/* <form> */}
        <input type="number" placeholder='Hour' onChange={(e) => setinputHour(e.target.value)} />
        <input type="number" placeholder='Minutes' onChange={(e) => setinputMinutes(e.target.value)} />
        <input type="number" placeholder='Seconds' onChange={(e) => setinputSeconds(e.target.value)} />
        <input type="text" placeholder='Task desc ' onChange={(e) => setdesc(e.target.value)} />

        <input type="submit" placeholder='submit' value="Add Task" onClick={AddTimer} />

        {/* </form> */}


      </div>
      <div className=''>
        {Response.map((e, i) => {
          return (
            <div>
              <p>{e.desc} <span> {formatTime(e.resetTime, false)}</span> <span>{formatTime(Response[i].startTime, false)}</span></p>
              <button onClick={() => { startTimer(e, i) }}>Start</button>
              <button onClick={stopTimer} >Stop</button>
              <button onClick={() => { resetTimer(e, i) }}>Reset</button>
              <MdDelete onClick={() => { deleteTask(e, i) }} />
              < FiEdit onClick={() => { openModal(e, i) }} />

            </div>
          )
        })}
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          abcdefnvlglrgl
        </Modal>
      </div>

    </div>
  )
}

export default Home