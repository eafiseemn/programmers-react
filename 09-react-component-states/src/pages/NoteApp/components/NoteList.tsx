import { convertSlug } from "@/utils/convertSlug"
import type { Note } from "../api/getNote"
import './NoteList.css'
import { ROUTES } from "../routes";

interface Props {
  list: Note[]
  onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
}

function NoteList({list, onChangeRoute}:Props) {

  const handleClick = (pickNoteId:number) => (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.detail, pickNoteId);
  }
  // handler에 매개변수를 전달하려면 클릭했을 때 함수가 실행되고 -> 그 때 매개변수가 전달되는 구조가 되어야 함 => Closure 사용!

  return (
    <div className="NoteList">
      <h2>노트 필기 목록 📝</h2>
      <ul>
        {list.map(item => {
          const slug = `#${convertSlug(item.title)}`
          return (
            <li key={item.id}>
              <a href={slug} onClick={handleClick(item.id)} >{item.title}</a>
            </li>)})}
      </ul>
    </div>
  )
}

export default NoteList