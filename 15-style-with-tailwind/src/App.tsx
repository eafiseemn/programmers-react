import Button_clsx from './components/Button_clsx';
import Button_tw from './components/Button_tw';
import Button_twMerge from './components/Button_twMerge';
import ChatCard from './components/ChatCard';
import Profile from './components/Profile';
import ProfileCard from './components/ProfileCard';
// import Playground from './components/Playground';
import '/src/styles/style.css';

function App() {
  return (
    <div className='mb-4'>
      <h1 className='flex justify-center items-center bg-indigo-500 text-blue-50 px-4 py-2 mb-5'>Hello, Tailwind!</h1>
      {/* flex = display:flex, justify-center = justify-content:center, items-center = align-items:center */}
      {/* bg = background-color, text = color, p = padding (4px grid), mb = marginBottom, ... */}
      {/* <Playground /> */}
      <ChatCard />
      <hr className='divider' />
      <ProfileCard />
      <hr className='divider' />
      <Profile />
      <hr className='divider' />
      <Button_twMerge className='bg-red-400' type='primary'>Call To Action</Button_twMerge>
      <hr className='divider' />
      <Button_clsx size='sm'>Call To Action</Button_clsx>
      <hr className='divider' />
      <Button_tw size='sm' disabled className='bg-emerald-400'>Call To Action</Button_tw>
    </div>
  )
}
export default App