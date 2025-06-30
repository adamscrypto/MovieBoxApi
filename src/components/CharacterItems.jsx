
const CharacterItems = ({item})=>{

//  console.log(typeof(item))
    return (
        <>
        <p>{item.name}</p>
        <p>{item.phone}</p>
        <small>{item.email}</small>
        </>
    )
}

export default CharacterItems