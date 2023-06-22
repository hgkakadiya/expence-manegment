import React from 'react'
import { useState } from "react"
import { useFormik } from 'formik';
// import * as Yup from "yup";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  addexpence } from './Redax/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {
  const selecte  = useSelector(state => state );
  console.log(selecte,"slectobhedaer");
    const selectedExpence  = useSelector(state => state.cart.selectedExpence);
   const isView = useSelector(state => state.cart.isView);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [inputList, setInputList] = useState([{
        natureOfExpence:"",
        description:"",
        amount:"",
        
    }]);

    const handleaddclick = () => {setInputList([...inputList,{natureOfExpence:"",
    description:"",
    amount:"",}]);       
 }

    const [taxbleAmount, setTaxableAmount] = useState('');
    
  const handleinputChange = (e, index) => {
        let { name, value } = e.target;
        const list = [...inputList];
      //  list[index][name] = value;
       if(name==="amount"){
        value= value.replace(/\D/g,'')
       }
      let item = {...list[index] }
        item[name] = value;
        list[index] = item;
        // console.log(value, "VALUES");
        setInputList(list);
        let amount = 0;
      //  console.log("3",inputList); 
      formik.setFieldValue("inputList",list)



 list.forEach(function (expenseItem) {
            let str = expenseItem.amount;
            let num = +str;
            if(!isNaN(num))
            {
              amount = amount + num;
          }
           // console.log("2"); 
           });setTaxableAmount(amount); }


const handleremove = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    let amount = 0;

list.forEach(function (expenseItem) {
            let str = expenseItem.amount;
            let num = +str;
            if(!isNaN(num))
            {
              amount = amount + num;
          }   }
            );
        setTaxableAmount(amount);
      //  console.log("4"); 
    }

var curr = new Date();
var date = curr.toISOString().substring(0,10);
let rand = Math.round(Math.random() * 400)

