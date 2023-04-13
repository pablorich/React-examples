export const initialState = {
  stateStatus: "Initial state",
  todos: [
    { id: 1, text: "initial1" },
    { id: 2, text: "intiial2" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (state.stateStatus === "Initial state") {
        return {
          stateStatus: "modified",
          todos: [action.payload],
        };
      }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload)],
      };

    default:
      return state;
  }
};
