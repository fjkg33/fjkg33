import {Route, Routes, BrowserRouter} from 'react-router-dom';
import FuneralHeader from "./FuneralHeader";
import Funeralmain from "./Funeralmain";
import FuneralFooter from "./FuneralFooter";

function Container() {
    return (

  
      <div className="Container">
  
        <FuneralHeader />
        <Funeralmain/>
        <FuneralFooter/>
        
      </div>  

 
    );
  }
  export default Container;