
type UserdataProps = {
  userdata: {
    name: string
    place: string
    role: string
  }[]
}

function Profile({ userdata }: UserdataProps) {
  return (
    <>
      <div>
        Profile Card
      </div>
      <div style={{display:'flex', gap:'15px'}}>
        {
          userdata.map((item, index) => {
            return (
              <>
              <div>
              <p key={index}>{item.name}</p>
              <p>{item.place}</p>
              <p>{item.role}</p>
              </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Profile