import React from "react";
import CharacterItems from "./CharacterItems.jsx";

const CharacterGrid = ({items, isLoading})=>{
  // console.log(isLoading)

  return isLoading ? (<h1>Loading...</h1>) : (
        <section className="cards" >
            {items.map(item => (
                <CharacterItems  item={item} className="card" key={item.id}></CharacterItems>
            ))} 
        </section>
    )
}

export default CharacterGrid 

{/* <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div> */}