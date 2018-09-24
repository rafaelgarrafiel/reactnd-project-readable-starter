import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import FeedComment from '../components/FeedComment'
import { editPost, getPostId } from '../actions/Post'

class PostDetailPage extends Component {

    componentWillMount() {
        this.props.getPostId(this.props.match.params.id)
    }

    render(){
        const { post } = this.props
        return(
            <div>
                <NavBar></NavBar>
                <div>
                    {post ?
                        <div>
                        <Post post={post} list={false}/>
                        <FeedComment post={post}/>
                        </div>
                    :null}
                </div>
            </div>
            )
    }
}

const mapStateToProps = (state, props) => ({
    post: state.Post.post
});

const mapDispatchToProps = dispatch =>({
    getPostId: (data) => dispatch(getPostId(data)),
    editPost: (data) => dispatch(editPost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);