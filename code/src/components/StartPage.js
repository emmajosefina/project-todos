import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import taskList from 'reducers/tasks'
import TaskCounter from 'components/TaskCounter'
import AddTask from './AddTask'
import Footer from './Footer'
import TimeStamp from './TimeStamp'


//Styled components
const devices = {
mobile: "(min-width: 375px)",
tablet: "(min-width: 768px)",
desktop: "(min-width: 1025px)",
}

const Container = styled.div `
width: 375px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

@media ${devices.tablet} {
    width: 768px;
}

@media ${devices.desktop} {
    width: 1025px;
}
`
const HeaderImage = styled.img`
width: 170px;
margin-top: 35px;
`

const TaskStatus = styled.div`
text-align: center;
`

const Button = styled.button`
border-radius: 8px;
border: 0.4px solid gray;
padding: 4px;
display: flex;
position: absolute;
right: 13px;
top: 15px;
-webkit-appearance: none;
`
const BigHeading = styled.h1`
color: #1D3F6F;
font-size: 31px;
`
const Article = styled.article`
border: 0.4px solid gray;
background: #f8f8f8;
border-radius: 15px;
padding: 1rem;
margin: 0.4rem;
width: 78%;
position: relative;
word-break: break-word;

@media ${devices.tablet} {
    width: 50%;
}
`

const TaskHeading = styled.h2`
max-width: 82%;
margin-top: -2px;
overflow-wrap: break-word;
cursor: pointer;
  text-decoration: ${(prop) => prop.complete
    ? "line-through"
    : "none"
  }
`

const Checkbox = styled.input`
margin-top: 10px;
vertical-align: bottom;
`

const StartPage = () => {

    const tasksList = useSelector((todos) => todos.tasks.items)
    const dispatch = useDispatch()


    const onTaskToggle = (taskId) => {
        dispatch(taskList.actions.toggleItem(taskId))
    }

    const onDeleteClick = (index) => {
        dispatch(taskList.actions.deleteItem(index))
    }

    return (
        <section>
            <Container>

        <HeaderImage src="./assets/woman-long-list.jpg" alt="illustration created by storyset, www.freepik.com" />

            <BigHeading>Get it out of your head</BigHeading> 

            <AddTask />
            <TaskStatus>
            <TaskCounter />
            </TaskStatus>
            
    
            {tasksList.map((taskItem, taskIndex) => (

                <Article key={taskItem.id}>
            
                   
                    <TaskHeading
                    htmlFor={taskItem.id} 
                    complete={taskItem.isDone}>
                    {taskItem.text}
                    </TaskHeading>

                    <TimeStamp />
                    <label>
                    <Checkbox 
                    type="checkbox" 
                    tabIndex="0"
                    checked={taskItem.isDone} 
                    id={taskItem.id}
                    onChange={() => { onTaskToggle(taskItem.id)}} />
                     &nbsp; I'm done with this
                    </label>

                    <Button onClick={() => onDeleteClick(taskIndex)} >
                     
                     <span role="img" aria-label="cross">❌</span> 
                     </Button>
                      
              </Article>

            ))}
            </Container>
            <Footer />
            </section>

    )

}

export default StartPage