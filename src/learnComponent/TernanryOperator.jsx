import React from 'react'

const TernanryOperator = () => {
    let age=25
  return (
    <div>
        {age>=18?<div>he can enter the room</div>
        :<div>he cannot enter the room</div>
        }
        {
          age===16?<div>your age is 16</div>
          :age===17?<div>your age is 17</div>
          :age===18?<div>your age is 18</div>
          :<div>you are neither 16,17,18</div>
        }
        
    </div>
  )
}

export default TernanryOperator