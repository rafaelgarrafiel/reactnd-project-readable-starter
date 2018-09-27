import React, { Component } from 'react'
import { Grid, GridCell } from 'rmwc/Grid';
import { connect } from 'react-redux'
import { getPostComments } from '../actions/Comment'
import Comment from './Comment'

class FeedComment extends Component {

    componentDidMount() {
        this.props.getPostComments(this.props.post.id)
    }

    render(){
        const { comments } = this.props
        return(
            <Grid>
                <GridCell span="12">
                    {comments.map((comment, key)=>(
                        <Comment key={key} comment={comment}/>
                        ))}
                </GridCell>
            </Grid>
            )
    }
}

const mapStateToProps = (state, props) => ({
    comments: state.Comment.comments
})

const mapDispatchToProps = dispatch =>({
    getPostComments: (data) => dispatch(getPostComments(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedComment)