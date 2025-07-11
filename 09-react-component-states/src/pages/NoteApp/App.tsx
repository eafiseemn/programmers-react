import { useState } from "react"
import NoteListPage from "./pages/NoteListPage"
import { getNoteList } from "./api/getNote"

function NoteApp() {

  const [ list ] = useState(() => getNoteList());
    // 그냥 getNoteList() 를 넣으면 컴포넌트가 렌더링 될때마다 호출함
    // 콜백으로 넣으면 useState가 매번 getNoteList()를 호출하는 게 아니라 컴포넌트 최초 마운트 시 딱 한 번만 호출됨 (리렌더 되더라도 다시 호출하지 않음)

  return (
    <div>
      <NoteListPage list={list} />
    </div>
  )
}

export default NoteApp