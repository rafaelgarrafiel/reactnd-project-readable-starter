import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost, editPost, deletePost } from '../actions/Post'
import {
    Card,
    CardPrimaryAction,
    CardAction,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from 'rmwc/Card';
import { SimpleMenu, MenuItem } from 'rmwc/Menu';
import { Grid, GridCell } from 'rmwc/Grid'
import { TextField } from 'rmwc/TextField'
import { Button } from 'rmwc/Button'
import { Typography } from 'rmwc/Typography';
import { history } from '../history'

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: props.status,
            id: props.post.id,
            title: props.post.title,
            body: props.post.body
        };
    }

    vote(post, vote) {
        this.props.votePost({id: post.id, option: vote})
    }

    view(post) {
        history.push(`/${post.category}/${post.id}`);
    }

    edit(post) {
        this.setState({
            status:'edit',
            title: post.title,
            body: post.body
        })
    }

    delete(post) {
        this.props.deletePost(post.id)
        history.push('/');
    }

    createComment(post){
        history.push("/add_comment", post);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.status==='edit') {
            this.props.editPost({title:this.state.title, body:this.state.body, id:this.state.id })
        } else {
            this.props.createPost(this.state)
        }
        this.setState({
            status:'view'
        })
    }

    handleChange = (val) => (evt) => { this.setState( {...this.state, [val]: evt.target.value} ) }

    render(){
        const { post, list } = this.props
        const { status } = this.state
        return(
            <div>
            {status === 'view' ?
                <Card style={{marginTop:'20px'}}>
                    <CardPrimaryAction onClick={() => this.view(post)}>
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
                                Posted for {post.author}
                            </Typography>
                            <Typography use="body1" tag="div" theme="text-secondary-on-background">
                                {post.body}
                            </Typography>
                        </div>
                    </CardPrimaryAction>
                    <CardActions >
                        <CardActionButtons>
                            <CardAction use="thumb_up_alt" onClick={() => this.vote(post, 'upVote')}/>
                            <CardAction use="thumb_down_alt" onClick={() => this.vote(post, 'downVote')}/>
                            <CardAction use="flag"/> {post.voteScore} Score
                        </CardActionButtons>
                        <CardActionIcons>
                            <CardAction use="mode_comment" onClick={() => this.createComment(post)}/> {post.commentCount} Comments
                            {!list?
                            <SimpleMenu
                              handle={ <CardAction use="more_vert" /> }
                            >
                              <MenuItem onClick={() => this.edit(post)}>Edit</MenuItem>
                              <MenuItem onClick={() => this.delete(post)}>Delete</MenuItem>
                            </SimpleMenu>
                            :null}
                        </CardActionIcons>
                    </CardActions>
                </Card>
                : <form onSubmit={this.handleSubmit}>
                    <Grid>
                        <GridCell span="12">
                            <TextField label="Title" fullwidth value={this.state.title} onChange={this.handleChange('title')}/>
                        </GridCell>
                        <GridCell span="12">
                            <TextField textarea fullwidth value={this.state.body} label="Message..." rows="8" onChange={this.handleChange('body')}/>
                        </GridCell>
                        <GridCell span="6">     
                              <Button raised>Salvar</Button>
                        </GridCell>
                    </Grid>
                </form>}
            </div>
                
            ) 
    }
}

const mapStateToProps = (state, props) => ({
    status: state.Post.status,
})

const mapDispatchToProps = dispatch =>({
    deletePost: (data) => dispatch(deletePost(data)),
    votePost: (data) => dispatch(votePost(data)),
    editPost: (data) => dispatch(editPost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)