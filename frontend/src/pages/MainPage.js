import React, { Component } from 'react'
import { Grid, GridCell } from 'rmwc/Grid';
import NavBar from '../components/NavBar'
import FilterBar from '../components/FilterBar'
import Feed from '../components/Feed'
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/Category'

class MainPage extends Component {

    render(){

        return (
            <div>
                <NavBar add_post={true}></NavBar>
                <FilterBar/>
                <Grid>
                    <GridCell span="8">
                        <Feed title='Feed Principal'></Feed>
                    </GridCell>
                    <GridCell span="4">
                    </GridCell>
                </Grid>
            </div>
            )
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.Post.posts,
    categories: state.Category.categories
});

const mapDispatchToProps = dispatch =>({
    getCategories: (data) => dispatch(fetchCategories()),
})
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

