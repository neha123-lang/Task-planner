import { useState } from "react";
import React from 'react'

const AddToListTitle = (props) => {
  const [title, setTitle] = useState('');

  console.log(props)
  return (
    <div>AddToListTitle</div>
  )
}

export default AddToListTitle