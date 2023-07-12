import Style from "./Habits.module.css";
import { useSelector } from "react-redux";
import Habit from "../Habit/Habit"
const Habits=()=>{
    let habitsState=useSelector((state)=>state["habits"]);
    return(
       
        <>
          <div className={Style.Habits}>
          {habitsState.map((habit)=><Habit habit={habit} key={habit.id}/>)}
            </div> 
        </>
    )
}

export default Habits;