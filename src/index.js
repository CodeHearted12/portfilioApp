import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import References from './components/References'
import BaseLayout from './components/BaseLayout'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import About from './components/About'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
      <Switch>
          <Route exact path='/' component={App} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/references' component={References} />
      </Switch>
        </BaseLayout>
          </BrowserRouter>
           ,document.getElementById('root'))
          registerServiceWorker()



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
