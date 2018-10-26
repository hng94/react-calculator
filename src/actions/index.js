export const actionTypes = {
    number_clicked: "NUMBER_CLICKED",
    operation_clicked: "OPERATION_CLICKED",
    dot_clicked: "DOT_CLICKED",
    cal_clicked: "CALCULATE_CLICKED",
    clear_clicked: "CLEAR_CLICKED",
}

export const number_clicked = (value) => {
    return {
        type: actionTypes.number_clicked,
        value
    }
}

export const operation_clicked = (value) => {
    return {
        type: actionTypes.operation_clicked,
        value
    }
}

export const cal_clicked = (value) => {
    return {
        type: actionTypes.cal_clicked,
        value
    }
}

export const clear_clicked = (value) => {
    return {
        type: actionTypes.clear_clicked,
        value
    }
}

export const dot_clicked = (value) => {
    return {
        type: actionTypes.dot_clicked,
        value
    }
}