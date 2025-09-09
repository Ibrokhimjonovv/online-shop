import { createContext, useState } from "react";

const Context = createContext();

const products = [
    {
        id: 1,
        title: "Vertical Striped Shirt",
        img: "https://shopco.surge.sh/static/media/topsellingimg1.bf8d337be9e85a9f768b.png",
        rating: 4.5,
        price: 186,
        discount: 232,
        category: "top-selling",
        type: "men"
    },
    {
        id: 2,
        title: "Courage Graphic T-shirt",
        img: "https://shopco.surge.sh/static/media/topsellingimg2.a9ce72004acbff8d690b.png",
        rating: 4.5,
        price: 145,
        discount: 0,
        category: "top-selling",
        type: "women"
    },
    {
        id: 3,
        title: "Loose Fit Bermuda Shorts",
        img: "https://shopco.surge.sh/static/media/topsellingimg3.d252050c76eddbdb6ac1.png",
        rating: 5,
        price: 80,
        discount: 0,
        category: "top-selling",
        type: "kids"
    },
    {
        id: 4,
        title: "Faded Skinny Jeans",
        img: "https://shopco.surge.sh/static/media/topsellingimg4.c50b063cf9765875c7ff.png",
        rating: 4.5,
        price: 210,
        discount: 0,
        category: "top-selling",
        type: "men"
    },
    {
        id: 5,
        title: "T-shirt With Tape Details",
        img: "https://shopco.surge.sh/static/media/newarrivalimg1.baa7d7b54b3efa8ece92.png",
        rating: 4.5,
        price: 120,
        discount: 232,
        category: "new-arrivals",
        type: "men"
    },
    {
        id: 6,
        title: "Skinny Fit Jeans",
        img: "https://shopco.surge.sh/static/media/newarrivalimg2.17a8d490ef7e701a5d47.png",
        rating: 4.5,
        price: 240,
        discount: 260,
        category: "new-arrivals",
        type: "women"
    },
    {
        id: 7,
        title: "Checkered Shirt",
        img: "https://shopco.surge.sh/static/media/newarrivalimg3.fc89cc48b7f1d14888c8.png",
        rating: 5,
        price: 180,
        discount: 0,
        category: "new-arrivals",
        type: "kids"
    },
    {
        id: 8,
        title: "Checkered Shirt",
        img: "https://shopco.surge.sh/static/media/newarrivalimg4.a19d01c12e39c52db981.png",
        rating: 4.5,
        price: 160,
        discount: 240,
        category: "new-arrivals",
        type: "men"
    },
]


const ContextProvider = ({children}) => {
    const [test, setTest] = useState('qq');

    return (
        <Context.Provider value={{ test }}>
            {children}
        </Context.Provider>
    )
} 

export { Context, ContextProvider, products }