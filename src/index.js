import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/common-styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Route path='/' component={Main} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
