import React from 'react';
import './Banner.css'
export default class Banner extends React.Component{
render(){
    return(
        <div id='bannerParent'>
                <h3 className='banner whitePlayer'>White Total: {this.props.whiteTotal}</h3>
                <h3 className='banner total'>Spaces Left: {this.props.spaceTotal}</h3>
                <h3 className='banner blackPlayer'>Black Total: {this.props.blackTotal}</h3>
        </div>
    )
}
}
    