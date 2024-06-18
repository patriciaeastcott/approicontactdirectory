export const selectPerson = (personObj) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: personObj, 
    };
};

export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};

export const addPerson = (person) => {
    return {
        type: 'ADD_PERSON',
        person
    };
};

export const deletePerson = () => {
    return {
        type: 'DELETE_PERSON',
    };
};

export const updatePerson = () => {
    return {
        type: 'UPDATE_PERSON',
    };
};

export const updatePersonData = (person) => {
    return {
        type: 'UPDATE_PERSON_DATA',
        person
    };
};

