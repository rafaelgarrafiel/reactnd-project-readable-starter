import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ThemeProvider } from 'rmwc/Theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage'
import PostPage from '../pages/PostPage'

class App extends Component {

  render() {
    return (
        <ThemeProvider options={{
          primary: 'blue'
        }}>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/add_post" render={({history})=>(
                    <PostPage 
                        history={history}
                    />
                )}/>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
    );
  }
}

const mapStateToProps = (state, props) => ({

});

export default connect(
  mapStateToProps
)(App)
