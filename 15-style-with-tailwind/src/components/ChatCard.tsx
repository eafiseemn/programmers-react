function ChatCard() {
  return (
    <div className="flex justify-center items-center gap-4 
    max-w-max mx-auto px-7 py-5 rounded-xl
    outline-indigo-200/30 outline-2 bg-white
    dark:bg-slate-800 dark:outline-indigo-200/60">
      <img className="w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="vite logo" />
      <div>
        <strong className="text-lg font-bold dark:text-sky-50">Chit-Chat</strong>
        <p className="text-gray-500 text-sm dark:text-gray-400">You Have a New Message!</p>
      </div>
    </div>
  )
}
export default ChatCard