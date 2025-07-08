import logo  from '../img/logo.png'


const CharacterItems = ({item})=>{

//  console.log(typeof(item))
    return (
        
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={logo} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong></strong> {item.phone}
            </li>
            <li>
              <strong></strong> {item.email}
            </li>
          </ul>
        </div>
    </div>
    </div> 
    )
}

{/* <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.phone}
            </li>
            <li>
              <strong>Nickname:</strong> {item.email}
            </li>
          </ul>
        </div>
      </div>
    </div> */}
export default CharacterItems