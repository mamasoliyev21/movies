const error = document.querySelector(".error")
const day = document.querySelector(".day")
const dark = document.querySelector(".dark")
const sunny = document.querySelector(".sunny")
const moony = document.querySelector(".moony");
const body = document.querySelector('body');
const input = document.querySelector(".form-input")

day.addEventListener("click", () =>{
    dark.classList.toggle("active");
    if ( dark.classList.contains('active')){
        sunny.style.display = "none";
        moony.style.display = "block";
        moony.style.backgroundColor = "#fff"
        body.style.backgroundColor ="gray"
        moony.style.borderRadius = "50%"
        dark.style.backgroundColor = "gray";
        body.style.backgroundColor = "#333";
    } else {
        sunny.style.display = "block"
        sunny.style.backgroundColor = "yellow";
        sunny.style.borderRadius = "50%"
        moony.style.display = "none";
        body.style.backgroundColor = "#fff";
    }
});
movies.splice(1200)
// console.log(movies);
const allmovies = movies.map((movies)=>{
    return{
        title:movies.title,
        year:movies.year,
        lang: movies.language,
        Catagory:movies.categories,
        time:`${Math.floor(movies.runtime/60)}h  ${movies.runtime%60}m`,
        summary: movies.summary,
        id:movies.imdbId,
        maxImg:movies.bigThumbnail,
        minImg:movies.smallThumbnail,
        ratings:movies.imdbRating,
        link:`https://www.youtube.com/embed/${movies.youtubeId}`
    }
})
// console.log(allmovies);

function rendelmovies(){
    allmovies.forEach((el)=>{
        const card = document.createElement("div")
        card.classList.add("shadow-lg","card")
        card.style.padding= "5px"
        card.style.width ="370px"
        card.style.backgroundColor= "black"
        card.innerHTML = `<div class="card">
        <img src="${el.minImg}" alt="img">
        <h3 class="title-text">
        ${el.title}
        </h3>
        <ul class="list-unstyled">
        <li class="item"><strong>Year:        ${ el.year}</strong></li>
        <li class="item"><strong>Ratings:     ${el.ratings}</strong></li>
        <li class="item"><strong>Catagory:    ${el.Catagory}</strong></li>
        <li class="item"><strong>language:    ${el.lang}</strong></li>
        <li class="item"><strong> id:            ${el.id}</strong></li> 
        <li class="item"><strong> davomiyligi:    ${el.time}</strong></li> 
        
        </ul>
        <div class="btns">
        <div class="social d-flex ">
        <button class="btn btn-danger">Trailers</button>
        </div>
        <div class="social d-flex">
        <button class="btn btn-primary">Read more . . .</button>
        </div>
        <div class="social d-flex">
        <button class="btn btn-warning">Add bookmark</button>
        </div>
        </div>
        </div>`
        
        $(".wrapperr").appendChild(card)
        
    })
}
rendelmovies()


// search function//

  const findmovies= (rejexp,rating)=>{
    console.log(rejexp);
    
    return allmovies.filter((film)=>{
        return film.title.match(rejexp) &&  film.ratings>=rating
    })
}

$(".card-res").style.display ="none"


$("#submitForm").addEventListener("click",(e)=>{
    const searchvalue= $("#filmname").value;
    const filmrating = $("#filmRating").value

    const rejexp= new RegExp(searchvalue,"gi")
    setTimeout(()=>{
        const search =findmovies(rejexp,filmrating) 
        
        if(search.length>0){
            $("#res").innerHTML =`<strong id="res">${search.length}</strong>  `
            $(".card-res").style.display ="block"
            rendelfor(search,filmrating)
    }else{
        $("#res").innerHTML =`   <strong id="res">${search.length}</strong> `
        $(".wrapperr").innerHTML = `<div class="error">Malumotinggiz xato kiritildi</div>`
        
    }
    
    console.log(searchvalue);
})
})

function rendelfor(data=[]){
    $(".wrapperr").innerHTML = ""
    data.forEach((el)=>{
        const card = document.createElement("div")
        card.classList.add("shadow-lg","card")
        card.style.padding= "5px"
        card.style.width ="370px"
        card.innerHTML = `<div class="card">
        <img src="${el.minImg}" alt="img">
        <h3 class="title-text">
        ${el.title}
        </h3>
        <ul class="list-unstyled">
        <li class="item"><strong>Year:        ${ el.year}</strong></li>
        <li class="item"><strong>Ratings:     ${el.ratings}</strong></li>
        <li class="item"><strong>Catagory:    ${el.Catagory}</strong></li>
        <li class="item"><strong> id:            ${el.id}</strong></li> 
        <li class="item"><strong> davomiyligi:    ${el.time}</strong></li> 
        
        </ul>
        <div class="btns">
        <div class="social d-flex">
        <button class="btn btn-danger">Trailers</button>
        </div>
        <div class="social d-flex">
        <button class="btn btn-primary">Read more . . .</button>
        </div>
        <div class="social d-flex">
        <button class="btn btn-warning">Add bookmark</button>
        </div>
        </div>
        </div>`
        
        $(".wrapperr").appendChild(card)
        
    })
}
// rendelfor()