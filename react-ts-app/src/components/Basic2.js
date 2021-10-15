import React, { useState } from 'react'

const Basic2 = () => {
    const [products, setProducts] = useState([])
    const newProducts = () => {
        setProducts([...products, {
            id: products.length,
            name: "hello"
        }])
    }

    return (
        <div>
            <button onClick={newProducts}>New</button>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Basic2
