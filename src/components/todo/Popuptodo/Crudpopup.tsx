import { useState,useEffect } from "react";

type CrudTypes = {
  name: string
}

type CrudpopupProps = {
  value: CrudTypes[];
  editIndex: null | number;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  setValue: React.Dispatch<React.SetStateAction<CrudTypes[]>>;
  setEditIndex: React.Dispatch<React.SetStateAction<null >>;
};  

function Crudpopup({setValue,value,editIndex,setEditIndex,close}:CrudpopupProps) {

  const [data, setData] = useState<CrudTypes>({ name: '' });
  const [isEdit,setIsEdit] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    if (editIndex !== null) {
      setData(value[editIndex]);
      setIsEdit(true);
    } else {
      setData({ name: '' });
      setIsEdit(false);
    }
  }, [editIndex, value]);


  function Add(){
    if(isEdit && editIndex !== null){
        let updateedit = [...value];
        updateedit[editIndex]=data
        setValue(updateedit)
        setIsEdit(false)
        setEditIndex(null)
    }else {
      setValue([...value,data]);
    }
    setData({name : ''})
    close(false)
  }

  return (
    <>
      <section style={{backgroundColor:'black', width:'100%', height:'100vh', position:'absolute', top:'0px', left:'0px', color:'white', textAlign:'center'}}>
        <div>
          <label>Name</label>
          <input type="name" name="name" value={data.name}  onChange={handleChange}/>
        </div>
        <button onClick={Add}> {isEdit ? "Update" : "Submit"} </button>
        <button onClick={() => close(false)}>
          Close
        </button>
        
      </section>
    </>
  )
}

export default Crudpopup;


