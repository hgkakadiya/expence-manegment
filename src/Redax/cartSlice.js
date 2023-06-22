const { createSlice } = require('@reduxjs/toolkit');
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    expenceList: [],
    selectedExpence: {},
    isView: false
  },
  reducers: {
    addexpence(state, action) {
      const item = { ...action.payload };
      if (item.Id && item.Id !== '') {
        state.expenceList = state.expenceList.map(student => {
          // 👇️ if id equals 2, update country property
          if (student.Id === item.Id) {
            return item;
          }
          // 👇️ otherwise return the object as is
          return student;
        });
      } else {
        const item = { ...action.payload };
        item.Id = new Date().getTime();
        state.expenceList.push(item);
        state.isView = false;
      };
      // const item = { ...action.payload };
      // item.Id = new Date().getTime();
      // state.expenceList.push(item);


      // console.log("action",action.payload);
      console.log("item", item);
      //  state.push(action.payload)
      //console.log(actions.payload, "Redux data add")
    },



    remove(state, action) {
      console.log("ghj", action.payload);

      const List = state.expenceList.filter((item) => item.Id !== action.payload);
      state.expenceList = [...List]
      state.isView = false;
    },




    edit(state, action) {
      const selectedValue = state.expenceList.filter((item) => item.Id === action.payload);
      // console.log('selectedValue: ', selectedValue);
      state.selectedExpence = selectedValue[0];
      // console.log('selectedExpence123: ', state.selectedExpence);
      state.isView = false;
    },

    view(state, action) {
      const selectedValue = state.expenceList.filter((item) => item.Id === action.payload);
      // console.log('selectedValue: ', selectedValue);
      state.selectedExpence = selectedValue[0];
      // console.log('selectedExpence123: ', state.selectedExpence);
      state.isView = true;
    },


  },
})
export const { addexpence, edit, remove, view } = cartSlice.actions;
export default cartSlice.reducer;



// {
//     const item = { ...action.payload };
//     if(item.cardId && item.cardId !== '') {
//         state.studentList = state.studentList.map(student => {
//             // 👇️ if id equals 2, update country property
//             if (student.cardId === item.cardId) {
//               return item;
//             }
//             // 👇️ otherwise return the object as is
//             return student;
//           });
//     } else {
//         item.cardId = new Date().getTime();
//         state.studentList.push(item);
//         //console.log(action.payload, )
//     }
// },





      // edit(state, action) {
        //     const selectedValue = state.studentList.filter((item) => item.cardId === action.payload);
        //   //  console.log('selectedValue: ', selectedValue);
        //     state.selectedStudent = selectedValue[0];
        //    // console.log('selectedStudent: ', state.selectedStudent);
        // },






        // remove(state, action) {
        //     state.studentList = state.studentList.filter((item) => item.cardId !== action.payload);
        // }





           //    studentList: [],
        //   selectedStudent : {},
        //   addbilldata: [],




           // const item = { ...action.payload };
            // item.Id = new Date().getTime();
            // state.push(item);
