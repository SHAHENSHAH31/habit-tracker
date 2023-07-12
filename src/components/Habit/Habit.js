import Style from "./Habit.module.css"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteHabit } from "../../redux/Action/habitSlice";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Habit=({habit})=>{

    let countDone=0;

    for(let i=0;i<habit.weekLog.length;i++){
        if(habit.weekLog[i].isDone===true){
           countDone++;
        }
    }

    const navigate=useNavigate();
    const setId=()=>{
    localStorage.setItem('id',habit.id);
    navigate("/weekview");
    }

    const dispatch=useDispatch();  

    const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    toast.success("Your habit deleted successfully");
    }

    return(
        <div className={Style.habit } >
        <div className={Style.habitleft}>
          <i className="fa-solid fa-hashtag"></i>
          <div>
            <h4 style={{textTransform:"capitalize"}} className="text-danger">{habit.name}</h4>
            <p className={Style.daycomplete}>{countDone}/7 days</p>
          </div>
        </div>
        <div className={Style.habitright}>
          <div className={Style.logbtn}  onClick={setId} >
            <i className="fa-solid fa-calendar-week"></i>
            Week View
          </div>
          <div onClick={handleDelete} style={{width:'35px',height:'35px',backgroundColor:'#dd4620',borderRadius:'50%',display:'flex',alignItems:'center',paddingLeft:'11px'}}>
          <i className="fa-sharp fa-regular fa-trash-can text-white width"  ></i>
          </div>
        </div>
      </div>
    )
}

export default Habit;