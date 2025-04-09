import React from 'react'

function App() {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>Click here to see how a class creted</p>
        </div>
    )
}

export default App
class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

var myfavcar = new Car('Mercedes-Benz',2025);
document.querySelector('body').addEventListener('click', function(){
    document.writeln(myfavcar.name + ' ' + myfavcar.year);
})
