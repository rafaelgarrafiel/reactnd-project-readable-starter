import React, { Component } from 'react'
import { Grid, GridCell } from 'rmwc/Grid';
import NavBar from '../components/NavBar'
import Feed from '../components/Feed'
import ErrorPage from '../pages/ErrorPage'
import { connect } from 'react-redux';

class CategoryPage extends Component {

    render(){

        const { categories, match } = this.props
        const category = categories.find( category => category.path === match.params.category )
        return (
            <div>
                {category ?
                    <div>
                        <NavBar add_post={true}></NavBar>
                        <Grid>
                            <GridCell span="8">
                                <Feed title={category?category.name:''} all={false}></Feed>
                            </GridCell>
                            <GridCell span="4">
                            </GridCell>
                        </Grid>
                    </div>
                :<ErrorPage />}
            </div>
            )
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.Post.posts,
    categories: state.Category.categories
});

const mapDispatchToProps = dispatch =>({
})
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);

