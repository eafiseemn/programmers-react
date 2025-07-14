import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
// import Parent from './components/ref/Parent';
import Parent from './components/effectAndRef/Parent';
// import Effect from './components/effect/Effect';


const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
      // <Effect />
    <StrictMode>
      <Parent />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
