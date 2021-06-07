import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should change to opposite value', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(true);
})

test('await error ', () => {
    const state: StateType = {
        collapsed: false
    }
   expect(()=> {reducer(state, {type: "fsdf"})}).toThrowError()
})