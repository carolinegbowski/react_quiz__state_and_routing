import React, { useState } from 'react';

const ListAdd = () => {
    const [data, setData] = useState([])
    const [userInput, setUserInput] = useState("")

    // function printList(someList) {
    //     for (i = 0; i < someList.length; i++) {
    //       return(
    //         <p>{someList[i]}</p>
    //       )  
    //     }
    // }

    return(
        <div>
            <h1>L I S T - A D D</h1>
            <div class="my-form">
                <label>Enter Text: </label>
                <input onChange={e => setUserInput(e.target.value)}></input>
                <button onClick={e => setData([...data, (userInput + " ")])}>Submit</button>
                <p>{data}</p>
            </div>
        </div>
    )
}

export default ListAdd;