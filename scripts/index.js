// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// helper

let read=(id)=>{
    return document.getElementById(id).value
 }
 let creat=(id)=>{
     return document.createElement(id);
 }
 let get=(id)=>{
 return document.getElementById(id);
 
 }





import {navbar} from "../components/navbar.js" 
let n = document.getElementById("navbar");
n.innerHTML=navbar();



import {news,append} from "./fetch.js"

let search =(e)=>{
    if(e.key=="Enter"){
        let value1 = document.getElementById("search_input").value;
        news(value1).then((data)=>{
            console.log(data);
            let box = document.getElementById("results");
            append(data.articles,box)
            window.location.href="../search.html"
            
        })
    }
}

document.getElementById("search_input").addEventListener("keydown",search);




// let countrynews=()=>{
//    let countryname = India;
//    countrynews(countryname).then((data)=>{
//        console.log(data);
//    })
// }



// let ind = get("in").addEventListener("click",myfun);