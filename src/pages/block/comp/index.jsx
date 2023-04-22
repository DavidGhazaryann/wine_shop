import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { useEffect, useState } from "react";

export const Comp = (props) => {
    let box = props.box
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

  
    useEffect(() => {
      fetch(
        `https://api.sampleapis.com/wines/reds`
      )
        .then((res) => {
          if (res.status === 200) {
            error && setError(false)
            return res.json()
          }
          else {
            throw new Error('Error')
          }
        })
        .then((data) => {
          setData(data)
        })
        .finally(() => setLoading(false))

    }, []);
    let [boxs,setBoxs] = useState() 
    return <div>
        {/* {
            <>
               <h1>{box.name}</h1>
            <h1>{box.wine}</h1>
            <div style={{backgroundImage:`url(${box.img})`}}></div>
            {/* {console.log({boxs})} */}
            {/* </> */}
           
        
                {!loading ? (
        <>
          <h1>{box.name}</h1>
          <h1>{data[0].wine}</h1>
         
          <div className='d' style={{ backgroundImage: `url(${data[0].image})` }}></div>
           
        </>
      ) : (
        <CircularProgress />
      )
      }


    </div>
}