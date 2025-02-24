import React from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Play from '../Play/Play';
import Page from '../Page/Page';
import AddAWord from '../AddAWord/AddAWord';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <Page>
              <Play />
            </Page>
          }/>
          <Route path="/add-word" element={
            <Page>
              <AddAWord />
            </Page>
          }/>
        </Routes>
      </main>
    </Router>
  </ApolloProvider>
);

export default App;