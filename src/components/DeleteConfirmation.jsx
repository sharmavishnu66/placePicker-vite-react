import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const timerTime = 3000;
const [remainingTime ,setRemaining] = useState(timerTime);

useEffect(() =>
{
 const interval = setInterval(() =>{
    setRemaining(preTimer => preTimer -10);
    },10);
     return () =>{
      clearInterval(interval);
     }
},[])

  useEffect(()=>{
   const timer = setTimeout(() =>{
      onConfirm();
    },timerTime);

     return () =>{
      clearTimeout(timer)
     }
  },[onConfirm])
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={timerTime} />
    </div>
  );
}
