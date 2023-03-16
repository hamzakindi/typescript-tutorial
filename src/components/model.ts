interface Todo {
    id:number;
    todo: string;
    isDone: boolean;
    handleAdd: (e: React.FormEvent<EventTarget>)=>void;
}

export default Todo;