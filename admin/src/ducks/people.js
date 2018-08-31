import { appName } from '../config'
import { Record, List } from 'immutable'
import { put, call, takeEvery } from 'redux-saga/effects'
import { reset } from 'redux-form'
import { createSelector } from 'reselect'
import { generateId } from './utils'

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PERSON_REQUEST = `${prefix}/ADD_PERSON_REQUEST`
export const ADD_PERSON_SUCCESS = `${prefix}/ADD_PERSON_SUCCESS`

/**
 * Reducer
 * */
const ReducerState = Record({
  entities: new List([])
})

const PersonRecord = Record({
  id: null,
  firstName: null,
  lastName: null,
  email: null
})

export default function reducer(state = new ReducerState(), action) {
  const { type, payload } = action

  switch (type) {
    case ADD_PERSON_SUCCESS:
      return state.update('entities', (entities) =>
        entities.push(new PersonRecord(payload.person))
      )

    default:
      return state
  }
}
/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const peopleSelector = createSelector(stateSelector, (state) =>
  state.entities.valueSeq().toArray()
)

/**
 * Action Creators
 * */
export const addPerson = (person) => ({
  type: ADD_PERSON_REQUEST,
  payload: { person }
})

/*
export function addPerson(person) {
  return (dispatch) => {
    dispatch({
      type: ADD_PERSON,
      payload: {
        person: { id: Date.now(), ...person }
      }
    })

    dispatch(reset('person'))
  }
}
*/

/**
 * Sagas
 **/

export function* addPersonSaga(action) {
  const id = yield call(generateId)

  yield put({
    type: ADD_PERSON_SUCCESS,
    payload: {
      person: { id, ...action.payload.person }
    }
  })

  yield put(reset('person'))
}

export function* saga() {
  yield takeEvery(ADD_PERSON_REQUEST, addPersonSaga)
}
