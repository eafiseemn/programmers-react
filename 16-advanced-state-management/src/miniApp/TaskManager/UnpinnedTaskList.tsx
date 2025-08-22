import tw from "@/utils/tw";
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { useUnpinnedTasks, useTaskStore } from "./@store";
import { useShallow } from "zustand/shallow";


function UnpinnedTaskList() {

  const unpinnedTaskList = useUnpinnedTasks();

  const { setTask, togglePin, deleteTask } = useTaskStore(
    useShallow(s => ({
      setTask: s.setTask,
      togglePin: s.togglePin,
      deleteTask: s.deleteTask
    }))
  );

  const handleSetTask = ( taskId:string , isCompleted:boolean ) => {
    setTask(taskId, isCompleted);
  }

  const handleTogglePin = ( taskId:string ) => {
    togglePin(taskId);
  }

  const handleDeleteTask = ( taskId:string ) => {
    deleteTask(taskId);
  }

  if (!unpinnedTaskList) return null;

  return (
    <ul className="flex flex-col gap-2">
      {
        unpinnedTaskList.map( ( { id, content, isPinned, isCompleted }) => (
        <li className="flex justify-between gap-1.5" key={id}>
          <label htmlFor="" className={tw("flex gap-1", isCompleted && "line-through")}>
            <input type="checkbox" 
              checked={isCompleted} 
              onChange={(e) => handleSetTask(id, e.target.checked)} 
            />
            {content}
          </label>
          <div className="flex gap-2">
            <button type="button" onClick={ () => handleTogglePin(id) }>
              { isPinned ? <PiPushPinFill /> : <PiPushPinLight /> }
            </button>
            <button type="button" onClick={ () => handleDeleteTask(id) }
            ><RxCross1 /></button>
          </div>
        </li>
        ))
      }
    </ul>
  )
}

export default UnpinnedTaskList