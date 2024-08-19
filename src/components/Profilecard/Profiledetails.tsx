
import Profile from "./Profile";

function Profiledetails() {
    const userdata = [
        {
          
            name: 'mary',
            place: 'micaelpuram',
            role: 'backend developer',
        },
        {
           
            name: 'mary1',
            place: 'micaelpuram',
            role: 'UI/Ux developer',
        },
        {
           
            name: 'mary2',
            place: 'chennai',
            role: 'frontend developer',
        },
        {
           
            name: 'victoria',
            place: 'bangalore',
            role: 'HouseWife',
        },
    ]
  return (
   <>
    <div>
      <Profile userdata={userdata}/>
    
    </div>
   </>
  )
}

export default Profiledetails;