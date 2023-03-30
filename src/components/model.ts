interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
    handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

export default Todo;

//import React, { useReducer } from 'react';
/*
type Actions =
    | { type: 'add'; payload: string }
    | { type: 'remove'; payload: number }
    | { type: 'done'; payload: number }


const TodoReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case 'add':
            return [...state, { id: Date.now(), todo: action.payload, isDone: false }];
        case "remove":
            return state.filter(todo => todo.id !== action.payload);
        case "done":
            return state.map(todo => {
                return todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo;
            });
        default:
            return state;
    }
}

export const ReducerExample:React.FC = () => {
   const [state, dispatch] = useReducer(TodoReducer, []); // Error message: No overload matches the call.
    const test= 'test';

    return (
        <div>
        <span>{test}</span>
        </div>
    )
}*/
/*Complete error message
No overload matches this call.
  Overload 1 of 5, '(reducer: ReducerWithoutAction<any>, initializerArg: any, initializer?: undefined): [any, DispatchWithoutAction]', gave the following error.
    Argument of type '(state: Todo[], action: Actions) => (Todo | { id: number; todo: string; isDone: boolean; })[]' is not assignable to parameter of type 'ReducerWithoutAction<any>'.
  Overload 2 of 5, '(reducer: (state: Todo[], action: Actions) => (Todo | { id: number; todo: string; isDone: boolean; })[], initialState: never, initializer?: undefined): [never, Dispatch<...>]', gave the following error.
    Argument of type 'never[]' is not assignable to parameter of type 'never'.
*/




