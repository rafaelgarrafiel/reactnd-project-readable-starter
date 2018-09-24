import React, { Component } from 'react'
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { Elevation } from 'rmwc/Elevation';
import { connect } from 'react-redux'
import { getPosts } from '../actions/Post'
import Post from './Post'

class Feed extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    render(){
        const { posts, all } = this.props
        return(
            <Grid>
                <GridCell span="12">
                    <Elevation z="3">
                        <Typography
                            use="subtitle1"
                            tag="div"
                            style={{ padding: '0.5rem 1rem' }}
                            theme="text-secondary-on-background"
                        >
                            {this.props.title}
                        </Typography>
                    </Elevation>
                </GridCell>
                <GridCell span="12">
                    {all===false?
                        posts.filter(post=>post.category===this.props.title)
                        .map((post, key)=>(
                        <Post key={key} post={post} list={true}/>
                    ))
                    :posts.map((post, key)=>(
                        <Post key={key} post={post} list={true}/>
                    ))
                    }
                </GridCell>
            </Grid>
            )
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.Post.posts
})

const mapDispatchToProps = dispatch =>({
    getPosts: (data) => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)