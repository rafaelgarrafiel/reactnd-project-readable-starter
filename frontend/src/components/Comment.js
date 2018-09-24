import React, { Component } from 'react'
import {
    CardPrimaryAction,
    CardAction,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from 'rmwc/Card';
import { SimpleMenu, MenuItem } from 'rmwc/Menu';
import { ListDivider } from 'rmwc/List';
import { Typography } from 'rmwc/Typography';
import { connect } from 'react-redux'
import { voteComment, editComment, deleteComment } from '../actions/Comment'
import { Grid, GridCell } from 'rmwc/Grid'
import { TextField } from 'rmwc/TextField'
import { Button } from 'rmwc/Button'

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: props.status,
            id: props.comment.id,
            body: props.comment.body
        };
    }

    vote(comment, vote) {
        // console.log(comment)
        // console.log(vote)
        this.props.voteComment({id: comment.id, option: vote})
    }

    edit(comment) {
        // console.log(comment)
        // console.log(this.state)
        this.setState({
            status:'edit',
            body: comment.body
        })
    }

    delete(comment) {
        this.props.deleteComment(comment.id)
        // console.log(post)
        // history.push('/');
    }

    handleChange = (val) => (evt) => { this.setState( {...this.state, [val]: evt.target.value} ) }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.status==='edit') {
            this.props.editComment({title:this.state.title, body:this.state.body, id:this.state.id })
        }
        this.setState({
            status:'view'
        })
    }

    render(){

        return(
            <div>
                {this.state.status === 'view' ?
                <div>
                <CardPrimaryAction>
                    <div style={{ padding: '1rem' }}>
                        <Typography
                                use="subtitle2"
                                tag="h3"
                                theme="text-secondary-on-background"
                                style={{ marginTop: '-1rem' }}
                            >
                                Posted for {this.props.comment.author}
                        </Typography>
                        <Typography use="body1" tag="p" theme="text-secondary-on-background">
                            {this.props.comment.body}
                        </Typography>
                    </div>
                </CardPrimaryAction>
                <CardActions >
                    <CardActionButtons>
                        <CardAction use="thumb_up_alt" onClick={() => this.vote(this.props.comment, 'upVote')}/>
                        <CardAction use="thumb_down_alt" onClick={() => this.vote(this.props.comment, 'downVote')}/>
                        <CardAction use="flag"/>  {this.props.comment.voteScore} Score
                    </CardActionButtons>
                    <CardActionIcons>
                        <SimpleMenu
                          handle={ <CardAction use="more_vert" /> }
                        >
                          <MenuItem onClick={() => this.edit(this.props.comment)}>Edit</MenuItem>
                          <MenuItem onClick={() => this.delete(this.props.comment)}>Delete</MenuItem>
                        </SimpleMenu>
                    </CardActionIcons>
                </CardActions>
                </div>

                : <form onSubmit={this.handleSubmit}>
                    <Grid>
                        <GridCell span="12">
                            <TextField textarea fullwidth value={this.state.body} label="Message..." rows="8" onChange={this.handleChange('body')}/>
                        </GridCell>
                        <GridCell span="6">     
                              <Button raised>Salvar</Button>
                        </GridCell>
                    </Grid>
                </form>}
                <ListDivider />
            </div>
            )
    }
}

const mapStateToProps = (state, props) => ({
    status: state.Comment.status,
    // state: state
})

const mapDispatchToProps = dispatch =>({
    deleteComment: (data) => dispatch(deleteComment(data)),
    voteComment: (data) => dispatch(voteComment(data)),
    editComment: (data) => dispatch(editComment(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment)