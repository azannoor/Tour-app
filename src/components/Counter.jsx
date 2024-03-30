import { useEffect, useState } from "react"
import PropTypes from "prop-types";

function Counter({show}){
   
    
    const[counter,setCounter] = useState(0)

    const setHideHandler = () => {
        setCounter(0);
      };
    
     useEffect(()=>{
        if(!show){
            setHideHandler();
        }
        
        else{
         const interval = setInterval(() => {
           setCounter((count)=>{
             return count+1
            })
           }, 1000);
           return () => clearInterval(interval);
        }
     },[show])
    
    return <>
    <div>
       
        {
            show ? <div>{counter}</div> : <div></div>
        }
        
    </div>
    </>
    
}
Counter.propTypes = {
    show: PropTypes.bool.isRequired,
  };
export default Counter