const formik = useFormik({
      initialValues: {
            Vendor: "",
            Voucher: rand,
            Date: date,
            Mobile:"",           
            email:"",
            Bill:'',
            BillDate:'',
            inputList:[],
          },

    // validationSchema: Yup.object({
    //           Vendor: Yup.string().required("Required  Vendor!"),
    //           Mobile: Yup.string().required("Required  Mobile number!"),
    //           email: Yup.string().email("Invalid email format").required("Required  email!"),
    //           Bill: Yup.string().required("Required Bill!"),
    //           BillDate: Yup.string().required("Required   BillDate !"),
    //      }),debugger
    onSubmit: (values) => {    
      //  console.log("onsubmit",values);
        
      dispatch(addexpence(values) ); 
    formik.setFieldValue("Vendor", '');
    formik.setFieldValue("Voucher: rand", '');
    formik.setFieldValue("Date: date", '');
    formik.setFieldValue("Mobile", '');
       formik.setFieldValue("Id", '');
       formik.setFieldValue("amount", '');
       formik.setFieldValue("inputList",[])           ///////////////////
 navigate("/")}
    });
  const handleBack = () => {
      navigate("/")
    };



    useEffect(() => {
    if(selectedExpence && selectedExpence.Id) {
 
      formik.setFieldValue("Vendor", selectedExpence.Vendor);
        formik.setFieldValue("Date: date", selectedExpence.Date);
       formik.setFieldValue("Mobile", selectedExpence.Mobile);
     
      formik.setFieldValue("email", selectedExpence.email);
      formik.setFieldValue("Bill", selectedExpence.Bill);
 
     formik.setFieldValue("BillDate", selectedExpence.BillDate);
    formik.setFieldValue("Id", selectedExpence.Id);
    
    formik.setFieldValue("amount",taxbleAmount)
    formik.setFieldValue("inputList",selectedExpence.inputList)
    setInputList(selectedExpence.inputList)

let amount = 0;


selectedExpence.inputList.forEach(function (expenseItem) {
        let str = expenseItem.amount;
        let num = +str;
        if(!isNaN(num))
        {
          amount = amount + num;
      }
       // console.log("2"); 
       });setTaxableAmount(amount); 

  //formik.setFieldValue("setTaxableAmount", selectedExpence.setTaxableAmount);
  // console.log("5",selectedExpence); 

    } else {
 
       formik.setFieldValue("Vendor",'');
      formik.setFieldValue("Mobile",'');
      formik.setFieldValue("amount",'');
      formik.setFieldValue("Id",'');
      formik.setFieldValue("amount",'');
      formik.setFieldValue("inputList",[]);     ///////////////
    }
    
   // console.log(selectedExpence,"edit");
    // console.log( setIsOpen(true))
  }, [selectedExpence]
  );






    return (
        <div className='Header'>
            <div className='heading'>  <NavLink className='navLink' to="/"> Create Expense</NavLink> </div>
            <div className="form-row">

<div className="form-group col-md-3"> <label>Vendor</label>

                    <input type="text" name="Vendor" className="form-control"
                    disabled={isView} 
                        value={formik.values.Vendor}
                        onChange={(e) => formik.setFieldValue("Vendor", e.target.value)} id="Vendor" />
                         {formik.errors.Vendor && formik.touched.Vendor && (<p>{formik.errors.Vendor}</p>)}
                    </div>

     <div className="form-group col-md-3"> <label>  Voucher No</label>
                    <input type="text" name="Voucher"  id='Voucher'   className="form-control" disabled    value={formik.values.Voucher}/></div>

                <div className="form-group col-md-3"> <label> Date</label>
                    <input type="Date" name="Date"          className="form-control" 
                    value={formik.values.Date}
                    disabled={isView}
                    onChange={(e) => formik.setFieldValue("Date", e.target.value)} />
                        {formik.errors.Date && formik.touched.Date && (<p>{formik.errors.Date}</p>)} </div>

      <div className="form-group col-md-3"> <label>GSTIN</label>
                    <input type="text" name="GSTIN" className="form-control" disabled />
                </div>
      <div className="form-group col-md-3">  <label>Mobile No</label>
                    <input type="text" name="Mobile" className="form-control"
                     value={formik.values.Mobile}
                     disabled={isView}
     onChange={(e) => formik.setFieldValue("Mobile", e.target.value.replace(/[^0-9.+]/g, ''))} />
     {formik.errors.Mobile && formik.touched.Mobile && (<p>{formik.errors.Mobile}</p>)}</div>


                <div className="form-group col-md-3">  <label>Email</label>
                    <input type="email" name="email" className="form-control" value={formik.values.email}
                     disabled={isView}
                      //  onBlur={() => formik.setFieldTouched("email")}
                        onChange={(e) => formik.setFieldValue("email", e.target.value)} />
                    {formik.errors.email && formik.touched.email && (<p>{formik.errors.email}</p>)} </div>


                <div className="form-group col-md-2">   <label> Bill No</label>
                    <input type="text" name="Bill" className="form-control" value={formik.values.Bill}
                     disabled={isView}
                      //  onBlur={() => formik.setFieldTouched("Bill")}
                        onChange={(e) => formik.setFieldValue("Bill", e.target.value)} />
                    {formik.errors.Bill && formik.touched.Bill && (<p>{formik.errors.Bill}</p>)} </div>

 <div className="form-group col-md-2"> <label> Bill Date</label>
    <input type="Date" name="BillDate" className="form-control" value={formik.values.BillDate}
     disabled={isView}
   // onBlur={() => formik.setFieldTouched("BillDate")}
    onChange={(e) => formik.setFieldValue("BillDate", e.target.value)} />
    {formik.errors.BillDate && formik.touched.BillDate && (<p>{formik.errors.BillDate}</p>)}</div>


         <div className="form-group col-md-2"> <label >Payment Method</label>
        <select className="form-select form-control" aria-label="Default select example"  
         disabled={isView}
       // onBlur={formik.handleBlur} 
        onChange={formik.handleChange} value={formik.values.Payment}
        id="Paym" name="Payment"> 
                 {formik.errors.Payment && formik.touched.Payment && (<p>{formik.errors.Payment}</p>)}  
                <option value="N\A">N\A</option>
                <option value="Cheuhe">cheuhe</option>
                <option value="Netbanking">netbanking</option>
                <option value="Cash">cash</option>
                <option value="UPI">UPI</option></select></div>  
            </div>
    

            <table className="table">
                <thead>
                    <tr className="table-active">
                        <th scope="col"> SR.NO.</th>
                        <th scope="col"> NATURE OF EXPENSE	</th>
                        <th scope="col"> DESCRIPTION</th>
                        <th scope="col"> TAXABLE AMT. (₹)</th>
                        <th scope="col"> AMOUNT (₹)</th>
                    </tr>
                </thead>
                <tbody>

      {inputList.map((expenseItem, index) => {
                        return (
    <tr key={index}><td>
     <div className="form-group col-md-1">{index + 1}</div></td>

    <td><div className="form-group col-md-8">

     <input type="text"
      name="natureOfExpence"
        value={expenseItem.natureOfExpence} 
        id="natureOfExpence" 
        placeholder='Bill Date'
        // onChange={e => handl_Update_Table_Value(e, index, "natureOfExpence")}
        onChange={e => handleinputChange(e, index)}
         /> </div></td>





     <td><div className="form-group col-md-8">
    <textarea type="text" name="description" rows="1"id="description"placeholder=' what did you pay for'
     value={expenseItem.description}
   // onChange={e => handl_Update_Table_Value(e, index, "description")}
   onChange={e => handleinputChange(e, index)}
    
    />
            </div></td>

 <td><div className="form-group col-md-8">
    <input type="text" name="amount" id="amount" placeholder='AMOUNT' 
    value={expenseItem.amount}  disabled={isView} onChange={e => handleinputChange(e, index)}  
    />
                                </div> </td>
        <td><div className="form-group col-md-8"><input name="disabled" disabled
         onChange={e => handleinputChange(e, index)} /> </div> </td>




                  <td><div className="form-group col-md-8" >
    {inputList.length !== 1 && <button onClick={() => handleremove(index)}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" /><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" /></svg> 
      </button>} </div></td>




      </tr>
                        );
                    })}
                </tbody>
                <tfoot>
     <tr className="table-active" >
                        <th><button type="button" className="btn btn-success  col-md-10 " onClick={handleaddclick}>add</button></th>
                        <th></th>
                        <th></th>
                        <th> SUBTOTAL</th>
                        <th>{taxbleAmount}</th>
                    </tr>
                </tfoot>
            </table>
            <div className="row">
                <div className="col"><p>Special Notes</p><textarea rows="4" cols="70"></textarea></div>



                <div className="col"> <div>Taxable Amount </div>
                    <div className="d-flex align-items-center">
                        <div className="d-flex">₹ {taxbleAmount}</div> </div><hr />


                    <div>Sub Total</div> <div className="d-flex align-items-center">
                        <div className="d-flex">₹ {taxbleAmount}</div></div><hr /></div>
            </div>



     <div className="d-flex justify-content-center ">
     <button className="btn btn-success  col-md-2 " type='submit'



     onClick={()=>{ formik.setFieldValue("amount",taxbleAmount);   formik.handleSubmit()}}>Save</button>


<button className="btn btn-success  col-md-2 " type='button'



onClick={()=>{handleBack()}}>back</button>


     </div>
         </div >
    )
}
export default Header;





