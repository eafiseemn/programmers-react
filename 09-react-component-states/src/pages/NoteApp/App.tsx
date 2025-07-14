import { useState } from "react"
import NoteListPage from "./pages/NoteListPage"
import { getNoteList, type Note } from "./api/getNote"
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteCreatePage from "./pages/NoteCreatePage";
import NoteEditPage from "./pages/NoteEditPage";

function NoteApp() {

  /* note Data 가져오기 */
  const [ list, setList ] = useState(() => getNoteList());
    // 그냥 getNoteList() 를 넣으면 컴포넌트가 렌더링 될때마다 호출함
    // 콜백으로 넣으면 useState가 매번 getNoteList()를 호출하는 게 아니라 컴포넌트 최초 마운트 시 딱 한 번만 호출됨 (리렌더 되더라도 다시 호출하지 않음)
  
  /* 신규 note 생성하기 */
  const handleCreateNote = (newNoteItem:Note) => {
    setList([
      ...list,
      newNoteItem
    ])
    // console.log(list);
  }
  const newNoteId = list.length + 1;
  
  /* note 수정하기 */
  const handleEditNote = (willEditNote:Note) => {
    const nextList = list.map(item =>
      item.id === willEditNote.id ? willEditNote : item )
    setList(nextList);
    console.log(list);
  }

  /* note 삭제하기 */
  const handleDeleteNote = (willDeleteNoteId:number) => {
    const nextList = list.filter(item => item.id !== willDeleteNoteId);
    setList(nextList);
  }

  /* noteId별 router 설정 */
  const [ routeInfo, setRouteInfo ] = useState<{
    route: string;
    noteId: number | null;
  }>({
    route: 'list',
    noteId: null
  });

  const handleChageRoute = (nextRoute:string, pickNoteId:number = 0) => {
    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
      noteId: pickNoteId
      // noteId: pickNoteId ? pickNoteId : routeInfo.noteId
    })
  }
  console.log("current Route:", routeInfo);

  switch (routeInfo.route) {
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChageRoute} />
    case ROUTES.detail:
      return <NoteDetailPage noteId={routeInfo.noteId} onChangeRoute={handleChageRoute} />
    case ROUTES.create:
      return <NoteCreatePage newNoteId={newNoteId} onCreate={handleCreateNote} onChangeRoute={handleChageRoute} />
    case ROUTES.edit:
      return <NoteEditPage noteId={routeInfo.noteId} onChangeRoute={handleChageRoute} onEdit={handleEditNote} onDelete={handleDeleteNote} />
    default:
      return <div>404 Not Found</div>
  }
}

export default NoteApp