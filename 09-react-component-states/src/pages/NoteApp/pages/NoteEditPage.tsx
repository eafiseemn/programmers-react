import { getNoteItem, type Note } from "../api/getNote";
import BackLink from "../components/BackLink";
import NoteForm from "../components/NoteForm";
import PrintError from "../components/PrintError";
import { ROUTES } from "../routes";

type Props = {
  noteId: number | null;
  onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
  onEdit: (willEditNote:Note) => void;
  onDelete: (willDeleteNoteId:number) => void;

}
function NoteEditPage({ noteId, onChangeRoute, onEdit, onDelete }: Props) {
  // console.log(noteId, onChangeRoute, onEdit, onDelete );

  if(!noteId) return;
  const handleBackLink = () => onChangeRoute(ROUTES.detail, noteId);
  const note = getNoteItem(noteId);

  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackLink} />
      {
        note ? 
        (<>
          <h2>노트 편집</h2>
            <NoteForm
            mode="edit"
            onDelete={onDelete}
            onEdit={onEdit}
            onChangeRoute={onChangeRoute}
            note={note}
          />
        </>)
        : <PrintError>잘못된 경로입니다! 🥺</PrintError>
      }
    </div>
  )
}
export default NoteEditPage
