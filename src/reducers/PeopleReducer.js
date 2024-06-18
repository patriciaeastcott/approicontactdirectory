import people from './people.json';

const initialState = {
    people,
    detailView: false,
    personSelected: null,
    toUpdate: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                toUpdate: false,
                personSelected: action.selectId
            }

        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                toUpdate: false,
                personSelected: null
            }
        case 'UPDATE_PERSON':
            return {
                ...state,
                detailView: false,
                toUpdate: true
            }
        case 'ADD_PERSON': {
            const newPerson = {
                id: Math.max(...state.people.map(p => p.id)) + 1,
                ...action.person
            };
            return {
                ...state,
                people: [...state.people, newPerson],
                detailView: false,
                toUpdate: false,
                personSelected: null
            }
        }
        case 'UPDATE_PERSON_DATA': {
            const updatedPeople = state.people.map(p => 
                p.id === action.person.id ? action.person : p
            );
            return {
                ...state,
                people: updatedPeople,
                detailView: false,
                toUpdate: false,
                personSelected: null
            }
        }
        case 'DELETE_PERSON': {
            const filteredPeople = state.people.filter(p => p.id !== state.personSelected.id);
            return {
                ...state,
                people: filteredPeople,
                detailView: false,
                toUpdate: false,
                personSelected: null
            }
        }
        default:
            return state;
    }
}
