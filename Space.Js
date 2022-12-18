import Layout from "../components/layout/Layout";
import ShopItem from '../components/shopitem/ShopItem.jsx'
import { getShopItems } from "../api/shopItems";
import { useState, useEffect, useContext } from "react";
import { useCart, CartContext } from '../contexts/cart'

const about = () => {

    const { cart, setcart } = useContext(CartContext)

    const [items, setitems] = useState()
    useEffect(() => {
        (async () => { 
            setitems(await getShopItems()) 
        })()
    }, [])

    const handler = (item) => {
        setcart([...cart, item])
    }

    return (
        <Layout>
            <div style={{ display: "flex", flexFlow: "row wrap", padding: "2em" }}>
                {items && items.map(item => <div style={{ margin: "2em" }}><ShopItem handler={handler} {...item} /></div>)}
            </div>
        </Layout>
    )
}

export default about