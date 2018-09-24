import React, { Component } from 'react'
import { Grid, GridCell } from 'rmwc/Grid';
import NavBar from '../components/NavBar'
import Feed from '../components/Feed'
import { connect } from 'react-redux';

class MainPage extends Component {

    render(){
        return (
            <div>
                <NavBar add_post={true}></NavBar>
                <Grid>
                    <GridCell span="8">
                        <Feed title='Feed Principal'></Feed>
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
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

