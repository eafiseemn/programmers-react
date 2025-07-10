import '@/styles/main.css';
import '@/programming/imperative-step1';
import '@/programming/declarative-step1';
import '@/programming/imperative';
import '@/programming/declarative';
import { createRoot } from 'react-dom/client';
import Form from '@/programming/declarative.tsx';

const root = document.getElementById('root');
if(root) {
  createRoot(root).render(
    <Form></Form>
  )
}