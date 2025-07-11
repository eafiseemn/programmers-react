import notesData from '@/data/notes.json'
import usersData from '@/data/users.json'

export type Note = (typeof notesData)[number] & {
  expand?: {
    user: typeof usersData[number]
  }
}

/* 관계형 데이터 생성 */
export function getNoteList() {
  return notesData.map(note => {
    const user = usersData.find(user => user.id === note.userId);
    if(user) {
      (note as Note).expand = {user}
    }

    return note;
  })
}

/* 특정 id에 해당하는 note + userInfo만 출력 */
export function getNoteItem(noteId:number) {
  const notes = getNoteList();
  const note = notes.find(note => note.id === noteId);
  return note ? note : null;
}