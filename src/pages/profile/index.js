import React from 'react'
import {connect} from 'react-redux'
import {setUser} from '../../redux/actions/user.action'
import {withRouter} from 'react-router-dom'

const Profile = (props) => {
  return (
    <div>
      <div>
        <span>Name: {props.users.name}</span>
      </div>
      <div>
        <span>Gender: {props.users.gender}</span>
      </div>
      <div>
        <span>Email: {props.users.email}</span>
      </div>
      <div>
        <p>Hobi:</p>
        {
          props.users.hobies ? props.users.hobies.map((hobi, key) => (
            <p key={key}>{hobi}</p>
          )): null
        }
      </div>

      <button onClick={() => {
        props.setProfile({name: 'Arnov', gender: 'L', email: 'test@email.com', hobies: ['makan', 'tidur', 'sedekah']})
      }}>Set Profile</button>
      <button onClick={() => {
        props.history.push('/product')
      }}>Goto Product</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setProfile: (payload) => dispatch(setUser(payload)),
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile)
)