import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Body from './components/body/Body'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App;
