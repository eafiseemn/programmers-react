import { create } from "zustand";
import { useShallow } from "zustand/shallow";

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
  isPinned: boolean;
}

// Zustand create<T>에 설정될 타입
type TaskState = {
  tasks: Task[];
  addTask: ( nextTask:string ) => void;
  setTask: ( taskId:string, isCompleted:boolean ) => void;
  togglePin: ( taskId:string ) => void;
  deleteTask: ( deleteId:string ) => void;
  reset: () => void;
}

// Data Fetch
export const INITIAL_TASK:Task[] = [
  {
    id: '380a474c-c810-4c00-bb29-4453cbf5a6b7',
    content: "Context + Reducer",
    isCompleted: false,
    isPinned: false
  },
  {
    id: '2a63ab70-2919-41f2-98e1-368711f637d8',
    content: "Zustand",
    isCompleted: false,
    isPinned: false
  },
]

export const useTaskStore = create<TaskState>()((set, _get, store) => {
  return {
    tasks: INITIAL_TASK,
    addTask: ( nextTask:string ) => set((state) => ({
      tasks: [{
        id: crypto.randomUUID(),
        content: nextTask,
        isCompleted: false,
        isPinned: false
      },
      ...state.tasks
      ]
    })),
    setTask: ( taskId:string, isCompleted:boolean ) => set((state) => ({
      tasks: state.tasks.map(task => (task.id === taskId )
      ? ({ ...task, isCompleted }) : task
    )
    })),
    togglePin: ( taskId:string ) => set((state) => ({
      tasks: state.tasks.map(task => ( task.id === taskId )
        ? ({ ...task, isPinned: !task.isPinned })
        : task
     )
    })),
    deleteTask: ( deleteId:string ) => set((state) => ({
      tasks: state.tasks.filter(task => task.id !== deleteId)
    })),
    reset: () => set(store.getInitialState())
  }
});


// tasks filter -> pin / unpin 된 아이템만 받기
export const usePinnedTasks = () => useTaskStore( 
  useShallow((state) => state.tasks.filter(task => task.isPinned))
);
export const useUnpinnedTasks = () => useTaskStore( 
  useShallow((state) => state.tasks.filter(task => !task.isPinned))
);