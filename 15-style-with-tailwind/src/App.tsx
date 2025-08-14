import ChatCard from './components/ChatCard';
import Profile from './components/Profile';
import ProfileCard from './components/ProfileCard';
// import Playground from './components/Playground';
import '/src/styles/style.css';

function App() {
  return (
    <div>
      <h1 className='flex justify-center items-center bg-indigo-500 text-blue-50 px-4 py-2 mb-5'>Hello, Tailwind!</h1>
      {/* flex = display:flex, justify-center = justify-content:center, items-center = align-items:center */}
      {/* bg = background-color, text = color, p = padding (4px grid), mb = marginBottom, ... */}
      {/* <Playground /> */}
      <ChatCard />
      <hr className='my-5' />
      <ProfileCard />
      <hr className='my-5' />
      <Profile />
    </div>
  )
}
export default App