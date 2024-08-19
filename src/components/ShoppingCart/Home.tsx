import { useState } from "react";
import Viewcart from "./Viewcart";

type DataProps = {
    pic: string
    name: string
    price: number
}

function Home() {
    const data = [
        {
            pic: '/src/assets/dosa.jpg',
            name: "dosa",
            price: 100
        },
        {
            pic: '/src/assets/idly.webp',
            name: "Idly",
            price: 50
        },
        {
            pic: '/src/assets/img.jpeg',
            name: "Noodles",
            price: 200
        },
        {
            pic: '/src/assets/mutton.jpg',
            name: "chicken",
            price: 300
        },
        {
            pic: '/src/assets/chicken.jpeg',
            name: "Mutton",
            price: 230
        },
        {
            pic: '/src/assets/mutton.jpg',
            name: "crispy chicken",
            price: 320
        },
        {
            pic: '/src/assets/chicken.jpeg',
            name: "fish",
            price: 220
        }
    ];

    const [cart, setCart] = useState<DataProps[]>([]);
    const [popup, setPopup] = useState(false);

    function Add(item: any) {
        setCart([...cart, item]);
    }

    return (
        <>
            <div style={{ display: 'flex', gap: '20px' }}>
                {data.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.pic} alt='picture' style={{ width: '150px', height: '130px' }} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={() => Add(item)}>Add to Cart</button>
                        </div>
                    );
                })}
            </div>


            <button style={{ marginTop: '20px' }} onClick={() => setPopup(!popup)}>
                View Cart - {cart.length}
            </button>
            {
                popup && (<Viewcart cart={cart} setCart={setCart} />)
            }

        </>
    );
}

export default Home;
