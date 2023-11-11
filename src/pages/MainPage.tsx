import React from "react";
import TodoCard from "../widgets/TodoCardList";
import TodoCardList from "../widgets/TodoCardList";

const MainPage:React.FC = () => {

    return (

        <div>
            <ol>
        <TodoCardList/>
        <TodoCardList/>
        <TodoCardList/>
        </ol>
              </div>
        
    )
}

export default MainPage