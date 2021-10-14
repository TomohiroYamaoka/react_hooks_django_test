import React, {useState} from 'react'

const Basic1 = () => {
    const [product,setProducts] = useState({name:"",price:""})
    return (
        <>
        <form>
            <input type="text" value={product.name}
            onChange{evt => setProducts({})}
        </form>
        </>
    )
}

export default Basic1
