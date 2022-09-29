const getImage300 = (image) => `https://image.tmdb.org/t/p/w300/${image}`;
async function loadapiHome(){
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var api=`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;    
    var res= await fetch(api);
    var data = await res.json();
    
    data.results.slice(0,8).forEach(element => {
        document.querySelector(".trending").innerHTML +=`
        
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=${element.media_type}&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>    
            <a href="detail.html?type=${element.media_type}&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    

    var movie_popular =`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(movie_popular);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".movie_popular").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    var movie_upcoming =`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(movie_upcoming);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".movie_upcoming").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    var movie_toprate = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(movie_toprate);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".movie_toprate").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    var tv_popular=`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`;    
    var res= await fetch(tv_popular);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".tv_popular").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    var tv_airing = `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(tv_airing);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".tv_airing").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
}


async function loadapiTV(){
    
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var tv_popular=`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`;    
    var res= await fetch(tv_popular);
    var data = await res.json();
    var html = '';
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".tv_popular").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    var tv_airing = `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(tv_airing);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".tv_airing").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
    document.getElementById('trending').style.display = "none";
    document.getElementById('movie_popular').style.display = "none";
    document.getElementById('movie_upcoming').style.display = "none";
    document.getElementById('movie_toprate').style.display = "none";
}

async function loadapiMovie(){
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var api=`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;    
    var res= await fetch(api);
    var data = await res.json();

    var movie_popular =`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(movie_popular);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".movie_popular").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    var movie_upcoming =`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(movie_upcoming);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".movie_upcoming").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });

    var movie_toprate = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`;
    var res= await fetch(movie_toprate);
    var data = await res.json();
    data.results.slice(0,4).forEach(element => {
        document.querySelector(".movie_toprate").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
    document.getElementById('trending').style.display = "none";
    document.getElementById('tv_popular').style.display = "none";
    document.getElementById('tv_airing').style.display = "none";
    
}

//load trending
async function loadTrending(){
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var api=`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;    
    var res= await fetch(api);
    var data = await res.json();
    
    data.results.forEach(element => {
        document.querySelector(".trending").innerHTML +=`
        
        <div class="video">
        <div class="video-content">
        <a href="detail.html?id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
   
    document.getElementById('movie_popular').style.display = "none";
    document.getElementById('movie_upcoming').style.display = "none";
    document.getElementById('movie_toprate').style.display = "none";
    document.getElementById('tv_popular').style.display = "none";
    document.getElementById('tv_airing').style.display = "none";
}

async function loadMoviePopular(){
    var pagi = getQueryVariable('pagi');
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var movie_popular =`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pagi}`;
    var res= await fetch(movie_popular);
    var data = await res.json();
    var pre ;
    var nextpage;
    var maxPage;
    if(pagi > 1){
        pre = parseInt(pagi) - 1;
    }else{
        pre = 1;
    }
    if(pagi >= 500)
    {
        nextpage = maxPage;
    } else {
        nextpage = parseInt(pagi) + 1;
    }


    data.results.slice(0,12).forEach(element => {
        document.querySelector(".movie_popular").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
    document.querySelector('.pagi_moviePopular').innerHTML +=`
    <ul class="pagination">
          <li class="page-item ">
            <a class="page-link" href="?category=movie_popular&&pagi=${pre}" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=movie_popular&&pagi=1">1</a></li>
           <li class="page-item ">
                                    <a class="page-link" href="?category=movie_popular&&pagi=2">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=movie_popular&&pagi=3">3</a></li>
          <li class="page-item">
            <a class="page-link" href="?category=movie_popular&&pagi=${nextpage}">Next</a>
           </li>
        </ul>`;

    document.getElementById('trending').style.display = "none";
    document.getElementById('movie_upcoming').style.display = "none";
    document.getElementById('movie_toprate').style.display = "none";
    document.getElementById('tv_popular').style.display = "none";
    document.getElementById('tv_airing').style.display = "none";
}

async function loadMovieUpComing(){
    var pagi = getQueryVariable('pagi');
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var movie_upcoming =`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${pagi}`;
    var res= await fetch(movie_upcoming);
    var data = await res.json();
    var pre ;
    var nextpage;
    var maxPage;
    if(pagi > 1){
        pre = parseInt(pagi) - 1;
    }else{
        pre = 1;
    }
    if(pagi >= 500)
    {
        nextpage = maxPage;
    } else {
        nextpage = parseInt(pagi) + 1;
    }

    data.results.slice(0,12).forEach(element => {
        document.querySelector(".movie_upcoming").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
    
    document.querySelector('.pagi_movieupcoming').innerHTML +=`
    <ul class="pagination">
          <li class="page-item ">
            <a class="page-link" href="?category=movie_upcoming&&pagi=${pre}" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=movie_upcoming&&pagi=1">1</a></li>
           <li class="page-item ">
                                    <a class="page-link" href="?category=movie_upcoming&&pagi=2">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=movie_upcoming&&pagi=3">3</a></li>
          <li class="page-item">
            <a class="page-link" href="?category=movie_upcoming&&pagi=${nextpage}">Next</a>
           </li>
        </ul>`;

    document.getElementById('trending').style.display = "none";
    document.getElementById('movie_popular').style.display = "none";
    document.getElementById('movie_toprate').style.display = "none";
    document.getElementById('tv_popular').style.display = "none";
    document.getElementById('tv_airing').style.display = "none";
}

async function loadMovieTopRated(){
    var pagi = getQueryVariable('pagi');
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var movie_toprate = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pagi}`;
    var res= await fetch(movie_toprate);
    var data = await res.json();
    var pre ;
    var nextpage;
    var maxPage;
    if(pagi > 1){
        pre = parseInt(pagi) - 1;
    }else{
        pre = 1;
    }
    if(pagi >= 500)
    {
        nextpage = maxPage;
    } else {
        nextpage = parseInt(pagi) + 1;
    }

    data.results.slice(0,12).forEach(element => {
        document.querySelector(".movie_toprate").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=movie&&id=${element.id}" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=movie&&id=${element.id}" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
    
    document.querySelector('.pagi_movietoprate').innerHTML +=`
    <ul class="pagination">
          <li class="page-item ">
            <a class="page-link" href="?category=movie_toprate&&pagi=${pre}" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=movie_toprate&&pagi=1">1</a></li>
           <li class="page-item ">
                                    <a class="page-link" href="?category=movie_toprate&&pagi=2">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=movie_toprate&&pagi=3">3</a></li>
          <li class="page-item">
            <a class="page-link" href="?category=movie_toprate&&pagi=${nextpage}">Next</a>
           </li>
        </ul>`;

    document.getElementById('trending').style.display = "none";
    document.getElementById('movie_popular').style.display = "none";
    document.getElementById('movie_upcoming').style.display = "none";
    document.getElementById('tv_popular').style.display = "none";
    document.getElementById('tv_airing').style.display = "none";
}

async function loadTVPopular(){
    var pagi = getQueryVariable('pagi');
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var tv_popular=`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=${pagi}`;    
    var res= await fetch(tv_popular);
    var data = await res.json();
    var pre ;
    var nextpage;
    var maxPage;
    if(pagi > 1){
        pre = parseInt(pagi) - 1;
    }else{
        pre = 1;
    }
    if(pagi >= 500)
    {
        nextpage = maxPage;
    } else {
        nextpage = parseInt(pagi) + 1;
    }
    data.results.slice(0,12).forEach(element => {
        document.querySelector(".tv_popular").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
            </a>
            <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
    
    document.querySelector('.pagi_tvpopular').innerHTML +=`
    <ul class="pagination">
          <li class="page-item ">
            <a class="page-link" href="?category=tv_popular&&pagi=${pre}" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=tv_popular&&pagi=1">1</a></li>
           <li class="page-item ">
                                    <a class="page-link" href="?category=tv_popular&&pagi=2">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=tv_popular&&pagi=3">3</a></li>
          <li class="page-item">
            <a class="page-link" href="?category=tv_popular&&pagi=${nextpage}">Next</a>
           </li>
        </ul>`;

    document.getElementById('trending').style.display = "none";
    document.getElementById('movie_popular').style.display = "none";
    document.getElementById('movie_upcoming').style.display = "none";
    document.getElementById('movie_toprate').style.display = "none";
    document.getElementById('tv_airing').style.display = "none";
}

async function loadTVAiring(){
    var pagi = getQueryVariable('pagi');
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var tv_airing = `https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=${pagi}`;
    var res= await fetch(tv_airing);
    var data = await res.json();
    var pre ;
    var nextpage;
    var maxPage;
    if(pagi > 1){
        pre = parseInt(pagi) - 1;
    }else{
        pre = 1;
    }
    if(pagi >= 500)
    {
        nextpage = maxPage;
    } else {
        nextpage = parseInt(pagi) + 1;
    }
    data.results.slice(0,12).forEach(element => {
        document.querySelector(".tv_airing").innerHTML +=`
        <div class="video">
        <div class="video-content">
        <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <img src="${getImage300(element.backdrop_path||element.poster_path)}" alt="" class="video-content_img">
           </a>
            <a href="detail.html?type=tv&&id=${element.id}&&season=1&&episode=1" >
            <div class="video-content_info">
                <p class="video-content_name">${element.title||element.original_title||element.original_name||element.name}</p>
                <p class="video-content_rate">${element.vote_average}</p>
            </div>
        </a>
        </div>
    </div>
        `
    });
    
    document.querySelector('.pagi_tvairing').innerHTML +=`
    <ul class="pagination">
          <li class="page-item ">
            <a class="page-link" href="?category=tv_airing&&pagi=${pre}" tabindex="-1">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=tv_airing&&pagi=1">1</a></li>
           <li class="page-item ">
                                    <a class="page-link" href="?category=tv_airing&&pagi=2">2 <span class="sr-only">(current)</span></a>
          </li>
          <li class="page-item"><a class="page-link" href="?category=tv_airing&&pagi=3">3</a></li>
          <li class="page-item">
            <a class="page-link" href="?category=tv_airing&&pagi=${nextpage}">Next</a>
           </li>
        </ul>`;

    document.getElementById('trending').style.display = "none";
    document.getElementById('movie_popular').style.display = "none";
    document.getElementById('movie_upcoming').style.display = "none";
    document.getElementById('movie_toprate').style.display = "none";
    document.getElementById('tv_popular').style.display = "none";
}

var type = getQueryVariable('type');
var category = getQueryVariable('category')

if(!type && !category && !getQueryVariable('id')){
    loadapiHome();
}
if(type == 'home' && !getQueryVariable('id')){
    loadapiHome();
}else
if(type == 'phimngan' && !getQueryVariable('id')){
    loadapiMovie();
}
else
if(type == 'tv' && !getQueryVariable('id')){
    loadapiTV();
}else
if(category == 'trending'){
    loadTrending  ();
}
else
if(category == 'movie_popular'){
    loadMoviePopular();
}
else
if(category == 'movie_upcoming'){
    loadMovieUpComing();
}else
if(category == 'movie_toprate'){
    loadMovieTopRated();
}else
if(category == 'tv_popular'){
    loadTVPopular();
}else
if(category == 'tv_airing'){
    loadTVAiring();
}
else
if(type == 'trending' && getQueryVariable('id')){
    renderTrendingDetail();
}
else
if(type == 'tv' && getQueryVariable('id')){
    renderDetailTV();
}
else
if(type == 'movie' && getQueryVariable('id')){
    renderDetail();
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}


async function renderDetail(){
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var idmovie =  getQueryVariable('id');
    var api=`https://api.themoviedb.org/3/movie/${idmovie}?api_key=${key}&language=en-US`;    
    var res= await fetch(api);
    var data = await res.json();
    var season = getQueryVariable('season');

    var html = '';
    document.querySelector('.main-detail').innerHTML +=`

    <div class="info-movie">
    
    <div class="movie-watch">
            <iFrame src="https://2embed.org/embed/${idmovie}/1/1" width="100%" height="600" allowfullscreen></iFrame>
        </div>

        <div class="box-tool">
            <div class="box-tool_right">
                <a href="" class="box-tool_right--vote">
                    <i class="fa-solid fa-star" title="Đánh giá phim"></i>
                </a>
            </div>
        </div>


        <div class="body-movie_info">
            <p class="body-movie_info--heading">Thông tin phim</p>

            <p class="movie_info-name">${data.original_title||data.title}</p>
            <div class="movie_info-genres">
                <p class="movie_info-genres--left">Genres</p>
                <div class="movie_info-genres--right">
                   
                    </div>
                </div>
            <p class="movie_info-name--realease">Release date: ${data.release_date}</p>

    </div>

    <div class="season-movie">
            <div>
            <p class="season-movie_heading">Phim liên kết</p>
            </div>
            <div class="season-movie_body">
                
            </div>
        </div>

        <div class="body-movie">
            <div class="list-episode">
                <div class="list-episode_heading">
                    <p>Danh sách tập</p>
                </div>

                <div class="list-episode_item">
                   
                </div>

            </div>

            <div class="body-movie_content">
                    <p class="body-movie_content--heading">Nội dung phim</p>

                    <p class="movie-content_text">${data.overview}</p>

            </div>
        </div>

        <div class="comment-container">
        <div class="comment-movie">
            <div class="comment-left">
                <i class="fa-solid fa-comment"></i>
                <p class="comment_text">Bình luận</p>
            </div>

            <div class="comment-right">
                <i class="fa-solid fa-arrow-rotate-right"></i>
            </div>
        </div>

        <div class="comment-login">
            <a href="" class="comment-login_btn">
                Đăng nhập để bình luận
            </a>
        </div>

        <div class="comment-area">

            <div class="comment-area_content">

                <div class="comment-user">

                    <div class="comment-user-left">
                        <div class="comment-user_avatar">
                            <img src="./img/ava.jpg" alt="">
                        </div>
                    </div>

                    <div class="comment-user_right">
                        <div class="comment-user_right--user">
                            <div class="comment-user_info">

                                <div class="comment-user_name">
                                    <p class="user-nickname">Nam Hải</p>
                                </div>

                            </div>

                        </div>

                        <div class="comment-user_right--content" >
                            Phim hay và bé miko quá ngon
                        </div>

                        <div class="comment-user_right--time">
                            19 phút trước
                        </div>

                    </div>

                </div>

                <div class="comment-more">
                    <a href="" class="comment-more_btn">
                        Tải thêm bình luận
                    </a>
                </div>

            </div>

        </div>

    </div>


    </div>
        `;

   data.genres.forEach(element => {
        document.querySelector('.movie_info-genres--right').innerHTML += `
        <a href="">
            <p class="movie_info-genres--type">${element.name}</p>
         </a>
        `;
    })

    data.seasons.forEach(element => {
        document.querySelector('.season-movie_body').innerHTML += `
        <a class="season-movie_body-link" href="detail.html?type=tv&&id=${idtv}&&season=${element.season_number}">Phần ${element.season_number}</a>
        `;
    })

    var api_episode=`https://api.themoviedb.org/3/tv/${idtv}/season/${season}?api_key=${key}&language=en-US`;    
    var res_episode= await fetch(api_episode);
    var data_episode = await res_episode.json();
    data_episode.episodes.forEach(element => {
        document.querySelector('.list-episode_item').innerHTML += `
            <button href="" class="episode" ">
                <p class="episode-num">${element.episode_number}</p>
            </button>
        `;
    })

}

async function renderDetailTV(){
    var key="1d8335abc1492efbcd1a65f823ca848c";
    var idtv =  getQueryVariable('id');
    var api=`https://api.themoviedb.org/3/tv/${idtv}?api_key=${key}&language=en-US`;    
    var res= await fetch(api);
    var data = await res.json();
    var season = getQueryVariable('season');
    var episode = getQueryVariable('episode');

    var link_episode = `https://api.themoviedb.org/3/tv/${idtv}/season/${season}/episode/${episode}?api_key=${key}&language=en-US`;
    var res_episode= await fetch(link_episode);
    var data_episode = await res_episode.json();
    document.querySelector('.main-detail').innerHTML +=`
    <div class="info-movie">
    
    <div class="movie-watch">
        <iFrame src="https://2embed.org/embed/${data_episode.id}/1/1" width="100%" height="600" allowfullscreen></iFrame>
    </div>

        <div class="box-tool">
            <div class="box-tool_right">
                <a href="" class="box-tool_right--vote">
                    <i class="fa-solid fa-star" title="Đánh giá phim"></i>
                </a>
            </div>
        </div>

        <div class="body-movie_info">
            <p class="body-movie_info--heading">Thông tin phim</p>

            <p class="movie_info-name">Name: ${data.name ||data.original_name}</p>
            <div class="movie_info-genres">
                <p class="movie_info-genres--left">Genres</p>
                <div class="movie_info-genres--right">
                   
                    </div>
                </div>
            <p class="movie_info-name">Season: ${season}</p>
            <p class="movie_info-name">Currently watching episode: ${episode}</p>
            <p class="movie_info-name--realease">Release date: ${data.first_air_date}</p>

    </div>

            <div class="season-movie">
            <div>
            <p class="season-movie_heading">Phim liên kết</p>
            </div>
            <div class="season-movie_body">
                
            </div>
        </div>

        <div class="body-movie">
            <div class="list-episode">
                <div class="list-episode_heading">
                    <p>Danh sách tập</p>
                </div>

                <div class="list-episode_item">
                   
                </div>

            </div>

            <div class="body-movie_content">
                    <p class="body-movie_content--heading">Nội dung phim</p>

                    <p class="movie-content_text">${data.overview}</p>

            </div>
        </div>

        <div class="comment-container">
        <div class="comment-movie">
            <div class="comment-left">
                <i class="fa-solid fa-comment"></i>
                <p class="comment_text">Bình luận</p>
            </div>

            <div class="comment-right">
                <i class="fa-solid fa-arrow-rotate-right"></i>
            </div>
        </div>

        <div class="comment-login">
            <a href="" class="comment-login_btn">
                Đăng nhập để bình luận
            </a>
        </div>

        <div class="comment-area">

            <div class="comment-area_content">

                <div class="comment-user">

                    <div class="comment-user-left">
                        <div class="comment-user_avatar">
                            <img src="./img/ava.jpg" alt="">
                        </div>
                    </div>

                    <div class="comment-user_right">
                        <div class="comment-user_right--user">
                            <div class="comment-user_info">

                                <div class="comment-user_name">
                                    <p class="user-nickname">Nam Hải</p>
                                </div>

                            </div>

                        </div>

                        <div class="comment-user_right--content" >
                            Phim hay và bé miko quá ngon
                        </div>

                        <div class="comment-user_right--time">
                            19 phút trước
                        </div>

                    </div>

                </div>

                <div class="comment-more">
                    <a href="" class="comment-more_btn">
                        Tải thêm bình luận
                    </a>
                </div>

            </div>

        </div>

    </div>


    </div>
        `;


    data.genres.forEach(element => {
        document.querySelector('.movie_info-genres--right').innerHTML += `
        <a href="">
            <p class="movie_info-genres--type">${element.name}</p>
         </a>
        `;
    })

    data.seasons.forEach(element => {
        document.querySelector('.season-movie_body').innerHTML += `
        <a class="season-movie_body-link" href="detail.html?type=tv&&id=${idtv}&&season=${element.season_number}&&episode=1">Phần ${element.season_number}</a>
        `;
    })

    var api_episode=`https://api.themoviedb.org/3/tv/${idtv}/season/${season}?api_key=${key}&language=en-US`;    
    var res_episode= await fetch(api_episode);
    var data_episode = await res_episode.json();
    data_episode.episodes.forEach(element => {
        document.querySelector('.list-episode_item').innerHTML += `
            <a href="detail.html?type=tv&&id=${idtv}&&season=${element.season_number}&&episode=${element.episode_number}" class="episode" ">
                    <p class="episode-num">${element.episode_number}</p>
            </a>
        `;
    })
}
function showVideo(){
    document.querySelector('.heading-movie').style.display = "none";
    document.querySelector('.movie-watch').style.display = "block";
    document.querySelector('.box-tool_left').style.display = "none";
    document.querySelector('.name-movie').style.display = "none";
}

//search
async function search(){

    document.querySelector(".result-search_wrap").innerHTML = ""; 
    const searchMovie = document.querySelector('.header-search_input').value;
    if(searchMovie == ""){
    document.querySelector('.search-container').style.display = "none";

    }else{
        
    document.querySelector('.search-container').style.display = "block";
        var key="1d8335abc1492efbcd1a65f823ca848c";
        var api=`https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=1&include_adult=false&&query=${searchMovie}`;    
        var res= await fetch(api);
        const data = await res.json();
        data.results.forEach(element => {
        document.querySelector(".result-search_wrap").innerHTML +=`
        <div class="result-search">
                        <a href="detail.html?type=${element.media_type}&&id=${element.id}">
                            <div class="result-search_content">
                                <img class="result-search_content--img" src="${getImage300(element.backdrop_path||element.poster_path)}" alt="">
                                <div class="result-search_info">
                                    <p class="result-search_name">${element.original_title||element.title||element.name || element.original_name}</p>
                                    <p class="result-search_date">${element.release_date || element.first_air_date}</p>
                                    <p class="result-search_type">${element.media_type}</p>
                                </div>
                            </div>
                        </a>
                    </div>
        `
    });

}
}
