import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { Grid, GridCell } from 'rmwc/Grid'
import { TextField } from 'rmwc/TextField'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/Category'
import { addPost } from '../actions/Post'
import { Select } from 'rmwc/Select'
import { Button } from 'rmwc/Button'

class PostPage extends Component {

    state = {
        author: "",
        category: "",
        title: "", 
        msg: ""
    }

    async componentDidMount() {
        await this.props.fetchCategories()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state)
        this.props.history.push('/');
        // }
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
                            <TextField textarea fullwidth label="Message..." rows="8" onChange={this.handleChange('msg')}/>
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
    fetchCategories: (data) => dispatch(fetchCategories()),
    addPost: (data) => dispatch(addPost(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);