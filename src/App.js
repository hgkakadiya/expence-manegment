import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Route, Routes } from 'react-router-dom';

 
function App() {
  return (
    <div className="App">
      <Sidebar />
        <Routes>
          <Route path="/Header" element={<Header />}> </Route>
          <Route path="/" element={<Navbar />}> </Route>
        </Routes>
     
</div>
  );
}



// import React from 'react';
// import { useFormik } from 'formik';

// const  App = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },

//     onSubmit: values => {
//      console.log((JSON.stringify(values, null, 2)));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };



export default App;