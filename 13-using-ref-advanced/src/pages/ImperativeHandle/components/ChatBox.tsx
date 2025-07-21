import { useId, useImperativeHandle, useRef, useState } from "react";
import type { Chat } from "..";
import S from '../style.module.css';

export interface ChatBoxHandle {
  scrollDownList: () => void;
}

interface Props {
  chat: Chat[];
  onAddMessage: (message:string) => void;
  ref: React.RefObject<ChatBoxHandle | null>;
}

function ChatBox({chat, onAddMessage, ref}:Props) {
  const id = useId();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const olRef = useRef<HTMLOListElement | null>(null);

  // 한글 입력 시 마지막 글자 겹치는 현상 해결
  // IME(Input Message Editor) 입력기에서 문자가 조합될 때 발생하는 현상
  const [ isComposing, setIsComposing ] = useState(false);

  // useImperativeHandle: 자식에서 만든 함수를 부모 요소에게 주는 방법
  useImperativeHandle(ref, () => ({
    scrollDownList: () => {
      const ol = olRef.current;
      if(!ol) return;
      setTimeout(() => {
      ol.scrollTo(0, ol.scrollHeight);
    });
    }
  }));

  const sendMessage = (newMessage:string) => {
    const textarea = textareaRef.current;

    if(!textarea) return;

    if(newMessage.length <= 0) {
      alert('메시지 내용을 입력해주세요.');
      textarea.select();
      return;
    }

    onAddMessage(newMessage);
    textarea.value = '';
    textarea.select();

  }

  const handleSendMessage = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let newMessage = formData.get('message');
    if(typeof newMessage !== 'string') return;
    newMessage = newMessage.trim();
    sendMessage(newMessage);
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key, shiftKey } = e;
    if(key === 'Enter' && !shiftKey && !isComposing ) {
      e.preventDefault();

      const newMessage = e.currentTarget.value.trim();
      sendMessage(newMessage);
    }
  }

  return (
    <section className={S.chatBox}>
      <h2 className="a11y-hidden">채팅 화면</h2>
      <ol ref={olRef} className={S.chats}>
        {
          chat.map(item => {
            const { id, message, isMe } = item;
            const classNames = `${S.chat} ${isMe ? S.me : ''}`.trim();
            return (
              <li key={id} className={classNames}>
                {message}
              </li>
            )
          })
        }
      </ol>
      <form className={S.form} onSubmit={handleSendMessage}>
        <div className={S.messageBox}>
          <label htmlFor={id} className="a11y-hidden">메시지 입력</label>
          <textarea 
            name="message" 
            id={id} 
            ref={textareaRef} 
            onKeyDown={handleKeyDown}
            onCompositionStart={()=>{setIsComposing(true)}}
            onCompositionEnd={()=>{setIsComposing(false)}}
          ></textarea>
        </div>
        <button type="submit">보내기</button>
      </form>
    </section>
  )
}
export default ChatBox