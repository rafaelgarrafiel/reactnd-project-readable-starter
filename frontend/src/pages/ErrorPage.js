import React, { Component } from 'react'
import { Grid, GridCell } from 'rmwc/Grid';
// import NavBar from '../components/NavBar'
import { connect } from 'react-redux';

class ErrorPage extends Component {

    render(){
        return (
            <div>
                <Grid>
                    <GridCell span="4">
                    </GridCell>
                    <GridCell span="4">
                        <div><h1>Error</h1></div>
                    </GridCell>
                    <GridCell span="4">
                    </GridCell>
                </Grid>
            </div>
            )
    }
}

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch =>({
})
export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);

