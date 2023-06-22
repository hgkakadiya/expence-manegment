import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove, edit, view } from './Redax/cartSlice';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import filterFactory, { textfilter } from "react-bootstrap-table2-filter";


function Navbar() {  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(state => state.cart.expenceList);

    const [filterproduct, setfilterproduct] = useState(products);
    
    const handleRemove = (id) => {  
       dispatch(remove(id));
    };

    const handleEdit = (id) => {
        dispatch(edit(id)); navigate("/Header")
    };

    const handleView = (id) => {
        dispatch(view(id));
        navigate("/Header")
    };

    const [search, setsearch] = useState('');
    const handleSearch = (event) => { setsearch(event.target.value); }


    useEffect(() => {
        if (search && search !== "") {
         
            const list = products.filter((el) => el.Vendor.toLowerCase().includes(search) ||
                el.Voucher === search ||
                el.amount === search
          )
            setfilterproduct(list)
        } else {
            setfilterproduct(products)
        }
      }, [search, products]);


      
    //   { dataField: " ",
    //   formatter: (rowIndex) => {                             <=====  learn concepts
    //   return (  <div>{rowIndex+1} </div>) 
    //    },
    //   text: "sr.no",
    //  },

    const columns = [
    {
        dataField: 'sl.no',
        text: 'Sl no.',
        formatter: (cell, row, rowIndex, formatExtraData) => {
          return rowIndex + 1;
        },
        sort: true,
      },
        {
            dataField: "Date",
            text: "Date",

        },
        {
            dataField: "Vendor",
            text: "Vendor"
        },

        {
            dataField: "Voucher",
            text: "Voucher no",

        },
        {
            dataField: "amount",
            text: "Amount",

        }, { dataField: "",
            formatter: (rowContent,row) => {
            return (<div>
        <button className="btn btn-warning" onClick={() => handleEdit(row.Id)}>  Edit  </button>
        <button className="btn btn-warning" onClick={() => handleView(row.Id)}>View  </button>
        <button className="btn btn-warning" onClick={() => handleRemove(row.Id)}>Delete    </button> 
      
         </div>
        
        )    
        },
         text: "Action",
        },

         {
            dataField: "price",
             text: ""
         }
  ];
  return (
        <div className='headar' >
            <h1><NavLink className='navLink' to="/Header" >Create Expense</NavLink></h1>
            <h1 className='minim'> welcome munim </h1>

            {products.length > 0 ? <div>
            <BootstrapTable
            bootstrap4
            keyField="Id"
            data={filterproduct?.length ? filterproduct : products}     // qestion sagar
            columns={columns}
            pagination={paginationFactory({ sizePerPage: 5})}  />
       </div> : <img className='img' src="pc.gif" alt="car"/>
       }
        </div >
    )
}
export default Navbar;




// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import './App.css';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { remove, edit, view } from './Redax/cartSlice';
// import { useNavigate } from 'react-router-dom';
// import paginationFactory from "react-bootstrap-table2-paginator";
 



// function Navbar() {  
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const products = useSelector(state => state.cart.expenceList);



//     //       const [items, setItems] = useState([products]);
//     //       console.log(items, "items");

//     //     useEffect(() => {
//     //         localStorage.setItem('items', JSON.stringify(items));
//     //     }, [items]);



//     // useEffect(() => {
//     //   const items = JSON.parse(localStorage.getItem('items'));
//     //   if (items) {  
//     //    setItems(items);
//     //   }
//     // }, []);

//     // const [isLoaded, setIsLoaded] = useState(false);
//     // const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

//     // useEffect(() => {
//     //     setIsLoaded(true);
//     // }, []);

//     // useEffect(() => {
//     //     if (isLoaded) {
//     //         setIsPageLoaded(true);
//     //     }
//     // }, [isLoaded]);

//     //  let Vendor = products.Vendor;
//     //  console.log(Vendor, "Vendor" );

//     // localStorage.setItem("Vendor",  products.Vendor);
//     // localStorage.setItem("name",  products.Vendor);

//     const [filterproduct, setfilterproduct] = useState(products);

//     const[page,setpage]=useState(1);
//     const r = 5;
//     const l = page*r;
//     const f = l - r;
//     const re = filterproduct.slice(l,f);
  
//     console.log(filterproduct.length,'length')
//     var npage =  (filterproduct.length / r);
//     console.log(npage)
//     const number = [...Array(npage +1 ).keys()].slice(1)
     

