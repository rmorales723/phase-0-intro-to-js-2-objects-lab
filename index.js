const employee = {
    name: "Rob",
    streetAddress: "270 Marin Blvd"
  };

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key] : value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;
     return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign({}, employee);
    delete newObject [key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newObject = Object.assign(employee);
    delete newObject [key];
    return newObject;
}