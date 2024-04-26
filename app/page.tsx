import { ToDoInput } from "./components"

export default function Home() {
  return (
    <main className = "bg-slate-300 min-h-screen flex justify-items-center items-center contents-center flex-col">
      <div>
        <span className = "text-4xl items-center font-bold">To-Do List</span>
      </div>
      <ToDoInput />
      
    </main>
  );
}
