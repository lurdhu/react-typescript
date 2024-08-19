import { useState } from "react";

type Authuser = {
    name: string
    email:string
}


function Todohome() {

    const [data, setData] = useState<Authuser>({ name: '' ,email:''});
    const [val, setValue] = useState<Authuser[]>([]);
    const [isEdit,setEdit] = useState(false);
    const [editIndex,setEditIndex] = useState<any>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(() => ({ ...data,[e.target.name]: e.target.value }))
    }

    function Add() {
        if(isEdit){
            let updateedit = [...val]
            updateedit[editIndex]=data;
            setValue(updateedit);
            setEdit(false);
            setData({name:'',email:''})
        }else{
            setValue([...val, data])
            setData({name:'',email:''})
        }
    }


    function handleDelete(index:any) {
        let updatedata = [...val]
        updatedata.splice(index,1)
        setValue(updatedata);
    }

   function handleEdit(index:any){
    setData(val[index])
    setEdit(true)
    setEditIndex(index);
   }

    console.log(val)
    return (
        <>
            <div>
                <h3>Todo</h3>

                <div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" onChange={handleChange} value={data.name} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" onChange={handleChange} value={data.email} />
                    </div>
                    <button onClick={Add}>
                        {isEdit ? "Update":'Submit'}
                    </button>
                </div>

                <div>
                    {
                        val.map((item, index) => (
                            <>
                                <p key={index}>{item.name}</p>
                                <p>{item.email}</p>
                                <button onClick={()=>handleDelete(index)}>Delete</button>
                                <button onClick={()=>handleEdit(index)}>edit</button>
                            </>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Todohome;




    // Adding a new user
    // const addUser = (newUser: AuthUser) => {
    //     setUsers([...users, newUser]);
    // };

    // const updateUser = (index: number, updatedUser: AuthUser) => {
    //     const updatedUsers = [...users];
    //     updatedUsers[index] = updatedUser;
    //     setUsers(updatedUsers);
    // };
    
    // Deleting a user
    // const deleteUser = (index: number) => {
    //     const updatedUsers = users.filter((_, i) => i !== index);
    //     setUsers(updatedUsers);
    // };
    