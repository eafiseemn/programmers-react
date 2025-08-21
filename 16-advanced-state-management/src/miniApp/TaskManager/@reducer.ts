export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
  isPinned: boolean;
}

export type State = Task[];

const ACTION_TYPE = {
  ADD_TASK: 'Add New Task',
  SET_TASK: 'Toggle Task Completion',
  TOGGLE_TASK: 'Toggle Pin',
  DELETE_TASK: 'Delete Task'
} as const

type Action = 
 | { type: typeof ACTION_TYPE.ADD_TASK, payload: string; } // task.content
 | { type: typeof ACTION_TYPE.SET_TASK, payload: { taskId:string, isCompleted:boolean }; }
 | { type: typeof ACTION_TYPE.TOGGLE_TASK, payload: string; } // task.id
 | { type: typeof ACTION_TYPE.DELETE_TASK, payload: string; } // task.id

// Data Fetch
export const INITIAL_TASK:State = [
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


/* Action Creator

  redux의 오랜된 전통적인 패턴
  자동완성 / 타입 추론을 위해 사용: 유지보수에 좋음

  actions creator + reducer + context(methods 래핑)

  RTK (Redux ToolKit) 에서는 createSlice() 로 매핑 관리
  createSlice({
    name: "tasks",
    reducers: {
      addTask: {...},
      deleteTask: {...},
      ... 
    }
  });

  -> Zustand에서도 사용 (slices Pattern)

 */

export type AddTaskAction = {
  type: typeof ACTION_TYPE.ADD_TASK;
  payload: string;
}

export const addTask = ( nextStep:string ):AddTaskAction => ({
  type:ACTION_TYPE.ADD_TASK,
  payload: nextStep,
})

export type SetTaskAction = {
  type: typeof ACTION_TYPE.SET_TASK;
  payload: { taskId:string, isCompleted:boolean };
}

export const setTask = ( taskId:string, isCompleted:boolean ):SetTaskAction => ({ 
  type: ACTION_TYPE.SET_TASK, 
  payload: { taskId, isCompleted } 
});

export type TogglePinAction = {
  type: typeof ACTION_TYPE.TOGGLE_TASK;
  payload: string;
}

export const togglePin = ( taskId:string ):TogglePinAction => ({
  type:ACTION_TYPE.TOGGLE_TASK,
  payload: taskId,
})

export type DeleteTaskAction = {
  type: typeof ACTION_TYPE.DELETE_TASK;
  payload: string;
}

export const deleteTask = ( deleteId:string ):DeleteTaskAction => ({
  type:ACTION_TYPE.DELETE_TASK,
  payload: deleteId,
})



export default function reducer( state:State, action:Action):State {
  switch (action.type) {
    case ACTION_TYPE.ADD_TASK: {
      // TASK 생성
       const newTask = {
        id: crypto.randomUUID(),
        content: action.payload,
        isCompleted: false,
        isPinned: false
      };

      return [ newTask, ...state ];
    }

    case ACTION_TYPE.SET_TASK: {
      // TASK Complete 상태 업데이트
      const { taskId, isCompleted } = action.payload;
      const nextState = state.map(task => 
        ( task.id === taskId ) 
        ? ( { ...task, isCompleted } )
        : task
      );
      
      return nextState; 
    }

    case ACTION_TYPE.TOGGLE_TASK: {
      // TASK Pin 토글 상태 업데이트
      const taskId = action.payload
      const nextState = state.map(task => 
        ( task.id === taskId ) 
        ? ( { ...task, isPinned: !task.isPinned } ) 
        : task
      );

      return nextState; 
    }

    case ACTION_TYPE.DELETE_TASK: {
      // TASK 제거
      const deleteId = action.payload;
      const nextState = state.filter(task => task.id !== deleteId);
      return nextState;
    }

    default:
      return state;
  }
}