let jsonobj={
    name:"harry",
    channel:"youtube",
    friend:"Rohan",
    food:"bhindi"
}
console.log(jsonobj);

let myjsonstr=JSON.stringify(jsonobj);
console.log(myjsonstr)

myksonstr=myjsonstr.replace("harry", "larry");
console.log(myjsonstr);

newjsonobj=JSON.parse(myjsonstr);
console.log(newjsonobj)