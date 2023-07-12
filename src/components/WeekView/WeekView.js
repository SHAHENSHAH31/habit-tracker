 import { useSelector } from "react-redux";
 import Style from "./WeekView.module.css";
 import { Link } from "react-router-dom";
 import DayView from "../DayView/DayView";
 
 const WeekView=() =>{
    let habitsState=useSelector((state)=>state["habits"])

    let habit={}
  for(let i=0;i<habitsState.length;i++){
    if(habitsState[i].id===Number(localStorage.getItem("id"))){
      habit=habitsState[i];
    }
  }

    return (
        <>
         <h1 className="text-center text-danger" style={{textTransform:"capitalize"}}>{habit.name}</h1>
         <div className={Style.box}>
         {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)} 
         </div>
          
        <Link to='/'> <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn  btn-dark " type="button">
          <span className="text-danger fs-1 text-decoration-none" ><i className="fa-solid fa-arrow-left-long text-danger"></i> Back</span>
        </button>
      </div></Link>

        </>
    )
};

export default WeekView;
