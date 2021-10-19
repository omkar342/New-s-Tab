const apiKey = "ab520029f9360d40b13e4da37c4da517";
const dateStr = new Date().toISOString().slice(0,10);
const topic = "World";
const apiCall = "https://gnews.io/api/v4/search?q="+topic+"&token=" + apiKey;
console.log(apiCall);

var topButton = document.querySelector(".top-button");

topButton.addEventListener("click",function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("clicked");
})

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
}

fetch(apiCall)
    .then(response => response.json())
    .then(newsData => {
        console.log(newsData.articles[0].title);
        console.log(newsData.articles[0].content);
        const news = newsData.articles;
        console.log(news.length);
        console.log(news.title);
        const newsElement = document.querySelector(".news-content");
        newsElement.innerHtml = "";
        var newNewsHTML = "";
        for (var i = 0 ;i<news.length;i++){
            newNewsHTML += `
            <div class="news">
                <div class="news-image"><a target="_blank" href="${news[i].url}"><img src="${news[i].image}" alt=""></a></div>
                <div class="news-info">
                    <a target="_blank" href="${news[i].url}">
                        <p class="title">${news[i].title}</p>
                    </a>
                    <p>Published On : ${news[i].publishedAt.slice(0,10)}</p>
                    <p>Source : <a class="source_name" target="_blank" href="${news[i].source.url}">${news[i].source.name}</a></p>
                </div>
            </div>
            `
        }

        newsElement.innerHTML = newNewsHTML;

        // console.log(jokesText);
        // const jokeElement = document.getElementById("jokeElement")
        // jokeElement.innerHTML = jokesText;
    })

    // for (var i = 0; i < itemsArr.length; i++) {
    //     var status = '';
    //     if(itemsArr[i].status == 1){
    //       status = 'class="done"';
    //     }
    //     newItemHTML += `<li data-itemindex="${i}" ${status}>
    //     <span class="item">${itemsArr[i].item}</span>
    //     <div><span class="itemComplete">✅</span><span class="itemDelete">🗑</span></div>
    //     </li>`;
    //   }

    // itemsList.innerHTML = newItemHTML;


    // const itemsList = document.querySelector('ul.todo-items');
    // itemsList.innerHTML = '';
    // var newItemHTML = '';