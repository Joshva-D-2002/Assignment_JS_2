// 1.
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// Console this star pattern

for(let i=1;i<=5;i++){
    let row = '';
    for(let j = i; j <= 5; j++){
        row += ' ';
    }
    for(let k = 1; k <= i; k++){
        row += '* ';
    }
    console.log(row);
}

// 2. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and 
// console each item by using switch statement.

const arr1= ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];

arr1.map((element) =>{
    switch(element){
        default:
            console.log(element);
            break;
    }
});


// 3. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

const arr2 = [1, 2, 3, 4, 5, 6];

function del(){
    return function(index){
        arr2.splice(index,1);
    }
}

let basedOnIndex = del();

basedOnIndex(5);
basedOnIndex(2);

// 4. Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)

class Iteration{
    constructor(array){
        array.forEach(element => {
            console.log(element);
        });
    }
};

new Iteration(arr2);

// 5. Create a self-invoking function to console you name.

(function(name){
    console.log(`My Name is ${name}`)
})("Joshva D");
