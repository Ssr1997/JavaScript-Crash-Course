const myObj = {
    js:"JavaScript",
    rb:"Ruby",
    cj:"Clojure",
    go:"Go"
}

for(const key in myObj){
    console.log(`${key} is shortcut for ${myObj[key]}`);
}

const programming = ["js","rb","c++","clojure"]
for(const key in programming){
    console.log(programming[key]);
}