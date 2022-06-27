import {useState} from 'react'


function Ex3() {

const [isRed, setIsRed] = useState(false)



const SetColor = (e) => 
{
    if(e.target.value.length > 5)
    {
    setIsRed(true)
    }
    else 
    {
    setIsRed(false)
    }

}

return (

 <div className = "app">

<input type="text" style={{backgroundColor : isRed? "red" :"blue"  }  } onChange={SetColor}/> 

 </div> 


)

}


export default Ex3 ;