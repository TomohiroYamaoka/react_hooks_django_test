import React, { useState } from 'react'

const Basic1 = () => {
    const [product, setProduct] = useState({ name: '', price: '' })
    return (
        <div>
            <form>
                <input type='text' value={product.name}
                    onChange={evt => setProduct({ ...product, name: evt.target.value })} />
                <input type='text' value={product.price}
                    onChange={evt => setProduct({ ...product, price: evt.target.value })} />


            </form>
            <h3>Product name is {product.name}</h3>
            <h1>Product name is {product.price}</h1>
        </div>
    )
}

export default Basic1
