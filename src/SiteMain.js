import React, { Component } from 'react'
import backgroundImage from './is350_wallpaper.jpg'

class SiteMain extends Component {
  compStyle={
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '500px 500px',
  }
  render(){
    return(
      <main>
        {this.props.children}
      </main>
    )
  }
}

export default SiteMain
