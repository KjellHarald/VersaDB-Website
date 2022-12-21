import React, {useState, useEffect} from "react";
import './styles.css'


const Shop = ():JSX.Element => {
    const [display, setDisplay] = useState("store")
    const [produc, setProduc] = useState([])
    const [cart, setCart] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('/items.json', {"method":"GET"})
        const data = await response.json()
        setProduc(data)
    }

    useEffect(()=>{
        fetchProducts()
    }, [])

    const addToCart = (prod) => {
        setCart([
            ...cart, 
            prod
        ])
    }

    const products:JSX.Element[] = produc.map((prod, id)=>{
        const {product, price, storage, description} = prod
        return (
            <div className="product" key={id}>
                <div className="product-description">
                    <h1>{product}</h1>
                    <p>{description}</p>
                </div>
                <div className="product-info">
                    <p><b>Price:</b> {price === 0 ? "FREE" : price}</p>
                    <p><b>Storage:</b> {storage} GB</p>
                    <button onClick={()=>addToCart(prod)}>Add to Cart</button>
                </div>
            </div>
        )
    })


    // cart
    const total:number = cart.reduce((acc:number, prod:any) => acc + prod.price, 0)
    const taxTotal:number = cart.reduce((acc:number, prod:any) => acc + prod.price * 0.25, 0)

    const quickCalcTax = (sum:number):number => {
        return sum * 0.25
    }

    const removeFromCart = (event:any):void => {
        const {value} = event.target
        if(cart.length === 0) return
        cart.splice(value, 1)
    }
    
    useEffect(()=> {
        setCart([...cart])
    }, [cart])

    const viewCart:JSX.Element[] = cart.map((cartProducts:any, id:number) => {
            const {product, price} = cartProducts
            return (
                <div className="cart-item" key={id}>

                        <button 
                            onClick={(event) => removeFromCart(event)}
                            value={id}>
                                Remove
                        </button>

                    <div className="product-name">
                        <h2>{product}</h2>
                    </div>
                    <div className="product-tax">
                        <p><b>Tax:</b> {quickCalcTax(price)}</p>
                    </div>
                    <div className="product-price">
                        <p><b>Price:</b> {price},-</p>
                    </div>
                </div>
            )
        }) 


    /// Checkout
    const checkout:JSX.Element[] = cart.map((check:any, id:number) => {
        const {product, price} = check
        return (
            <div className="cart-item" key={id}>
                    <div className="product-name">
                    <h2>{product}</h2>
                    </div>
                    <div className="product-price">
                        <p><b>Price:</b> {price+quickCalcTax(price)},-</p>
                    </div>
            </div>
        )
    })


    ///// Render
    const renderStore:JSX.Element = display === "store" ? 
    (<>
        <div className="info">
            <button id="cart-btn" onClick={()=> setDisplay('cart')} value="cart">Cart {cart.length}</button>
        </div>
        {products}
    </>
    ) : display === "cart" ? (
        <>
        <h1><span className="cart-count">{cart.length}</span> Cart</h1>
            {viewCart}
            <div className="checkout">
                <button onClick={()=> setDisplay("checkout")}>Complete</button>
                
                <div className="total-price">
                    <p><b>Total:</b> {total}</p>
                    <p><b>Tax:</b> {taxTotal}</p>
                </div>
            </div>
        </>
    ) : display === "checkout" ? (
    <div>
        <h3 className="purcash-complete">Thank you for your purcash</h3> 
        {checkout}
        <div className="total-price">
    <p><b>Total:</b> {total}</p>
    <p><b>Tax:</b> {taxTotal}</p>
    </div>
    <h2 style={{textAlign:"center"}}>Invoice Total: {total + taxTotal}</h2>
    </div>)
    : (<div>404 Error</div>)

    return (
        {...renderStore}
        
    )
}

const Store = ():JSX.Element => {
    return (
        <div className="store">
            <Shop/>
        </div>
    )
}

export default Store