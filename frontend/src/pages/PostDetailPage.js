import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import Post from '../components/Post'
import FeedComment from '../components/FeedComment'
import ErrorPage from '../pages/ErrorPage'
import { editPost, getPostId, getPosts } from '../actions/Post'

class PostDetailPage extends Component {

    componentDidMount() {
        // this.props.getPostId(this.props.match.params.id)
        this.props.getPosts()
    }

    render(){
        const { post } = this.props
        console.log(this.props)
        return(
            <div>
                {post ?
                    <div>
                        <NavBar></NavBar>
                        <Post post={post} list={false}/>
                        <FeedComment post={post}/>
                    </div>
                :<ErrorPage />}
            </div>
            )
    }
}

const mapStateToProps = ({ Post }, props) => ({
    posts: Post,
    post: Post.posts.find(post => post.id === props.match.params.id)
});

const mapDispatchToProps = dispatch =>({
    getPosts: (data) => dispatch(getPosts()),
    getPostId: (data) => dispatch(getPostId(data)),
    editPost: (data) => dispatch(editPost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage);