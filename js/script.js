let hideArticle = function(){
    $(this).siblings().toggle();
}
$('h2').on('click', hideArticle);
$('h3').on('click', hideArticle);