import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { Layout } from 'antd';
import { createAppStore } from './store';
import { LeftMenu } from './components/leftMenu';
import AppHeader from './components/header';
import { mergeReducers } from './reducers';
import { mergeSagas } from './sagas';
import './index.css';
import { AppFooter } from './components/footer';
import RouterManager from "./router";

const { store } = createAppStore(mergeReducers(), mergeSagas());

/**
 * App Template Structure and initial Redux, Sagas configuration.
 */
class App extends React.Component {

  componentDidCatch(error, errorInfo) {
    // TODO: manage app Errors
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout style={{ minHeight: '100vh' }}>
            <LeftMenu/>
            <Layout>
              <AppHeader/>
              <RouterManager/>
              <AppFooter/>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
