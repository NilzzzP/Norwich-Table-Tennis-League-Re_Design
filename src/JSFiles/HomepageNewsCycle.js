document.addEventListener('DOMContentLoaded', async () =>{

    let newsArticles = []
    let currentIndex = 0;

    try{
        const response = await fetch('NewsRota.json');
        if (!response.ok) throw new error("Did not load NewsRota.JSON");

        newsArticles = await response.json();
    } catch (error) {
        console.error("News Load Error:", error);
        return;
    }

    function updateNewsDisplay(){
        const currentArticle = newsArticles[currentIndex];

        document.getElementById('news-image-embedded-link').href = currentArticle.ArticleURL;
        document.getElementById('news-image').src = currentArticle.ImageURL;
        document.getElementById('news-title').innerText = currentArticle.Title;
        document.getElementById('news-date').innerText = currentArticle.Date;
        document.getElementById('news-subtext').innerText = currentArticle.Subtext;
        document.getElementById('news-read-more').href = currentArticle.ArticleURL;
    }

    document.getElementById('news-next-button').addEventListener('click', () =>{
        currentIndex++;

        if (currentIndex >= newsArticles.length){
            currentIndex=0;
        }

        updateNewsDisplay();
    });

    document.getElementById('news-back-button').addEventListener('click', () => {
        currentIndex--;

        if (currentIndex < 0){
            currentIndex = newsArticles.length-1;
        }

        updateNewsDisplay();
    });

    if (newsArticles.length>0){
        updateNewsDisplay();
    }

});