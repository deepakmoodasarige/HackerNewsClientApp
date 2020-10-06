import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
//import axios from "axios";
import Stories from "../molecules/Stories";
//import Loader from "./layouts/Loader";
import {getData,getDetails} from "../services/servicecalls"

const Posts = (props:any) => {
  const [state, setState] = useState([]);
  const [count, setCount] = useState(21);
  const [isLoading, setLoading] = useState(false);

  
  

  useEffect(() => {
    // function executes here ,calling two async function
    getData(0, 20).then(arr => {
        getDetails(arr).then((item:any) =>
        setState(item)
      );
    });
  }, []);


  //return statement
  return (
    <>
    
        <>
          <div
            className={
              isLoading
                ? "container-fluid main overlay"
                : "container-fluid main"
            }
          >
            <table className="table">
              <tbody>
                <Stories state={state} />
              </tbody>
            </table>
          </div>
          
        </>
      
    </>
  );
};

export default withRouter(Posts);
