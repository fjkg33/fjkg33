import {Route, Routes, BrowserRouter} from 'react-router-dom';
import ReservationHeader from "./ReservationHeader";
import ReservationMain from "./ReservationMain";
function ReservationContainer({userAuthID}) {
    return (
  
      <div className="RContainer">
        
        <ReservationHeader/>
        <ReservationMain userAuthID={userAuthID}/>
        
      </div>  
 
    );
  }
  export default ReservationContainer;