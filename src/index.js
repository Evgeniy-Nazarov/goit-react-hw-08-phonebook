import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'modern-normalize';
import './index.css';
import { persistor, store } from 'redux/store/store';
import { Container } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <Suspense fallback={<div>Loading...</div>}>
            <Container maxWidth="1280">
              <App sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
              </Container>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
