// variables
const author = $("#author"),
    newsDate = $("#news-date"),
    newsBody = $("#news-body"),
    newsTitle = $("#news-title");

// get news id from url parameter
$.urlParam = (name) => {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

// fetch json depending on passed id
$.getJSON(`http://localhost/newsfeed/api/get_news_feed.php/?news_id=${$.urlParam("news_id")}`, (data) => {
    $.each(data.cards, (index, card) => {
        // change elements content 
        author.text(card.author);
        newsDate.text(card.date_posted);
        newsTitle.text(card.news_title);
        newsBody.text(card.news_body);
    })
})