//    const perpege = () => {if(page !== 1){setpage(page-1)}}
//    const  nextpege= (id) => {setpage(id)}
//    const    pages= () => {if(page !== npage) { setpage(page+1)}}

//     // console.log(products, "productsnavbar");
//     const handleRemove = (id) => {
//         //  console.log("fgh", id)
//         dispatch(remove(id));
//     };

//     const handleEdit = (id) => {
//         dispatch(edit(id)); navigate("/Header")
//     };

//     const handleView = (id) => {
//         dispatch(view(id));
//         navigate("/Header")
//     };

//     const [search, setsearch] = useState('');
//     const handleSearch = (event) => { setsearch(event.target.value); }

//  useEffect(() => {
//         if (search && search !== "") {
//             //   console.log(search);
//             // console.log(products);
//             const list = products.filter((el) => el.Vendor.toLowerCase().includes(search) ||
//                 el.Voucher === search ||
//                 el.amount === search
//           )
//             setfilterproduct(list)
//         } else {
//             setfilterproduct(products)
//         }
//       }, [search]);
//  return (
//         <div className='headar' >
//             <h1><NavLink className='navLink' to="/Header" >Create Expense</NavLink></h1>
//             <h1 className='minim'> welcome munim </h1>

//             {products.length > 0 ?
//                 <div>
                   

//                     <table className="table table-dark" id='pagination' pagination={paginationFactory({ sizePerPage: 5 })}>
//                         <thead>
//                             <tr>
//         <th scope="col">sr.no</th>
//         <th scope="col"> Date</th>
//         <th scope="col">Vendor</th>
//         <th scope="col">Voucher no</th>
//         <th scope="col"> Amount</th>

//          <th scope="col">Action</th>
//          <th scope="col"><input type={'search'} placeholder={"search"} className="btn btn-warning" onChange={handleSearch} /></th>  
//                             </tr>
//                         </thead>
//       <tbody>

//    {re.map((product, index) => {
                                 
//                                 return (
//                <tr key={index} className="table-dark" >
//                                         <th scope="row">{index + 1}</th>
//                                         <td>{product.Date}</td>
//                                         <td>{product.Vendor}</td>
//                                         <td>{product.Voucher}</td>
//                                         <td>{product.amount}</td>
//                                          <td>
//                     <button className="btn btn-warning" onClick={() => handleEdit(product.Id)}>  Edit  </button>
//                          &nbsp;
//                     <button className="btn btn-warning" onClick={() => handleView(product.Id)}>View  </button>
//                         &nbsp;
//                     <button className="btn btn-warning" onClick={() => handleRemove(product.Id)}>Delete  </button>
//                                         </td>

//                             <td></td>
//                                     </tr>
//                                 )
//                             })}

//                         </tbody>

//                     </table>  
//           <div class='pagination-container' >
// 				<nav>
// 				  <ul class="pagination">
            
//             <li data-page="prev" > <a   onClick={perpege}>prev </a></li>
// 				  {   
//                   number.map((n,i)=>(    
// <li data-page="prev"  key={i}>   <a   onClick={()=>pages(n) }> {n} </a>  </li>
//           ))  }

//  <li data-page="next" id="prev"> <a    onClick={nextpege} >next </a> </li>
//             </ul></nav>

// 			</div> 
//  </div> : <img className='img' src="pc.gif" alt="car" />}
//         </div >
//     )
// }
// export default Navbar;
 






  //      const [items, setItems] = useState([products]);
    //   //   console.log(items, "items");
    //    useEffect(() => {
    //          localStorage.setItem('items', JSON.stringify(items));
    //      }, [items]);

    // useEffect(() => {
    //   const items = JSON.parse(localStorage.getItem('items'));
    //   if (items) {  
    //    setItems(items);
    //   }
    // }, []);

    // const [isLoaded, setIsLoaded] = useState(false);
    // const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

    // useEffect(() => {
    //     setIsLoaded(true);
    // }, []);

    // useEffect(() => {
    //     if (isLoaded) {
    //         setIsPageLoaded(true);
    //     }
    // }, [isLoaded]);

    //  let Vendor = products.Vendor;
    //  console.log(Vendor, "Vendor" );

    // localStorage.setItem("Vendor",  products.Vendor);
    // localStorage.setItem("name",  products.Vendor);

  
    // useEffect(() => {
    // window.onload = () => {
    //     if (window.location.pathname != "/") {
    //       window.location = "/";
    //     }
    //   };
    // }, [ ]);

  
    // useEffect(() => {
    //     if(products.Data ) {
        
    //     }
    //   });