// useEffect(() => {
//     if(selectedExpence && selectedExpence.Id) {
//       setIsOpen(true);
//       formik.setFieldValue("Name", selectedExpence.Name);
//       formik.setFieldValue("SurName", selectedExpence.SurName);
//       formik.setFieldValue("Age", selectedExpence.Age);
//       formik.setFieldValue("cardId", selectedExpence.Id);
//     } else {
//       setIsOpen(false);
//       // formik.setFieldValue("Name", '');
//       // formik.setFieldValue("SurName", '');
//       // formik.setFieldValue("Age", '');
//       // formik.setFieldValue("cardId", '');
//     }
    
//     console.log(selectedExpence)
//    // console.log( setIsOpen(true))
//   }, [selectedExpence]);



















// import React from 'react'
// import { useState } from "react"
// import { useFormik } from 'formik';
// import * as Yup from "yup";
// import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { addbilldata } from './Redax/cartSlice';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [inputList, setInputList] = useState([{ Biidate: "", pay: "", amount: "", disable: "" }]);

//     const handleaddclick = () => {
//         setInputList([...inputList, { Biidate: "", pay: "", amount: "", disable: "", }]);
//         // dispatch(addbilldata(inputList));
//     }

//     const [taxbleAmount, setTaxableAmount] = useState(0);

//     const handleinputChange = (e, index) => {
//         const { name, value } = e.target;
//         const list = [...inputList];
//         list[index][name] = value;
//         console.log(value, "VALUES");
//         setInputList(list);
//         let amount = 0;

//         list.forEach(function (expenseItem) {
//             let str = expenseItem.amount;
//             let num = +str;
//             amount = amount + num;
//             console.log(expenseItem.amount);
//             console.log(typeof num);
//             console.log(typeof amount);
//         });
//         setTaxableAmount(amount);

//     }

//     const handleremove = index => {

