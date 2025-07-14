import { getNoteItem } from "../api/getNote";
import { ROUTES } from "../routes";
import PrintError from "../components/PrintError";
import { convertSlug } from "@/utils/convertSlug";
import BackLink from "../components/BackLink";
import './NoteDetailPage.css'

interface Props {
  noteId: number | null;
  onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
}


function NoteDetailPage({noteId, onChangeRoute}:Props) {
  
  /* noteId가 없다면 PrintError 컴포넌트를 화면에 렌더링 */
  if(!noteId) return <PrintError>노트 정보를 불러오지 못했어요! 🥺</PrintError>
  
  const note = getNoteItem(noteId);
  // console.log( "🧐 :", note );

  /* router 세팅 */
  const handleChangeRoute = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.edit, noteId);
  }
  const handleBackLink = () => {
    onChangeRoute(ROUTES.list);
  }

  /* content의 HTML 변환 */
  const createMarkup = () => {
    if(!note) return;
    return {__html: note.content}
  }


  /* JSX */
  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackLink} />
        {!note && <PrintError>해당하는 노트를 찾을 수 없어요! 🥺</PrintError>}
        {note && (
          <>
            <h2>{note?.title}</h2>
            <span>
              {note.expand?.user.name}{' '}
              <a 
                href={`#/edit/${convertSlug(note.title)}`}
                onClick={handleChangeRoute}
              >수정</a>
            </span>
            <div dangerouslySetInnerHTML={createMarkup()}></div>
          </>
        )}
    </div>
  )
}
export default NoteDetailPage