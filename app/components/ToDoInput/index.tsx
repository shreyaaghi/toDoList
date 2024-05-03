"use client";
import { useState } from "react";
import axios from "axios";

const ToDoInput = ()=>{
    // useEffect(() => {
    //     console.log("Hi from the Todo input");
    // }, []);
    
    const [item, setItem] = useState("");

    const addItem = async () => {
        if (item.length > 0) {
            const { data } = await axios.post(`${location.origin}/api/todo`, {item:item});
            if (data) {
                setItem("");
            }
        }
    }

    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="enter-task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Task</label>
            <input type="text" id="enter-task" className="bg-gray-50 border border-gray-300 text-sm text-gray-800 rounded-lg focus:ring-green-500 focus:border-emerald-500 block w-full p-2.5" placeholder="Ex. Buy groceries" required value = {item} onChange = {evt=> setItem(evt.target.value)} />
        </div>
        <button className = "text-gray-800 bg-blue-700 font-medium rounded-lg text-sm sm:w-auto px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick = {() => addItem()}>+</button>
      </div>
    )
}
export {ToDoInput};