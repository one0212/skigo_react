import React  from 'react';




class Contact extends React.Component {
    constructor() {
      super()
      this.state = {
        people : [
            {
              name: 'Casper',
              like: '鍋燒意麵',
              age: 18
            },
            {
              name: 'Wang',
              like: '炒麵',
              age: 24
            },
            {
              name: 'Bobo',
              like: '蘿蔔泥',
              age: 1
            },
            {
              name: '滷蛋',
              like: '蘿蔔泥',
              age: 3
            }
          ]
          
      }
    }
  
   

    render() {
      return (       
        <>
        {this.state.people.filter((item, index, array)=>{
            return item.age > 5
        })}
         
        </>
      )
    }
  }
  
  export default Contact