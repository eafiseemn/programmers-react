import { createRoot } from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const container = document.getElementById('app');

if(!container) throw new Error('문서에 #app 요소가 존재하지 않습니다.');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// StrictMode : component의 순수성을 확인하기 위해 두 번씩 실행 (Additional Invocations)
// [1] mount -> unmount -> [2] mount
// Production 으로 build를 하면 사라짐
