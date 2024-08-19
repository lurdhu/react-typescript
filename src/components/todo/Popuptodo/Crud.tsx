// import React from 'react'

import { useState } from "react";
import Crudpopup from "./Crudpopup";

type CrudTypes = {
    name: string
  }

function Crud() {

    const [popup,setPopup] = useState(false);
    const [value, setValue] = useState<CrudTypes[]>([]);
    let [editIndex, setEditIndex] = useState(null);


    function handledelete(index:any) {
        let updatedelete = [...value]
        updatedelete.splice(index,1);
        setValue(updatedelete);
    }

    function handleedit(index:any){
       setEditIndex(index);
       setPopup(true)
    }

  return (
    <>
        <div>
            
            <button onClick={()=>setPopup(true)}> + </button>
            {
                popup &&(<Crudpopup value={value} setValue={setValue} editIndex={editIndex} setEditIndex={setEditIndex} close={setPopup}/>) 
            }
        </div>
        <div>
                    {value.length > 0 ?
                        value.map((item, index) => (
                            <>
                                <p key={index}>{item.name}</p>
                                <button onClick={()=>handleedit(index)}> Edit </button>
                                <button onClick={()=>handledelete(index)}> Delete </button>
                              
                            </>
                        )): <p> No data </p>
                    }
                </div>
    </>
  )
} 

export default Crud;