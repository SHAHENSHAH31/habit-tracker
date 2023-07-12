import { useDispatch } from "react-redux";
import Style from "./DayView.module.css";
import { habitDone, habitNone, habitUnDone } from "../../redux/Action/habitSlice";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DayView=({day})=>{
  //  let today=new Date();
  //  let todayday= today.getDay();
  console.log(day.mm);
  
  const today=new Date();
  const todayDay=today.getDay();

    const dispatch=useDispatch();

    const markToDone=()=>{
        if(day.id>todayDay){
            toast.error("You cannot change your next days status");
            return;
          }
        dispatch(habitDone(day.id));
      }

    
      const markToUnDone=()=>{
        if(day.id>todayDay){
            toast.error("You cannot change your next days status");
            return;
          }
        dispatch(habitUnDone(day.id))
      }

      const markToNone=()=>{
        if(day.id>todayDay){
            toast.error("You cannot change your next days status");
            return;
          }

        dispatch(habitNone(day.id));
      }

    return(
        <div className={Style.daycontainer}>
        <h5 className="text-center text-danger">{day.day}</h5>
        <p className="text-center text-danger">{day.dd}/{day.mm+1}/{day.yyyy}</p>
        <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
        <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
        <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
      </div>
    )
}

export default DayView;