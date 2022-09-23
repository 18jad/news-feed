const cards_container = $("#cards-container");
const url = "http://localhost/newsfeed/api/get_news_cards.php"
$.getJSON(url, (data) => {
    $.each(data.cards, (index, card) => {
        let cardHTML = `<div class="col">
                    <a href="http://localhost/newsfeed/news.html?news_id=${card.new_id}" class="list-group-item list-group-item-action link">
                        <div class="card shadow-sm" role="button">
                            <img src="${card.news_image}"
                                class="card-img-top hover-zoom" id="card-image">
                            <div class="card-body">
                                <h5 class="card-title" id="card-title">${card.news_title}</h5>
                                <p class="card-text text-truncate" id="card-description">
                                    ${card.news_description}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                `
        cards_container.append(cardHTML);
    })
})