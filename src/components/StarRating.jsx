import React, {useState} from 'react'
import Star from './Star'

const ContainerStyles = {
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    gap:'1px'
}

const StarContainerStyles = {
    display:'flex',
  
}

const StarRating = ({maxRating=5}) => {


    const [rating, setRating] = useState(0)
    const [tempRating, setTempRating] = useState(0)



    const handleRating = (rating) => {
        setRating(rating)
    }


  return (

    <div style={ContainerStyles}>
   <div style={StarContainerStyles}>
    {Array.from({length:maxRating}, (_, i) =>
     (<Star onRate={() => handleRating(i +1 )} mouseEnter={() => setTempRating(i +1 )}  mouseLeave={() =>setTempRating(0)} 
     key={i} full={ tempRating ? tempRating>=i+1: rating >= i+1}/> ))}
    </div>
<p>{tempRating || rating || ""}</p>

   </div>
  )
}

export default StarRating