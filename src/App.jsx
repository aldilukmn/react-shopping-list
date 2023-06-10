import React, { useState } from 'react'

export default function App() {
  const [data, setData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    const shoppingData = [...data, name];
    setData(shoppingData);
    e.target.name.value = '';
  }

  const onDelete = (index) => {
    const updateData = [...data]
    updateData.splice(index, 1);
    setData(updateData);
  }

  return (
    <div className='app'>
      <h1>Let's Find The <span>Best Food</span> Around You</h1>
      <form onSubmit={onSubmit}>
        <div className="search-wrapper">
          <input type="text" placeholder='Enter your item' name='name' required={true}/>
          <button type='submit'>Search</button>
        </div>
      </form>
      <section>
        <ul>
          {data.length <= 0 && (
            <h4>Empty shopping list</h4>
          )}
          {data.map((value, index) => (
            <li key={index}>
            <span>{value}</span>
            <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          ))}
          <button className='deleteAll' onClick={() => setData([])}>Delete All</button>
        </ul>
      </section>
    </div>
  )
}
