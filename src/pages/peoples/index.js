import React, { useEffect } from 'react'
import PeopleCard from '../../components/people-card'
import { getAllPeople } from '../../store/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const PeoplesPage = ({ users, getPeoples }) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getPeoples()
  }, [])

  return (
    <div>
      {
        users.length ? users.map((people, key) => {
          return <PeopleCard key={key} people={people} />
        }) : null
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.peopleReducer.peoples
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPeoples: () => dispatch(getAllPeople())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PeoplesPage))