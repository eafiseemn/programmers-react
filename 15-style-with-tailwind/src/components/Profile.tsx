const data = [
  {id:1,src:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  {id:2,src:'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  {id:3,src:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'},
  {id:4,src:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  {id:5,src:'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
];

function Profile() {

  return (
    <div className='p-4 m-4 mt-0 bg-sky-50 rounded-lg dark:bg-indigo-900'>
      <div className="flex items-center space-x-2 text-base">
        <h2 className="font-semibold text-slate-800 dark:text-slate-200">Contributors</h2>
        <span className="bg-slate-300 dark:bg-slate-400 px-2 py-1 text-xs font-semibold text-slate-700 rounded-lg">204</span>
      </div>
      <div className="flex mt-3 -space-x-2 overflow-hidden p-2">
        {
          data.map(item => (
            <img className="inline-block size-12 rounded-full ring-2 ring-indigo-300 dark:ring-white shadow-xs" src={item.src} alt={`Profile-${item.id}`} key={item.id} />
          ))  
        }
      </div>
      <div className="group/card">
        <a href="#" className="text-blue-500 dark:text-blue-300 no-underline transition group-hover/card:translate-x-10 block">+ 198 others</a>
      </div>
    </div>
  )
}
export default Profile