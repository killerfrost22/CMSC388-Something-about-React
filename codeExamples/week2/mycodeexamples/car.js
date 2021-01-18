function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}
let audi = new Car('test', 'test2', '2000')

Car.prototype.getMileage = function(){return 1234}

audi.toString = function(){ return 'I am an audi'}_ 

class Book{
    constructor(title, author){
        this.title = title
        this.author = author
        this.returnAuthor = () => this.author // this.returnAuthor = () => {this.author} it didnt work here because we need to remove the braket to be a prototype
                                                //it is an object title is a type

    }
    returnTitle(){
        return this.title
    }
}

gatsby = new Book('The great Gatsby', 'someone')
gatsby.returnAuthor
gatsby.returnTitle


function higher(num, cb){
    console.log(num)
    cb()
    // setTimeout(cb,2000)
}

function callback() {
    console.log('printing from callback')
}

higher (23, callback)


function foo(num1, num2, num3){
    return num1 + num2 + num3
}

let data = [1, 2, 3]

foo(...data)

function bar(num1, num2 , ...nums){
    //do something
    //nums here is an array
}

bar(1,2,3,4,5)
bar(1,2,3)
bar(1,2)

bar(1,2,3,...data)

function bar(num1, num2){
    //do something
    //nums here is an array
    return num1 + num2
}
bar(1,2,3) // is 3
bar(1) //return naN


let test = [1,2]

test