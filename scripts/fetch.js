

let news =async (value1)=>{
    //let value = document.getElementById("query").value;

    try{
    let res =await fetch(
        `https://masai-mock-api.herokuapp.com/news?q=${value1}`
        );
    
        let data = await res.json();
        // console.log(data)
        return data;
    }catch(err){
        console.log(err)
    }
}


let append = (data,results)=>{
    data.forEach(({urlToImage,title,description})=>{
        let newsdiv = document.createElement("div");
        newsdiv.setAttribute("class","news");
        let img = document.createElement("img");
        let p2 = document.createElement("h4");
        let p1 = document.createElement("p");
        img.src=urlToImage;
        img.style.height="400px"
        img.style.width="400px"
        p2.innerText=title;
        p1.innerText=description;
        newsdiv.append(img,p2,p1);
        document.getElementById("results").append(newsdiv);
    })
}



// let countrynews = (countryname)=>{
//     try{
//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countryname}`)
     
//         let data = await res.json();
//         // console.log(data)
//         return data;
//     }catch(err){
//         console.log(err)
//     }
    
// }





export {news,append}
