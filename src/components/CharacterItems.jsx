
const CharacterItems = ({item})=>{

//  console.log(typeof(item))
    return (
        <>
        <div className="card">
        <h1>{item.name}</h1>
        <p>{item.phone}</p>
        <small>{item.email}</small>
        
        </div>
        </>
    )
}

export default CharacterItems