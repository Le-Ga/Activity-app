import { useState } from 'react';
import './App.scss';

function App() {
   const [activity, setActivity] = useState([]);
   const [activityList, setActivityList] = useState([]);

   async function fetchMyApi() {
      const response = await fetch('http://www.boredapi.com/api/activity/');
      const data = await response.json();
      setActivity(data.activity);
      let listArray = activityList;
      listArray.push(data.activity);
      setActivityList(listArray);

      if (listArray.length === 5) {
         document.querySelector('.addBtn').style.display = 'none';
         document.querySelector('.deleteBtn').style.display = 'block';
      }
   }

   const deleteActivity = () => {
      setActivityList([]);
      document.querySelector('.addBtn').style.display = 'block';
      document.querySelector('.deleteBtn').style.display = 'none';
   }

   return (
      <div className="wrapper">

         <div className='container'>
            <div className='activity-card'>
               <div className="header">Choose an activity!</div>
               <div></div>
               <button onClick={fetchMyApi} className="addBtn btn">Show</button>
               <div className='crutch'>{activity}</div>
               <ul className="activity-list">
                  {activityList.map((item, index) => (
                     <li key={index}>{index + 1}. {item}</li>
                  ))}
               </ul>
               <button className='deleteBtn btn' onClick={deleteActivity}>Delete All</button>
            </div>
         </div>

      </div>
   );
}
export default App;
