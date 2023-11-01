//FOR FETCH
// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCtozMHWCVpRIbf08hOIz5k7tRw1ftB4xY',
//   authDomain: 'prj-ibc.firebaseapp.com',
//   databaseURL: 'https://prj-ibc-default-rtdb.firebaseio.com',
//   projectId: 'prj-ibc',
//   storageBucket: 'prj-ibc.appspot.com',
//   messagingSenderId: '774653224004',
//   appId: '1:774653224004:web:b3b27805d54f684d598811',
//   measurementId: 'G-SD1SM3LKGH',
// };

// firebase.initializeApp(firebaseConfig);



// const EmployeeDetails = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = () => {
//       firebase.database().ref('Users').on('value', (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           const userList = Object.values(data); 
//           setUsers(userList);
//         }
//       });
//     };

//     fetchData();

//     return () => {
//       firebase.database().ref('Users').off();
//     };
//   }, []);





//   return (
//     <div>
//       <h2>User List</h2>
      
//       {users.map((user) => (
//         <div key={user.id}>
//           <h4>{user.name}</h4>
//           <p>Email: {user.email}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EmployeeDetails;







