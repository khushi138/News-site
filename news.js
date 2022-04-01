// initialize the news parameter
let source = 'bbc-news';
let apiKey = 'c92ed857def14ff0b9b5b4922b795cec';

// grab the news container
let newsAccordian = document.getElementById("newsAccordion");
// pub_59408e42a04d2f2aff9c3becd2548c34d661
// Initiate an xhr object to create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {

    if (this.status == 200) {
        let json = JSON.parse(this.responseText);

        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";

        articles.forEach(function (element, index) {
            let news = `<div class="card mx-3 my-4 mb-2 border-dark shadow mb-2 rounded" style="width: 18rem; height:19rem">
                    <img src="${element['urlToImage']}" class="card-img rounded " alt="News image">
                    <div class="card-body">
                    <h5 class="card-title">${element['title']}</h5>
                    
                    <a href="${element['url']}" class="btn btn-primary " target = "_blank">Read more</a>
                    </div>
                    </div>`

            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;

    } else {
        console.log("Some error occured");
    }
}

xhr.send();
