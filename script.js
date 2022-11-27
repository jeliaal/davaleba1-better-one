function result() {
    let uName = document.getElementById("name-el").value
    let uAge = document.getElementById("age-el").value
    let uMark = document.getElementById("mark-el").value
    let uModel = document.getElementById("model-el").value
    let uYear = document.getElementById("date-el").value

    let person = {
        name: uName,
        age: uAge,
    }
    let car = {
        make: uMark,
        model: uModel,
        year: uYear
    }

    function Pers(name, age) {
        this.name = person.name
        this.age = person.age
    }

    function Car(mark, model, year) {
        this.mark = car.make
        this.model = car.model
        this.year = car.year
    }

    let _User = new Pers(person.name, person.age)
    let _UserCar = new Car(car.make, car.model, car.year)
    if (_User.name.length > 0 && _User.age.length > 0) {
        document.getElementById("TEXTpers").innerHTML = `Your name is ${_User.name}, you are ${_User.age}`
    } else { alert("Fill all gaps about You") }
    if (_UserCar.mark.length > 0 && _UserCar.model.length > 0 && _UserCar.year.length > 0) {
        document.getElementById("TEXTcar").innerHTML = `You drive ${_UserCar.mark} model ${_UserCar.model}, released in ${_UserCar.year}`
    }
}