import React, {useState} from "react";
import CharacterItems from "./CharacterItems.jsx";
import SearchItems from './SearchItems'

const CharacterGrid = ({items, isLoading})=>{
  const [query, setQuery] = useState('')
 
 

  const filterItems = items.filter(item => 
    item.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
    item.email.toLowerCase().includes(query.toUpperCase()))

  return isLoading ? (<h1>Loading...</h1>) : (
        <>
        <SearchItems query={query}  onChange={setQuery} placeholder="Seach Movies..." />
        <section className="cards" >
            {filterItems.map(item => (
                <CharacterItems  item={item}  key={item.id}></CharacterItems>
            ))} 
        </section>
        </>
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