import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon} from 'rmwc';
import { addCategory } from '../actions/Category'
import { connect } from 'react-redux'

class NavBar extends Component {

    render(){
        const { add_post } = this.props
        return (
            <Toolbar>
                {add_post===true
                
                    ?<ToolbarRow>
                        <ToolbarSection alignStart>
                            <ToolbarTitle>Readable - Projeto Udacity</ToolbarTitle>
                        </ToolbarSection>
                        <ToolbarSection alignEnd>
                            <Link to="/add_post" style={{ textDecoration: 'none' }}>
                                <ToolbarIcon
                                  use="add_circle"
                                />
                            </Link>
                        </ToolbarSection>
                    </ToolbarRow>
                    :<ToolbarRow>
                        <ToolbarSection alignStart>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <ToolbarIcon
                                  use="arrow_back"
                                />
                            </Link>
                        </ToolbarSection>
                        <ToolbarSection alignEnd>
                            <ToolbarTitle>Readable - Projeto Udacity</ToolbarTitle>
                        </ToolbarSection>
                    </ToolbarRow>
                    }
                    
                
            </Toolbar>
            )
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.Post.posts,
    categories: state.Category.categories
});

const mapDispatchToProps = dispatch =>({
    addCategories: (data) => dispatch(addCategory(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);