// import React,{useEffect, useState} from 'react';

// //! this component will be used to get the user information to render when ever we want.
// export default function GetUserName(){
//     const [apiUrl, setApiUrl]= useState('');
//     const [users, setUsers]= useState([]);
//     const [old, setOld]= useState(false);
//     useEffect(() =>{
//         const fetchConfig= async () =>{
//             const response = await fetch('/config.json')
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             setApiUrl(data.apiurl_users);
//         }
//         fetchConfig();
//     });
//     console.log(`${apiUrl} from console`);
//     useEffect(() => {
//         getData();

//     }, [apiUrl,old]);
//     const getData = async () => {
//         try {
//             const response = await fetch(`${apiUrl}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             setUsers(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     return(
//         <div>
//             {users.map((user, index) => (
//                 <div key={index}>
//                     <p>{user.userId}</p>
//                     <p>{user.userName}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }