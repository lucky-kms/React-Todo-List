import { createContext } from "react";

export type todos5 = {
    id: number,
    username: string,
    level: string,
    setdate: string,
    done: boolean,
}

export type todoList = {
    todo: todos5[],
    addTodo: (state: object) => void,
    removeTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
    removeCheckedTodo: () => void,
    allCheckTodo: () => void,
}

export const TodosContext = createContext<todoList | null>(null);



