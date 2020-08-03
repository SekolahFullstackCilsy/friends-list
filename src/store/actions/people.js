import * as actionTypes from './actionTypes'

export const getAllPeople = () => {
  return {
    type: actionTypes.GET_PEOPLES,
    payload: [
      {
        name: 'Saefulloh Maslul',
        photo: 'https://robohash.org/1?set=set2&size=180x180'
      },
      {
        name: 'Taufan Ajie Samudro',
        photo: 'https://robohash.org/2?set=set2&size=180x180'
      },
      {
        name: 'Arnov',
        photo: 'https://robohash.org/3?set=set2&size=180x180'
      },
      {
        name: 'Bagus Satyawan',
        photo: 'https://robohash.org/4?set=set2&size=180x180'
      }
    ]
  }
}