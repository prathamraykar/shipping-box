import React, { useState } from 'react'
import ShippingForm from './ShippingForm';
function ShippingList() {
    const [items, setItems] = useState([])

    const addToList = (item) => {
        console.log(item);
        const itemscopy = [...items]
        itemscopy.push(item)
        setItems(itemscopy);
    }

    return (
        <div>
            <ShippingForm addtoListtocallback={
                (value) => addToList(value)} />

            <strong>ShippingList</strong>
            <table>
                <thead>
                    <th>Title</th>
                    <th>Weight</th>
                    <th>Address</th>
                    <th>Color</th>
                </thead>
                <tbody>
                    {
                        items.map(item => {
                            return (
                                <tr key={item.name}>
                                    <td>{item.title}</td>
                                    <td>{item.weight}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <div style={{ backgroundColor:
                                        item.color,
                                        width:"60px",
                                        height:"30px",
                                        }}>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ShippingList