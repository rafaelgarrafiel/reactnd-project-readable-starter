import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Grid, GridCell } from 'rmwc/Grid'
import { TextField } from 'rmwc/TextField'
import { connect } from 'react-redux'
import { getCategories } from '../actions/Category'
import { createPost } from '../actions/Post'
import { Select } from 'rmwc/Select'
import { Button } from 'rmwc/Button'
import { history } from '../history'
const uuidv1 = require('uuid/v1');

class PostPage extends Component {

    state = {
        id: uuidv1(),
        title: "", 
        body: "",
        author: "",
        category: "",
        timestamp: new Date().getTime()
    }

    async componentDidMount() {
        await this.props.getCategories()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPost(this.state)
        history.push('/');
    }

    handleChange = (val) => (evt) => { this.setState( {...this.state, [val]: evt.target.value} ) }

    render(){
        const { categories } = this.props
        return(
            <div>
                <NavBar></NavBar>
                <form onSubmit={this.handleSubmit}>
                    <Grid>
                        <GridCell span="12">
                            <TextField label="Title" fullwidth onChange={this.handleChange('title')}/>
                        </GridCell>
                        <GridCell span="6">
                            <TextField label="Name" fullwidth onChange={this.handleChange('author')}/>
                        </GridCell>
                        <GridCell span="6">
                            <Select
                              label="Category"
                              placeholder=""
                              options={categories.map(category=>category.name)}
                              onChange={this.handleChange('category')}
                            />
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
    categories: state.Category.categories
});

const mapDispatchToProps = dispatch =>({
    getCategories: (data) => dispatch(getCategories()),
    createPost: (data) => dispatch(createPost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);