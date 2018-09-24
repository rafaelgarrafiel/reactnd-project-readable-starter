import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Grid, GridCell } from 'rmwc/Grid'
import { TextField } from 'rmwc/TextField'
import { connect } from 'react-redux'
// import { getCategories } from '../actions/Category'
import { createComment } from '../actions/Comment'
// import { Select } from 'rmwc/Select'
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

    componentDidMount() {
        // console.log(this.state)
        console.log(this.props)
        // await this.props.getCategories()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createComment(this.state)
        history.goBack()
        // history.push('/');
        // history.push("/home", { some: "state" })
    }

    handleChange = (val) => (evt) => { this.setState( {...this.state, [val]: evt.target.value} ) }

    render(){
        // const { categories } = this.props
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
    // categories: state.Category.categories
});

const mapDispatchToProps = dispatch =>({
    // getCategories: (data) => dispatch(getCategories()),
    createComment: (data) => dispatch(createComment(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);