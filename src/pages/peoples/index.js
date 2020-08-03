import React, { useEffect } from 'react'
import PeopleCard from '../../components/people-card'
import { getAllPeople } from '../../store/actions'
import { connect } from 'react-redux'

const PeoplesPage = ({ peoples, getAllPeople }) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getAllPeople()
  }, [])

  return (
    <div>
      {
        peoples.length ? peoples.map((people, key) => {
          console.log(people)
          return <PeopleCard key={key} people={people} />
        }) : null
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    peoples: state.peopleReducer.peoples
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPeople: () => dispatch(getAllPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplesPage)