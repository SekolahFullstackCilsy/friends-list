import React from 'react'
import { withRouter } from 'react-router-dom'

const HomePage = ({ history }) => {
  return (
    <div>
      <h1>This is homepage</h1>
      <button onClick={() => history.push('peoples')}>Go Peoples</button>
    </div>
  )
}

export default withRouter(HomePage)