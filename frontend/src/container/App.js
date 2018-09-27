import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ThemeProvider } from 'rmwc/Theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage'
import CategoryPage from '../pages/CategoryPage'
import PostPage from '../pages/PostPage'
import CommentPage from '../pages/CommentPage'
import ErrorPage from '../pages/ErrorPage'
import PostDetailPage from '../pages/PostDetailPage'
import { history } from '../history'

class App extends Component {

    render() {
        return (
            <ThemeProvider options={{
                primary: 'blue'
            }}>
                <BrowserRouter>
                    <Switch history={history}>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/add_post" component={PostPage}/>
                        <Route exact path="/add_comment" component={CommentPage}/>
                        <Route exact path="/:category" component={CategoryPage}/>
                        <Route path="/:category/:id" exact component={PostDetailPage} />
                        <Route component={ErrorPage}/>
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
