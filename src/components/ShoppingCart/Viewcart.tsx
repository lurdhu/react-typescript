
type DataProps={
        pic:string
        name:string
        price:number
}

type ViewCartProps = {
    cart:DataProps[]
    setCart:React.Dispatch<React.SetStateAction<DataProps[]>>;
}

function Viewcart({cart,setCart}:ViewCartProps) {

    function remove(index:any){
        let update=[...cart]
        update.splice(index,1)
        setCart(update)
    }
    
    const totalprice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
    <div >Viewcart</div>
     <h2>Cart</h2>
            <div style={{display:'flex', gap:'20px', marginTop:'20px',flexWrap:'wrap'}}>
                
                {cart.map((item1, index) => (
                    <div key={index}>
                        <img src={item1.pic} alt='picture' style={{ width: '150px', height: '130px' }}/>
                        <p>{item1.name}</p>
                        <p>{item1.price}</p>
                        <button onClick={() => remove(index)}>Remove from Cart</button>
                    </div>
                ))}
            </div>
          
            <p>Total Price:{totalprice}</p>
            <p>Total cart:{cart.length}</p>

    </>
    
  )
}

export default Viewcart;