const BtnDelete = (array, elementId) => {
    return array.filter(element => elementId !== element._id)
}

export default BtnDelete