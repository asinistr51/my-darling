import React, { useState, Fragment } from 'react';
import { Navbar } from './components/Navbar'
import { Main } from './components/Main'
import { Contacts } from './components/Contacts';
import { Menu } from './components/Menu'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Media from 'react-media';
import video from './components/PorkVid.mp4'





function App() {



  return (

    <>
        <div className="App">
          <BrowserRouter>
            <Navbar  />
            <Media queries={{
        small: "(max-width: 599px)",
        large: "(min-width: 600px)"
      }}>
            {matches => (
              <Fragment>
                {matches.small && <><div>
                  <div style={{
                    height: '100%',
                    width: '100%',
                    position: 'fixed',
                    backgroundColor: 'black',
                    
                    zIndex: '-1',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top: '0'
                  }}></div>
                  <div style={{
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute', width: '100%', height: '100%', zIndex: '-2' }}>

                    </div>
                    </div></div></>}
                    {matches.large && <div>
                  <div style={{
                    height: '100%',
                    width: '100%',
                    position: 'fixed',
                    backgroundColor: 'black',
                    opacity: '0.9',
                    zIndex: '-1',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top: '0'
                  }}></div>
                  <div style={{
                    position: 'relative',width: '100%', height: '100%'
                  }}>
                    <video autoPlay loop muted style={{
                      position: 'fixed',  width: '125%', zIndex: '-2'
                    }}alt=''>
                      <source src={video} type="video/mp4"></source>
                    </video></div></div>}

            <Switch>
              <Route exact path="/">
                <Main  />
              </Route>
              <Route path="/menu">
                <Menu />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
            </Switch>

            </Fragment>)}
            </Media>
          </BrowserRouter>
        </div>
    </>
  );
}

export default App;
