import { useEffect, useState } from 'react'
import './App.css'
import axios  from 'axios'
import CharacterGrid  from './components/CharacterGrid'

const  App = ()=> {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{

  const fetchItems = async () => {
    // const result = await axios(`https://api.ksoft.si/lyrics/search`)
    const result = await axios("https://jsonplaceholder.typicode.com/users")
    console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
  }
  fetchItems()
},[])

  return (
    <>
      <div className='container'>
        <CharacterGrid  items={items}  isLoading={isLoading} />
      </div>
        
    </>
  )
}

export default App
