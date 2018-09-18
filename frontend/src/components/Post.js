import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upPost, downPost } from '../actions/Post'
import {
    Card,
    CardPrimaryAction,
    CardAction,
    CardActions,
    CardActionButtons
} from 'rmwc/Card';

import { Typography } from 'rmwc/Typography';

class Post extends Component {
    upVote(key, up) {
        // console.log(post)
        let value = up + 1
        this.props.upPost({key: key, up: value})
    }

    downVote(key, down) {
        let value = down + 1
        this.props.downPost({key: key, down: value})
    }
    render(){
        const { posts } = this.props
        return(
            posts.map((post, key)=>(
                <Card key={key}>
                    <CardPrimaryAction>
                        <div style={{ padding: '0 1rem 1rem 1rem' }}>
                            <Typography use="headline6" tag="h2">
                                {post.title}
                            </Typography>
                            <Typography
                                use="subtitle2"
                                tag="h3"
                                theme="text-secondary-on-background"
                                style={{ marginTop: '-1rem' }}
                            >
                                Postado por {post.author}
                            </Typography>
                            <Typography use="body1" tag="div" theme="text-secondary-on-background">
                                {post.msg}
                            </Typography>
                        </div>
                    </CardPrimaryAction>
                    <CardActions>
                        <CardActionButtons>
                            <CardAction use="thumb_up_alt" onClick={() => this.upVote(key, post.up)}/>{post.up}
                            <CardAction use="thumb_down_alt" onClick={() => this.downVote(key, post.down)}/>{post.down}
                            <CardAction use="mode_comment"/>{post.comments.length} Comments
                        </CardActionButtons>
                    </CardActions>
                </Card>
                ))
            ) 
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.Post.posts
})

const mapDispatchToProps = dispatch =>({
    upPost: (data) => dispatch(upPost(data)),
    downPost: (data) => dispatch(downPost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)