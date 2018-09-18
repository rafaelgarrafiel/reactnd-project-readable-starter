import React, { Component } from 'react'
import { Grid, GridCell } from 'rmwc/Grid';
import Post from './Post'
import { Typography } from 'rmwc/Typography';
import { Elevation } from 'rmwc/Elevation';
import { connect } from 'react-redux'

class Feed extends Component {
    render(){
        return(
            <Grid>
                <GridCell span="12">
                    <Elevation z="3">
                        <Typography
                            use="subtitle1"
                            tag="div"
                            style={{ padding: '0.5rem 1rem' }}
                            theme="text-secondary-on-background"
                        >
                            {this.props.title}
                        </Typography>
                    </Elevation>
                </GridCell>
                <GridCell span="12">
                    <Post/>
                </GridCell>
            </Grid>
            )
    }
}

const mapStateToProps = (state, props) => ({

})

export default connect(mapStateToProps)(Feed)