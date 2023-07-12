//import Style from './Navbar.module.css'
import { useDispatch } from "react-redux"
import { addHabit } from "../../redux/Action/habitSlice";
import { Outlet } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar=()=>{
  console.log("hii");
const dispatch=useDispatch();

  const handleSave=()=>{
    const habitName=document.getElementById('habitName').value;
      dispatch(addHabit(habitName));
      toast.success("Your habit added successfully");
      document.getElementById('habitName').value='';
  }
    return(
        <>
          <div className="navbar navbar-dark bg-dark">
            <h3 className="text-danger ms-3">Habits-Tracker</h3>
            <div className="right-nav">
          <button
            className="addhabit-btn btn btn-danger me-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i class="fa-sharp fa-solid fa-plus text-white"></i>
           Add Habits
          </button>
        </div>

          </div>

          <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="staticBackdropLabel">
                Add New Habit
              </h5>
              <button
                type="button"
                className="btn btn-secondary btn-danger "
                data-bs-dismiss="modal"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label text-danger">
                 HABIT NAME
                </label>
                <input
                  type="text"
                  className="form-control text-danger"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                  
                />
              </div>
            </div>
            <div className="modal-footer">
           
              <button type="button" className="btn btn-danger" onClick={handleSave}>
                Save Habit
              </button>
            </div>
          </div>
        </div>
      </div>

          <Outlet/>
        </>

    )
}

export default Navbar;