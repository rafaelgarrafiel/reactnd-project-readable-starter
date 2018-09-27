import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Grid, GridCell } from 'rmwc/Grid'
import { TextField } from 'rmwc/TextField'
import { connect } from 'react-redux'
import { createComment } from '../actions/Comment'
import { Button } from 'rmwc/Button'
import { history } from '../history'
const uuidv1 = require('uuid/v1');

class CommentPage extends Component {

    state = {
        id: uuidv1(),
        body: "",
        author: "",
        parentId: this.props.history.location.state.id,
        timestamp: new Date().getTime()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createComment(this.state)
        history.goBack()
    }

    handleChange = (val) => (evt) => { this.setState( {...this.state, [val]: evt.target.value} ) }

    render(){
        return(
            <div>
                <NavBar></NavBar>
                <form onSubmit={this.handleSubmit}>
                    <Grid>
                        <GridCell span="6">
                            <TextField label="Name" fullwidth onChange={this.handleChange('author')}/>
                        </GridCell>
                        <GridCell span="12">
                            <TextField textarea fullwidth label="Message..." rows="8" onChange={this.handleChange('body')}/>
                        </GridCell>
                        <GridCell span="6">
                              <Button raised>Salvar</Button>
                        </GridCell>
                    </Grid>
                </form>
            </div>
            )
    }
}

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch =>({
    createComment: (data) => dispatch(createComment(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);