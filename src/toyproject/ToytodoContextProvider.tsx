import { useState } from 'react';
import { TodosContext, type todos5 } from './ToyType';


export default function ToytodoContextProvider ({children} : {children : React.ReactNode}) {
    
    
    const [todo5, setTodo] = useState<todos5[]>([
        {
            id: 1,
            username: "오늘의 할일, 일자리구하기",
            level: "1",
            setdate: "2026-09-06",
            done: true,
        },
        {
            id: 2,
            username: "오늘의 할일, 클라이밍 하기",
            level: "2",
            setdate: "2026-09-07",
            done: false,
        },
        {
            id: 3,
            username: "오늘의 할일, 공부하기",
            level: "3",
            setdate: "2026-09-08",
            done: false,
        }
    ]);

    const addTodo = ({...state}) => {
            const {username, level, setdate} = state;

            setTodo(prev => {
                const nextId =  prev.length > 0 ? Math.max(...prev.map((item) => item.id)) + 1 : 1;

                return [
                ...prev,
                {
                    id: nextId,
                    username,
                    level,
                    setdate,
                    done: false,
                }
            ];
        })
        

        
    }

    const removeTodo = (id: number) => {
        setTodo(prev => prev.filter((item) => item.id !== id));
    }

    const toggleTodo = (id: number) => {
        
        setTodo(prev => prev.map((item) => 
            item.id === id? {...item, done: !item.done} 
            : 
            item
        ));
        
    }

    // 선택삭제
    const removeCheckedTodo = () => {
        setTodo(prev => prev.filter(item => !item.done));
    }

    // 전체완료
    const allCheckTodo = () => {

            setTodo(prev => {
                const isAllDone = prev.every(item => item.done);

                return prev.map(item => ({
                    ...item,
                    done: !isAllDone,
                }))
            })
    }

    return (
        <TodosContext.Provider
            value={{
                todo: todo5,
                addTodo,
                removeTodo,
                toggleTodo,
                removeCheckedTodo,
                allCheckTodo,
            }}
        >
            { children }
        </TodosContext.Provider>
    )
}
