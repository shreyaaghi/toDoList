import { ToDoInput } from "./components"
// import axios from "axios";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  // console.log("yuh");
  // const data = await axios.get('/api/todos');
  // console.info(data);
  const {data:todos, error} = await supabase.from("ToDoItems").select();
  console.info(todos);
  return (
    <main className = "bg-slate-300 min-h-screen flex justify-items-center items-center contents-center flex-col">
      <div>
        <span className = "text-4xl items-center font-bold">To-Do List</span>
      </div>
      <ToDoInput />
      {
        todos?.map((todo) => (
          <li>{todo.task}</li>
        ))
      }
      
    </main>
  );
}
