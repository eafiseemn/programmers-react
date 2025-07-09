// import '@/learn/about-purity.ts';
// import '@/learn/about-side-effect.ts';
import '@/styles/main.css';

import AvatarListPage from "./pages/AvatarList"
import { avatarData } from './data/data';


function App() {
  return (
    <div>
      <AvatarListPage list={avatarData} />
    </div>
  )
}

export default App