/* eslint-disable react/react-in-jsx-scope */

/* -------------------------------------------------------------------------- */
/*                           Vite Manual Scaffolding                          */
/* -------------------------------------------------------------------------- */

import { createRoot } from 'react-dom/client'
import Main from '@/components/Main';


const container = document.getElementById('app');

if (container) {
  // Render
  createRoot(container).render(<Main></Main>)
} else {
  console.warn("문서에 #app 요소가 존재하지 않습니다.")
}