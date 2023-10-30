// For the given JSON iterate over all for loops (for, for in, for of, forEach)

var a=[{"name":"manoj","age":"20"},

{"name":"subramani","age":"20"}
]


//Iterating using for loop

for(var i=0;i<a.length;i++){
    console.log(`Name: ${a[i].name} Age:${a[i].age}`)
}

//Iterating using for in
console.log("I am done using for in");
for(var ans in a){
    console.log(ans);
    console.log(`Name: ${a[ans].name} Age:${a[ans].age}`)
}

//Iterating using for of

console.log("I am done using for of");
for(var ans of a){
    console.log(ans.name)
}
//Iterating using foreach
console.log("I am done using foreach");
a.forEach((element)=>{
    console.log(element.name,element.age)
})

console.log("My own resume data in json format");
var data=[{
    "fname":"Manoj",
    "lname":"Kumar M",
    "email":"manojkumarwork01@gmail.com",
    "phone":"9087397440",
    "project":["blue star cable","Sai enghineering works","Lum Taxi"],
    "internship":"Codsoft 1 month",
    "skills":["Java","C","C++","MERN Full stack","pupeeter"]
}]
for(var key of data){
    for(var value in key)
    console.log(key[value]);
}