import tw from "@/utils/tw"
import UnpinnedTaskList from "./UnpinnedTaskList"
import PinnedTaskList from "./PinnedTaskList"
import { useTaskStore } from "./@store"

function TaskManager( { className }:{ className?:string } ) {

  const resetTasks = useTaskStore(s => s.reset);

  return (
    <div
      lang="en"
      className={tw("w-72 flex flex-col gap-2 p-5 border border-accent rounded text-accent", className)}
    >
      <PinnedTaskList />
      <UnpinnedTaskList />
      <button type="button" className="border text-sm rounded" onClick={resetTasks}
      >RESET</button>
    </div>
  )
}

export default TaskManager
