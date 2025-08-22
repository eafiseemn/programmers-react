import tw from "@/utils/tw";
import { PiPushPinFill, PiPushPinLight } from "react-icons/pi";
// import { RxCross1 } from "react-icons/rx";
import { usePinnedTasks, useTaskStore } from "./@store";

function PinnedTaskList() {
  const pinnedTaskList = usePinnedTasks();
  const setTask = useTaskStore(s => s.setTask);
  const togglePin = useTaskStore(s => s.togglePin);

    const handleSetTask = ( taskId:string , isCompleted:boolean ) => {
      setTask( taskId, isCompleted );
    }
  
    const handleTogglePin = ( taskId:string ) => {
      togglePin(taskId);
    }

    if (!pinnedTaskList) return null;
  
    return (
      <ul className="flex flex-col gap-2">
        {
          pinnedTaskList && pinnedTaskList.map( ( { id, content, isPinned, isCompleted }) => (
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
              {/* <button type="button" onClick={ () => handleDeleteTask(id) }
              ><RxCross1 /></button> */}
            </div>
          </li>
          ))
        }
      </ul>
    )
  }
export default PinnedTaskList