//         const list = [...inputList];
//         list.splice(index, 1);
//         setInputList(list);
//         let amount = 0;

//         list.forEach(function (expenseItem) {
//             let str = expenseItem.amount;
//             let num = +str;
//             amount = num + amount;
//             console.log(expenseItem.amount);
//             console.log(num);
//             console.log(amount);
//         });
//         setTaxableAmount(amount);
//     }

//      const [num, setNum] = useState(0);
//      function randomNumberInRange(min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}


//     const formik = useFormik({
//         initialValues: {Vendor: "",  Voucher: "",  Date: "",  inputList: { amount:""}, // amount: "",
//         },

//          validationSchema: Yup.object({
//               Vendor: Yup.string().required("Required  Vendor!"),
//               Date: Yup.string().required("Date"),
//               Mobile: Yup.number("/[^0-9]/").min(10, "Mininum 10 characters").required("Required  Mobile number!"),
//               email: Yup.string().email("Invalid email format").required("Required  email!"),
//               Bill: Yup.string().required("Required Bill!"),
//               BillDate: Yup.string().required("Required   BillDate !"),
//          }),

//      onSubmit: (values) => {
//             setNum(randomNumberInRange(1000, 50000));
//             // setInputList([...inputList, { Biidate: "", pay: "", amount: "", disable: "",}]);
//             // dispatch(addbilldata(inputList));
//             console.log(num, "Numberas");
//             dispatch(addbilldata(values));
//             navigate("/")
//         }
//     });



 




//     return (
//         <div className='Header'>
//             <div className='heading'>  <NavLink className='navLink' to="/"> Create Expense</NavLink> </div>
//             <div className="form-row">

//                 <div className="form-group col-md-3"> <label>Vendor</label>
//                     <input type="text" name="Vendor" className="form-control"
//                         onBlur={() => formik.setFieldTouched("Vendor")}
//                         value={formik.values.Vendor}
//                         onChange={(e) => formik.setFieldValue("Vendor", e.target.value)} id="Vendor" />
//                     {formik.errors.Vendor && formik.touched.Vendor && (<p>{formik.errors.Vendor}</p>)}</div>







//                 <div className="form-group col-md-3"> <label>  Voucher No</label>
//                     <input type="text" name="Voucher" className="form-control"

//                         value={formik.values.Voucher}
//                         onBlur={() => formik.setFieldTouched("Voucher")}
//                         onClick={() => formik.setFieldValue(num)}
//                  /></div>







//                 <div className="form-group col-md-3"> <label> Date</label>
//                     <input type="Date" name="Date" className="form-control" value={formik.values.Date}
//                         onBlur={() => formik.setFieldTouched("Date")}
//                         onChange={(e) => formik.setFieldValue("Date", e.target.value)} />
//                     {formik.errors.Date && formik.touched.Date && (<p>{formik.errors.Date}</p>)} </div>


//      <div className="form-group col-md-3"> <label>GSTIN</label><input type="text" name="GSTIN" className="form-control" disabled /> </div>


//                 <div className="form-group col-md-3">  <label>Mobile No</label>
//                     <input type="text" name="Mobile" className="form-control" value={formik.values.Mobile}
//                         onBlur={() => formik.setFieldTouched("Mobile")}
//                         onChange={(e) => formik.setFieldValue("Mobile", e.target.value)} />
//                     {formik.errors.Mobile && formik.touched.Mobile && (<p>{formik.errors.Mobile}</p>)}</div>


//                 <div className="form-group col-md-3">  <label>Email</label>
//                     <input type="email" name="email" className="form-control" value={formik.values.email}
//                         onBlur={() => formik.setFieldTouched("email")}
//                         onChange={(e) => formik.setFieldValue("email", e.target.value)} />
//                     {formik.errors.email && formik.touched.email && (<p>{formik.errors.email}</p>)} </div>


//                 <div className="form-group col-md-2">   <label> Bill No</label>
//                     <input type="text" name="Bill" className="form-control" value={formik.values.Bill}
//                         onBlur={() => formik.setFieldTouched("Bill")}
//                         onChange={(e) => formik.setFieldValue("Bill", e.target.value)} />
//                     {formik.errors.Bill && formik.touched.Bill && (<p>{formik.errors.Bill}</p>)} </div>

//                 <div className="form-group col-md-2"> <label> Bill Date</label>
//                     <input type="Date" name="BillDate" className="form-control" value={formik.values.BillDate}
//                         onBlur={() => formik.setFieldTouched("BillDate")}
//                         onChange={(e) => formik.setFieldValue("BillDate", e.target.value)} />
//                     {formik.errors.BillDate && formik.touched.BillDate && (<p>{formik.errors.BillDate}</p>)}</div>


