import './App.css';
import fone from './fone.jpg'
import { useState } from "react"

function App() {

   const [listTips, setListTips] = useState([])
   const [arrayTips, setArrayTips] = useState([])

   const fetchTips = async () => {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      const data = await response.json();

      if (listTips.length === 0) {
         document.querySelector('.deletebtn').style.display = 'block'
      }
      if (listTips.length > 3) {
         document.querySelector('.addbtn').style.display = 'none'
         document.querySelector('h2').style.display = 'block'
      }
      if (listTips.length > 4) {
         return false
      }

      arrayTips.push(data.activity)
      setListTips([...arrayTips])
   }

   const deleteTips = () => {
      setListTips([])
      setArrayTips([])
      document.querySelector('.deletebtn').style.display = 'none'
      document.querySelector('.addbtn').style.display = 'block'
      document.querySelector('h2').style.display = 'none'
   }

   const wordCross = (event) => {
      const tipsItem = event.target;
      tipsItem.classList.toggle('crossed')
   }


   return (
      <div className="App">
         <div>
            <img className='fon' src={fone} alt='фон' />
         </div>

         <div className='container'>
            <h1>Get an activity</h1>
            <button className='addbtn' onClick={fetchTips}>Add Activity</button>
            <h2>Let's start!</h2>
            <div className='container-tips'>
               {listTips.map((item, index) => (
                  <p onClick={wordCross} key={index}>{index + 1}. {item}</p>
               ))}
            </div>
            <button className='deletebtn' onClick={() => deleteTips()}>Delete All</button>
         </div>
      </div>
   );
}

export default App;
