import { createContext, useContext } from "react"


export const TodoContext = createContext(           //createContext has the default value arguments.
  {
    todos: [
      {
        id: 1,
        todo: " Todo msg",
        completed: false,
      }
    ],

    //Creating the methods with passing the arguments.This are placeholders that will later be replaced with real implementations.

    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
  }
)

// This helps to use the context and This is a custom hook that makes it easier to access the context in the components.so creating this hooks helps to call useTodo whenever using the components.

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider   //wrapping the TodoContext with provider.so this also wraps all the children inside the TodoContext.