import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

(window as any).$primaryLanguage = 'en';
(window as any).$secondaryLanguage = 'pl';
(window as any).$primaryLanguageIconId = 'primary-lang-icon';
(window as any).$secondaryLanguageIconId = 'secondary-lang-icon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
