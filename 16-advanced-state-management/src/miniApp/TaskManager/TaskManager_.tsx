import tw from "@/utils/tw"
import PinnedTaskList_ from "./PinnedTaskList_"
import UnpinnedTaskList_ from "./UnpinnedTaskList_"
import { TaskProvider } from "./@context"

function TaskManager_( { className }:{ className?:string } ) {
  return (
    <TaskProvider>
      <div
        lang="en"
        className={tw("w-72 flex flex-col gap-2 p-5 border border-accent rounded text-accent", className)}
      >
        <PinnedTaskList_ />
        <UnpinnedTaskList_ />
      </div>
    </TaskProvider>
  )
}

export default TaskManager_
