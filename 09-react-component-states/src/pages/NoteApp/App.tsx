import { useState } from "react"
import NoteListPage from "./pages/NoteListPage"
import { getNoteList } from "./api/getNote"
import { ROUTES } from "./routes";

function NoteApp() {

  const [ list ] = useState(() => getNoteList());
    // 그냥 getNoteList() 를 넣으면 컴포넌트가 렌더링 될때마다 호출함
    // 콜백으로 넣으면 useState가 매번 getNoteList()를 호출하는 게 아니라 컴포넌트 최초 마운트 시 딱 한 번만 호출됨 (리렌더 되더라도 다시 호출하지 않음)
  
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
  
  switch (routeInfo.route) {
    case ROUTES.list:
      return <NoteListPage list={list} onChangeRoute={handleChageRoute} />
    case ROUTES.detail:
      return <div>Detail Page</div>
    case ROUTES.create:
      return <div>Create Page</div>
    case ROUTES.edit:
      return <div>Edit Page</div>
    default:
      return <div>404 Not Found</div>
  }
}

export default NoteApp