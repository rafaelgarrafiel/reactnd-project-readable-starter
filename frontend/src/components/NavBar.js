import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Toolbar, ToolbarRow, ToolbarSection, ToolbarTitle, ToolbarIcon} from 'rmwc';
import { connect } from 'react-redux'
import FilterBar from './FilterBar'

class NavBar extends Component {

    render(){
        const { add_post } = this.props
        return (
            <div>
                {add_post===true
                    ?<Toolbar>
                        <ToolbarRow style={{ backgroundColor: '#fff', opacity:1 }}>
                            <ToolbarSection alignStart>
                                <ToolbarTitle style={{ color: '#000' }}>Readable - Projeto Udacity</ToolbarTitle>
                            </ToolbarSection>
                            <ToolbarSection alignEnd>
                                <Link to="/add_post" style={{ textDecoration: 'none' }}>
                                    <ToolbarIcon
                                        style={{ color: '#000' }}
                                        use="add_circle"
                                    />
                                </Link>
                            </ToolbarSection>
                        </ToolbarRow>
                        <ToolbarRow style={{ backgroundColor: '#fff', opacity:1 }}>
                            <ToolbarSection alignStart>
                                <FilterBar/>
                            </ToolbarSection>
                        </ToolbarRow>
                    </Toolbar>
                    :<Toolbar>
                        <ToolbarRow style={{ backgroundColor: '#fff', opacity:1 }}>
                            <ToolbarSection alignStart>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <ToolbarIcon
                                        style={{ color: '#000' }}
                                        use="arrow_back"
                                    />
                                </Link>
                                <ToolbarTitle style={{ color: '#000' }}>Readable - Projeto Udacity</ToolbarTitle>
                            </ToolbarSection>
                        </ToolbarRow>
                    </Toolbar>
                    }
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
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);