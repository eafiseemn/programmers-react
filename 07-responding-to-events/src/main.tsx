import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import '@/styles/global.css';
import Learn from "./learn";


const container = document.getElementById('root');

if(!container) {
  throw new Error('문서에 #root 요소가 존재하지 않습니다.')
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <Learn />
  </StrictMode>
)