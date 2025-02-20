
const initialState = {
  tasks: [],
  favoriteData: [],
  filteredTasks: [],
};

const taskReducer = (state, action) => {
  let updatedTasks,
    updatedFilteredTasks,
    updatedTasksEdit,
    newTask,
    updatedFilteredTasksEdit;

  switch (action.type) {
    case "ADD_TO_TASK":
      newTask = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        filteredTasks: [...state.filteredTasks, newTask],
      };
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favoriteData: [...state.favoriteData, action.payload],
      };
    case "REMOVE_ALL_TASK":
      return {
        ...state,
        tasks: [],
        filteredTasks: [],
      };

    case "REMOVE_FROM_TASK":
      updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      updatedFilteredTasks = state.filteredTasks.filter(
        (task) => task.id !== action.payload.id
      );

      return {
        ...state,
        tasks: updatedTasks,
        filteredTasks: updatedFilteredTasks,
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favoriteData: state.favoriteData.filter(
          (task) => task.id !== action.payload.id
        ),
      };
    case "EDIT_TASK":
      updatedTasksEdit = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      updatedFilteredTasksEdit = state.filteredTasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );

      return {
        ...state,
        tasks: updatedTasksEdit,
        filteredTasks: updatedFilteredTasksEdit,
      };
    case "SEARCH_TASKS": {
      const lowercaseSearchTerm = action.payload.toLowerCase();
      const filteredTasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(lowercaseSearchTerm)
      );
      return {
        ...state,
        filteredTasks: filteredTasks,
      };
    }

    default:
      return state;
  }
};

export { initialState, taskReducer };