//              <div className="form-group col-md-2"> <label >Payment Method</label>
//         <select className="form-select form-control" aria-label="Default select example"
//         onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Payment}
//         id="Paym" name="Payment"> 
//                 {formik.errors.Payment && formik.touched.Payment && (<p>{formik.errors.Payment}</p>)}  
//               <option value="1">One</option> <option value="2">Two</option><option value="3">Three</option></select></div>  
//             </div>

//             {/* <div>   {JSON.stringify(inputList)}</div>   */}

//             <table className="table  ">
//                 <thead  >
//                     <tr className="table-active">
//                         <th scope="col"> SR.NO.</th>
//                         <th scope="col"> NATURE OF EXPENSE	</th>
//                         <th scope="col"> DESCRIPTION</th>
//                         <th scope="col"> TAXABLE AMT. (₹)</th>
//                         <th scope="col"> AMOUNT (₹)</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                     {inputList.map((expenseItem, index) => {
//                         return (
//                             <tr className=" " key={index} >
//                                 <td>
//                                     <div className="form-group col-md-1">{index + 1}</div></td>

//                                 <td><div className="form-group col-md-8">
//                                     <input type="text"
//                                         name="Biidate"
//                                         value={formik.values.Biidate}
//                                         id="Biidate"
//                                         placeholder='Bill Date'

//                                         onChange={e => handleinputChange(e, index)}
//                                     // onBlur={() => formik.setFieldTouched("Biidate")}
//                                     // onChange={(e) => formik.setFieldValue("Biidate", e.target.value, index)}
//                                     />
//                                 </div></td>

//           <td><div className="form-group col-md-8">
//                         <textarea type="text"
//                                         name="area"
//                                         // value={formik.values.pay}
//                                         rows="1"
//                                         id="area"
//                                         placeholder=' what did you pay for'

//                                     // onChange={e => handleinputChange(e, index)}
//                                     // onBlur={() => formik.setFieldTouched("area")}
//                                     // onChange={(e) => formik.setFieldValue("area", e.target.value)}
//                                     />
//                                 </div></td>





//                                 <td><div className="form-group col-md-8">
//                                     <input type="text"
//                                         name="amount"
//                                         // value={formik.values.amount}
//                                         id="amount"
//                                         placeholder='AMOUNT'
//                                         onChange={e => handleinputChange(e, index)}
//                                     // onBlur={() => formik.setFieldTouched("amount")}
//                                     // onChange={(e) => formik.setFieldValue("amount", e.target.value)}
//                                     />




//                                 </div> </td>
//                                 <td><div className="form-group col-md-8">
//                                     <input name="disabled"
//                                         // value={formik.values.disabled}
//                                         disabled
//                                         onChange={e => handleinputChange(e, index)} />
//                                 </div> </td>

//         <td><div className="form-group col-md-8" >
//             {inputList.length !== 1 && <button onClick={() => handleremove(index)}>

//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
//         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
//         <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
//         </svg> </button>} </div></td></tr>
//                         );
//                     })}
//                 </tbody>
//                 <tfoot>
//                     <tr className="table-active" >
//                         <th><button type="button"    className="btn btn-success  col-md-10 " onClick={handleaddclick}>add</button></th>
//                         <th></th>
//                         <th></th>
//                         <th> SUBTOTAL</th>
//                         <th>{taxbleAmount.values}</th>
//                     </tr>
//                 </tfoot>
//             </table>
//             <div className="row">
//                 <div className="col"><p>Special Notes</p><textarea rows="4" cols="70"></textarea></div>
//                 <div className="col"> <div>Taxable Amount </div>
//                     <div className="d-flex align-items-center">
//                         <div className="d-flex">₹ {taxbleAmount}</div> </div><hr />
//                     <div>Sub Total</div> <div className="d-flex align-items-center">
//                         <div className="d-flex">₹ {taxbleAmount}</div></div><hr /></div>
//             </div>
//             <div className="d-flex justify-content-center ">
//                 <button className="btn btn-success  col-md-2 " type='submit'
//                     onClick={formik.handleSubmit}>Save</button>

//             </div>
//             {/* <button type='submit' onClick={handleClick}>Generate random number</button> */}
//         </div >
//     )
// }
// export default Header;