import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <section className="mercury-wrap">
            <div className="admin-block">
                <Header/>
                <Main/>
            </div>

        </section>
    );
  }
}

export default App;
