















import React, { useState } from "react"
import styles from './TodoCardList.module.css'
import { FaRegSun, FaPen, FaPlus, FaCanadianMapleLeaf } from "react-icons/fa6"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';




const TodoCardList: React.FC = () => {

    const [tables, setTables] = useState()



    const onDragEnd = ():void=>{
        console.log("Hello");

    }
    return (
<DragDropContext onDragEnd={onDragEnd}>

<div>


    </div>
        </DragDropContext>
    )
}


export default TodoCardList


{/* <li className={styles.todoCard}>
<div className={styles.todo}>

    <div className={styles.title}>
        <h2> Title</h2>
        <button> <FaRegSun /></button>
    </div>


    <ol className={styles.list}>
        <li>
            <span> Todo</span>
            <button><FaPen /> </button>
        </li>
        <li>
            <span> Todo</span>
            <button><FaPen /> </button>
        </li>

        <li>
            <span> Todo</span>
            <button> <FaPen /></button>
        </li>
    </ol>

    <div className={styles.addBtn}>
        <button> <FaPlus />  <span>Add Card</span></button>
        <button><FaCanadianMapleLeaf /> </button>
    </div>
</div>
</li> */}