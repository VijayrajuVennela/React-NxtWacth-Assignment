import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../SideBar'
import GamingBody from '../GamingBody'

import './index.css'

class Gaming extends Component {
  render() {
    return (
      <>
        <ul>
          <Header />
        </ul>
        <div className="homeMainDiv">
          <Sidebar />
          <div>
            <GamingBody />
          </div>
        </div>
      </>
    )
  }
}
export default Gaming
