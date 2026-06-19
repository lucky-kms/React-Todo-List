import { useState, type SubmitEvent } from 'react';
import { ToyTodoUseContext } from './ToyTodoUseContext';
import Btn from '../components/Btn';
import ListLine from '../components/List';
import List from '@mui/material/List';
import TypographyText from '../components/Typography';
import Checkboxes from '../components/Checkboxs';
import StackLayout from '../components/StackLayout';
import BasicTextFields from '../components/BasicTextFields.tsx';
import BasicSelect from '../components/BasicSelect.tsx';
import { Box } from '@mui/material';
import type { todos5 } from './ToyType.ts';


// date yyyy-mm-dd 함수
const getDateFn = () => {
    const toDay = new Date();

    const newDate = 
        toDay.getFullYear() + '-' +
        String(toDay.getMonth() + 1).padStart(2, '0') + '-' +
        String(toDay.getDate()).padStart(2, '0');

    return newDate;
}


export default function ToyList() {
    const [state, setState] = useState({
        username: '',
        level: '1',
        setdate: getDateFn(),
    });

    const {username, level, setdate} = state;

    const levelText = {
        "1" : "쉬움",
        "2" : "보통",
        "3" : "어려움",
    }

    const {todo, addTodo, removeTodo, toggleTodo, removeCheckedTodo, allCheckTodo} = ToyTodoUseContext();

    const submitTodo = (e: SubmitEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        
        if(state.username.trim() === "") return;

        addTodo(state);

        setState({
            username: '',
            level : '1',
            setdate,
        });
    }

    const inputVal = (e: React.ChangeEvent<HTMLInputElement, Element> | React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        const {name , value} = e.target;

        setState({
            ...state,
            [name] : value,
        })
    }

    // const selectVal = (e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
    //     const {name , value} = e.target;

    //     setState({
    //         ...state,
    //         [name] : value,
    //     })
    // }

    const countNum = (items : todos5[]) => {
        return items.filter(item => item.done === true).length;
    }

    return (
        <div style={{padding: "1rem"}}>
            <h1>To Do List</h1>

            <form onSubmit={submitTodo}>
                {/* [S] 입력 폼 */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "10px"}}>
                    <BasicTextFields
                        nameText={"username"}    
                        valueText={username}
                        sx={{xs: 2, sm: 1, width: '7.9rem' }}  
                        onChange={(e) => inputVal(e)}     
                    />
                    {/* <input 
                        name={"username"} 
                        value={username} 
                        onChange={(e) => inputVal(e)}
                    /> */}
                    
                    <BasicSelect sx={{ sm :{ width: "7.5rem"}}} nameSelect={"level"} nameValue={level} onChange={(e) => inputVal(e)} />
                    {/* <select name="level" value={level} onChange={(e) => inputVal(e)}>
                        <option value="1">쉬움</option>
                        <option value="2">보통</option>
                        <option value="3">중요</option>
                    </select>  */}

                    <Btn typeName="submit" sx={{minWidth: "5rem", height: "58.8px"}} childName="저장"/>
                </Box>
                {/* [E] 입력 폼 */}

                {/* [S] 목록 */}
                <List >
                    {
                        todo.map((item) => (
                            <div style={{ display: 'flex', flexWrap:'nowrap', width: '100%', maxWidth: "100%", backgroundColor: 'background.paper' }}>
                                <Checkboxes 
                                    onClick={() => toggleTodo(item.id)} 
                                    checked={item.done? true : false} 
                                />
                                
                                <ListLine
                                    onClick={() => toggleTodo(item.id)}
                                    sx={{cursor: 'pointer', textDecoration: item.done? 'line-through' : 'none'}}
                                    key={item.id}
                                    primary={item.username}
                                    secondary={
                                        <>
                                            <TypographyText
                                                text="div"
                                                variantText="body2"
                                                sx={{ color: 'text.primary', display: 'inline' }}
                                            >
                                                <span 
                                                    onClick={() => toggleTodo(item.id)} 
                                                    style={{cursor:"pointer", 
                                                        textDecoration: item.done? "line-through": "none",
                                                    }}
                                                >
                                                    <span>{item.username}</span> 
                                                    <span>{levelText[item.level as keyof typeof levelText]}</span> 
                                                    <span>{item.setdate}</span>
                                                </span>
                                            </TypographyText>
                                            
                                        </>
                                    }
                                >
                                    
                                    <Btn 
                                        childName="삭제"
                                        iconName="delType"
                                        sx={{color: 'error.main', borderColor: 'error.main', }}
                                        onClick={() => removeTodo(item.id)}  
                                    />
                                </ListLine>
                            </div>
                        ))
                    }
                </List>

                {/* [E] 목록 */}

                {/*  flexOption : row, column */}
                <StackLayout
                    flexOptionXs={'column'}
                    flexOptionSm={'row'}
                    sx={{justifyContent:'flex-end'}}
                >
                    <span style={{marginRight:"auto", padding: "0 0.5rem"}}>완료 : { countNum(todo) }</span>
                    <Btn childName="선택삭제" iconName="delType" onClick={removeCheckedTodo} />
                    <Btn childName="전체완료" iconName="chkType" onClick={allCheckTodo} />
                </StackLayout>

            </form>
        </div>
    )
}