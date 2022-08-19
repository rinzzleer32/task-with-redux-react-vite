import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const SearchTask = state.find((task) => task.id === action.payload);
      if (SearchTask) {
        state.splice(state.indexOf(SearchTask), 1);
      }
    },
    updateTask: (state, action) =>{
      const {title,description,id} = action.payload;
      const searchtask = state.find((task) => task.id === id)
      if(searchtask){
        searchtask.title = title;
        searchtask.description = description;
      }
    }
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
