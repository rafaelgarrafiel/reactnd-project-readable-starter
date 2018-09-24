import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCategories } from '../actions/Category'
import { sortAllPost } from '../actions/Post'
import { Switch } from 'rmwc/Switch';
import { Grid, GridCell } from 'rmwc/Grid';
import { TabBar, Tab } from 'rmwc/Tabs';


class FilterBar extends Component {

    //FIX: Trazer o state do store

    state = {
        checked: false
    }

    componentWillMount() {
        this.props.getCategories()
    }

    sortPosts = (evt) => {
        this.setState({checked: evt.target.checked})
        this.props.sortAllPost(evt.target.checked)
        // console.log(this.props)
    }

    render(){
        const { categories } = this.props

        // console.log(categories.length)
        return(
            <Grid>
                <GridCell span="8">
                    <TabBar 
                        activeTabIndex={this.state.activeTab}>
                        <Tab tag={Link} to={'/'}>
                                All Posts
                        </Tab>
                        {categories.map((category, key) => (
                            <Tab key={key} tag={Link} to={category.path}>
                                    {category.name}
                            </Tab>
                        ))}
                    </TabBar>
                </GridCell>
                <GridCell span="4">
                    <Switch 
                        label="Sort By Score"
                        checked={!!this.state.checked}
                        onChange={(evt) => (this.sortPosts(evt)) }/>
                </GridCell>
            </Grid>
            )
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.Category.categories
});

const mapDispatchToProps = dispatch =>({
    getCategories: (data) => dispatch(getCategories()),
    sortAllPost: (data) => dispatch(sortAllPost(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);