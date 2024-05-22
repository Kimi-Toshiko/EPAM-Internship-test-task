function FilterById(jsonObject: [], id: number) {
    return jsonObject.filter(function(jsonObject) {
        return (jsonObject['id'] === id);})[0];
};

export default FilterById;