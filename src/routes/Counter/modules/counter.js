// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const SELECT_CANDIDATE = 'SELECT_CANDIDATE'
export const SELECT_VOTER = 'SELECT_VOTER'
export const VOTE_INCREMENT = 'VOTE_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  candidates: {
    'Bullet Train': {votes: 0},
    'FLACK': {votes: 0},
    'Wild Cats': {votes: 0},
    'Solar Mules': {votes: 0},
    'Autechre': {votes: 0},
    'Money Fire': {votes: 0},
    'Wonder Twins': {votes: 0},
    'Jerrys Team': {votes: 0},
    'Haos Team': {votes: 0},
  },

  voters: {
    'Niles': {voted: false},
    'Chris': {voted: false},
    'Jim': {voted: false},
    'Amanda': {voted: false},
    'Kevin': {voted: false},
    'Chappy': {voted: false},
    'Egan': {voted: false},
    'Jerry': {voted: false},
    'Alex': {voted: false},
    'Krishan': {voted: false},
    'Chuck': {voted: false},
    'Paul': {voted: false},
    'Richard': {voted: false},
    'Elise': {voted: false},
    'Todd': {voted: false},
    'Scott': {voted: false},
    'Taylor': {voted: false},
    'Aimee': {voted: false},
    'Lance': {voted: false},
    'Hao': {voted: false},
  }
}

function candidates(state = initialState, action) {
  switch (action.type) {
    default:
      return state.candidates;
  }
}

function voters(state = initialState, action) {
  switch(action.type) {
    default:
      return state.voters;
  }
}

export default {candidates, voters};
