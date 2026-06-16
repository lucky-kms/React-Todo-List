import { useContext } from 'react';
import { TodosContext } from './ToyType';

export const ToyTodoUseContext = () => {
    const todosContent1  = useContext(TodosContext);

    if(!todosContent1) throw new Error("오류 입니다.");

    return todosContent1;
}