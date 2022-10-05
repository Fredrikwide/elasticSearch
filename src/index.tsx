import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ElasticProvider } from './Context/ElasticContext';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ElasticProvider>
    <App />
  </ElasticProvider>
);