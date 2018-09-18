import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/Category'
import { Select } from 'rmwc/Select';
import { Grid, GridCell } from 'rmwc/Grid';


class FilterBar extends Component {

    state = {
        value: ''
    }

    async componentDidMount() {
        await this.props.getCategories()
    }

    render(){
        const { categories } = this.props
        return(
            <Grid>
                <GridCell span="1">
                </GridCell>
                <GridCell span="10">
                    <Select
                      label="Category"
                      placeholder=""
                      options={categories.map(category=>category.name)}
                    />
                </GridCell>
                <GridCell span="1">
                </GridCell>
            </Grid>
            )
    }
}

const mapStateToProps = (state, props) => ({
    categories: state.Category.categories
});

const mapDispatchToProps = dispatch =>({
    getCategories: (data) => dispatch(fetchCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);