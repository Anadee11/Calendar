import React, { useState } from 'react'
import './App.css'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import { parse } from 'date-fns'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import "react-big-calendar/lib/css/react-big-calendar.css";
// import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from 'react-bootstrap'

const locales = {
  "en-IN": require("date-fns/locale/en-IN")
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
const events = [
  {
    title: "Client Meeting",
    allDay: true,
    start: new Date(2022, 4, 0),
    end: new Date(2022, 4, 0),
  },
  {
    title: "Annual Meet",
    start: new Date(2022, 4, 8),
    end: new Date(2022, 4, 10),
  },
  {
    title: "Party",
    start: new Date(2022, 4, 20),
    end: new Date(2022, 4, 22),
  },
];
function App() {
  const [newEvent, setnewEvent] = useState({ title: '', start: '', end: '',strttime:'',endtime:'' });
  const [allEvents, setallEvents] = useState(events);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [selectedEvent, setSelectedEvent] = useState(undefined);
  function handleEvent() {
    setallEvents([...allEvents, newEvent]);
  }
  // function handleSelectSlot(event){
  //   setSelectedEvent(event);
  // }
  return (
    <>
    {/* <SideBar/> */}
    <div className="App">
      <h1>Calendar</h1>
      <a
      className="btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#assign-modal"
        onClick={handleShow}
      >
       <i class="bi bi-plus"></i> Add New Event
      </a>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header style={{ backgroundColor: "#4c2795", color: "white" }}>
          <Modal.Title>New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{marginTop:20}}>
          <label htmlFor="">Title:</label>
        <input type="text" placeholder="Enter the Title" value={newEvent.title} onChange={(e)=>setnewEvent({...newEvent,title : e.target.value})} style={{"width":"100%","margin":10,padding:"5px",borderRadius:"7px"}}/>
        <label htmlFor="">Start Date:</label>
        <input type="date" placeholder="Enter the Start Date" value={newEvent.start} onChange={(e)=>setnewEvent({...newEvent,start : e.target.value})} style={{"width":"100%","margin":9,padding:"5px",borderRadius:"7px"}}/>
        <label htmlFor="">End Date:</label>
        <input type="date" placeholder="Enter the End Date" value={newEvent.end} onChange={(e)=>setnewEvent({...newEvent,end: e.target.value})} style={{"width":"100%","marginLeft":10,padding:"5px",borderRadius:"7px"}}/>
        {/* <label htmlFor="strt">Start Time:</label> */}
        {/* <input type="time" placeholder="Enter the Start Time" value={newEvent.strttime} onChange={(e)=>setnewEvent({...newEvent,strttime: e.target.value})} style={{"width":"100%","marginLeft":10,padding:"5px",borderRadius:"7px"}}/> */}
        {/* <TimePicker placeholder="Enter the Start Time" use12Hours style={{"width":"100%","marginLeft":10,padding:"5px",borderRadius:"7px"}}/>
        <label htmlFor="end">End Time:</label> */}
        {/* <input type="time" placeholder="Enter the End Time" value={newEvent.endtime} onChange={(e)=>setnewEvent({...newEvent,endtime: e.target.value})} style={{"width":"100%","marginLeft":10,padding:"5px",borderRadius:"7px"}}/> */}
        {/* <TimePicker placeholder="Enter the End Time" use12Hours style={{"width":"100%","marginLeft":10,padding:"5px",borderRadius:"7px"}}/> */}
        <div className="App">
        <button className="btn"style={{"margin":20}} onClick={handleEvent}>Add Event</button>
        </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Calendar localizer={localizer} events={allEvents} timeslots={1} selectable={true}
        startAccessor="start" endAccessor="end"  style={{ "height": 600, "margin": 50 }} />
      
    </div>
    </>
  )
}
export default App;