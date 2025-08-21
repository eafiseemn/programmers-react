import { createContext, useCallback, useContext, useMemo, useReducer } from "react";
import type { Task } from "./@reducer";
import taskReducer, { INITIAL_TASK, addTask, deleteTask, setTask, togglePin } from "./@reducer";

type TaskMethods = {
  addTask: ( nextTask:string ) => void;
  setTask: ( taskId:string, isCompleted:boolean ) => void;
  togglePin: ( taskId:string ) => void;
  deleteTask: ( taskId:string ) => void;
}

type TaskContextValue = {
  pinnedTaskList: Task[];
  unpinnedTaskList: Task[];
  methods: TaskMethods;
} | null;

const TaskContext = createContext<TaskContextValue>(null);
TaskContext.displayName = "TaskContext";

export function TaskProvider( props:React.PropsWithChildren ) {

  const [ taskList, dispatch ] = useReducer(taskReducer, INITIAL_TASK);

  // create methods
  const handleAddTask = useCallback(( nextTask:string ) => {
    dispatch( addTask(nextTask) );
  }, []);

  const handleSetTask = useCallback(( taskId:string, isCompleted:boolean ) => {
    dispatch( setTask(taskId, isCompleted) );
  }, []);

  const handleTogglePin = useCallback(( taskId:string ) => {
    dispatch( togglePin(taskId) );
  }, []);

  const handleDeleteTask = useCallback(( deleteId:string ) => {
    dispatch( deleteTask(deleteId) );
  }, []);

  const taskMethods = useMemo<TaskMethods>(() => ({
    addTask: handleAddTask,
    setTask: handleSetTask,
    togglePin: handleTogglePin,
    deleteTask: handleDeleteTask
  }), [handleAddTask, handleSetTask, handleTogglePin, handleDeleteTask]);

  // define pinnedTaskList & unpinnedTaskList
  const { pinnedTaskList, unpinnedTaskList } = useMemo(() => {
    const pinnedTaskList = taskList.filter(task => task.isPinned);
    const unpinnedTaskList = taskList.filter(task => !task.isPinned);

    return {
      pinnedTaskList,
      unpinnedTaskList 
    }
  }, [taskList]);

  
  return (
    <TaskContext.Provider value={{ pinnedTaskList, unpinnedTaskList, methods:taskMethods }} {...props} />
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => {
  const contextValue = useContext(TaskContext);
  if(!contextValue) throw new Error('useTask 혹은 TaskProvider 내부에서만 사용이 가능합니다.');
  return contextValue;
}