// add code snippets from README
let state 

function reducer(state = {count: 0}, action) {
    switch(action.type) {
        case 'counter/increment':
            return {count: state.count + 1}
        default:
            return state
    }
}

function render() {
    container = document.getElementById('container')
    container.textContent = state.count
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

const button = document.getElementById('button')

button.addEventListener(() => {
    dispatch({type: 'counter/increment'})
})

dispatch({type: '@@INT'})