import { useId, useState } from "react";
import type { Note } from "../api/getNote";
import { getUser, getUserList } from "../api/getUser";
import './NoteForm.css';
import { convertHTMLToText, convertTextToHTMLString } from "@/utils/convertHTMLToText";
import { ROUTES } from "../routes";

const userList = getUserList();
// console.log(userList);

interface Props {
  mode: "create" | "edit";
  newNoteId?: number;
  note?: Note;
  onCreate?: (newNoteItem:Note) => void;
  onEdit?: (willEditNote:Note) => void;
  onDelete?: (willDeleteNoteId:number) => void;
  onChangeRoute?: (nextRoute:string, pickNoteId?:number) => void;
}

interface FormData {
  title: string;
  content: string;
  userId: number;
}

type Form = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>

function NoteForm({ mode, newNoteId, note, onCreate, onEdit, onDelete, onChangeRoute }:Props) {

  const [ formData, setFormData ] = useState<FormData>(() => {
    //edit mode
    if(mode === 'edit' && note) {
      return {
        title: note.title,
        content: convertHTMLToText(note.content),
        userId: note.userId,
      }
    }
    // create mode
    return {
      title: '',
      content: '',
      userId: 0,
    }
  });

  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleUpdateFormData = (e:Form) => {
    const {name, value} = e.target;
    const nextFormData = {
      ...formData,
      [name]: value
    }

    setFormData(nextFormData);
  }

  const handleCreateNote = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, content, userId } = formData;
    const newUserId = Number(userId);
    const user = getUser(newUserId);

    if(!user || !newNoteId) return;

    const newNote = {
      "id": newNoteId,
      "title": title.trim(),
      "content": convertTextToHTMLString(content),
      "createdAt": new Date(Date.now()).toISOString(),
      "updatedAt": '',
      "userId": newUserId,
      expand: {
        user: user
      }
    }
    onCreate?.(newNote);
    onChangeRoute?.(ROUTES.detail, newNoteId);
  }

  const handleEditNote = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!note) return;
    const user = getUser(Number(formData.userId))
    if(!user) return;

    const editedNote: Note = {
      ...note,
      title: formData.title,
      content: convertTextToHTMLString(formData.content),
      userId: Number(formData.userId),
      updatedAt: new Date(Date.now()).toISOString(),
      expand: {
        user: user
      }
    };
    onEdit?.(editedNote);
    onChangeRoute?.(ROUTES.detail, note.id);
  }

  const handleDeleteNote = () => {
    if(!note) return;
    onDelete?.(note.id);
    onChangeRoute?.(ROUTES.list);
  }

  const isCreateMode = mode.includes('create');

  return (
    <form className="NoteForm" 
      onSubmit={ isCreateMode ? handleCreateNote : handleEditNote }>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input 
          type="text"
          id={titleId}
          name="title"
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea 
          id={contentId}
          name="content"
          value={formData.content}
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={userId}>작성자</label>
        <select 
          id={userId}
          name="userId"
          value={formData.userId}
          onChange={handleUpdateFormData}
        >
        <option>작성자 선택</option>
        {
          userList.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }
        </select>
      </div>
      <div className="buttonGroup">
        <button type="submit">
          {isCreateMode ? "✏️ 등록" : "✏️ 수정" }
        </button>
        {isCreateMode 
          ? <button type="reset">초기화</button> 
          : <button type="button" onClick={handleDeleteNote}>삭제</button> }
        
      </div>
    </form>
  )
}
export default NoteForm



{/* <textarea 
  className="NoteTitle" 
  value={formData.title}
  onChange={(e)=> setFormData({
    ...formData,
    title: e.target.value})}
></textarea> */}
{/* <textarea 
  className="NoteContent" 
  value={formData.content}
  onChange={(e)=> setFormData({
    ...formData,
    content: e.target.value})}
></textarea> */}