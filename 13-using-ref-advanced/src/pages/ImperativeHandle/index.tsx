import { useRef, useState } from 'react';
import S from './style.module.css'
import ChatBox, { type ChatBoxHandle } from './components/ChatBox';

export type Chat = {
  id: string;
  message: string;
  isMe: boolean;
};

const INITIAL_CHAT_MESSAGE = [
  { id: 'chat-1', message: '오늘 저녁에 뭐 먹을까?', isMe: false },
  { id: 'chat-2', message: '그러게, 뭐 먹지?', isMe: true },
  { id: 'chat-3', message: '치킨에 맥주 ㄱ?', isMe: false },
  { id: 'chat-4', message: '치킨..?은 좀 별론데', isMe: true },
  { id: 'chat-5', message: '나 닭발 먹고 싶은데 얌얌 어떰?', isMe: true },
  { id: 'chat-6', message: '오 좋은데? 맛있겠다!', isMe: false },
  { id: 'chat-7', message: '그럼 좀 있다가 둘리광장에서 만나실?', isMe: true },
  { id: 'chat-8', message: '알겠어! 있다 봐!!', isMe: false },
]

function ImperativeHandle() {

  const [ chatMessage, setChatMessage ] = useState<Chat[]>(INITIAL_CHAT_MESSAGE);
  const imperativeHandleRef = useRef<ChatBoxHandle>(null);

  /* [상태 업데이트] 채팅 메시지 목록에 새 메시지 추가 기능 */
  const handleAddMessage = (message:string) => {
    const nextChatId = chatMessage.length + 1;
    const newMessage = {
      id: `chat-${nextChatId}`,
      message,
      isMe: true,
    }
    setChatMessage(current => [...current, newMessage])
  }

  /* scroll 위치 계산하는 자식의 함수 끌어다 쓰기 */
  const mountedMainElement = () => {
    const imperativeHandles = imperativeHandleRef.current;  
      // ChatBox.tsx 에서 정의한 scrollDownList();
    if(!imperativeHandles) return;
    imperativeHandles.scrollDownList();
  }

  return (
    <div className={S.container} ref={mountedMainElement}>
      <h1>상위 컴포넌트에 명령형 핸들 노출하기</h1>
      <div className={S.description}>
        <p>
          <a href='https://ko.react.dev/reference/react/forwardRef'
          title='React - forwardRef 공식문서'
          rel='noreferrer noopener'
          target='_blank'
          >React.forwardRef() / ref Props</a>
          를 사용해 상위 컴포넌트에 하위 컴포넌트의 DOM 요소 노드를 노출하는 방법을 학습했습니다.
        </p>
        <p>
          때때로 DOM 요소 노드에 대한 접근을 허용하지 않고, 명령형 핸들(함수)를 노출하는 방법에 대해 학습해 봅니다.
        </p>
        <p>
          이런 경우, <a href='https://ko.react.dev/reference/react/useImperativeHandle'
          title='React - useImperativeHandle 공식문서'
          rel='noreferrer noopener'
          target='_blank'
          >React.useImperativeHandle()</a> Hook을 사용할 수 있습니다.
        </p>
      </div>
      <ChatBox
        chat={chatMessage}
        onAddMessage={handleAddMessage}
        ref={imperativeHandleRef}
       />
    </div>
  )
}
export default ImperativeHandle