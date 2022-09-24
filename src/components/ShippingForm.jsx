import React,{useState} from 'react'

function ShippingForm(props) {
    const[title,setTitle]=useState('');
    const[weight,setWeight]=useState('');
    const[color,setColor]=useState('#ff0000');
    const[address,setAddress]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            title:title,
            weight:weight,
            address:address,
            color:color

        }
        props.addtoListtocallback(data)
        
    };


  return (
    <div className='ship'><strong>ShippingForm</strong>
        <form onSubmit={handleSubmit}> 
        <input type="text" value={title}placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
        <input type="number"value={weight} placeholder='enter item weight ' onChange={(e)=>setWeight(e.target.value)}/>
        <input type="text"  value={address} placeholder='enter shipping address ' onChange={(e)=>setAddress(e.target.value)}/>
        <label>Color  </label>
        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
        <button>Submit </button>
      </form>
    </div>
  )
}

export default ShippingForm