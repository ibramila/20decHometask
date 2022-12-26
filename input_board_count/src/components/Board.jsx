import React from 'react'

function Board({ task }) {
    console.log(task);
    return (
        <div>
            {task.map((item) => (
                <li>
                    {item}
                </li>
            )
)}
        </div>
    )
}

export default Board