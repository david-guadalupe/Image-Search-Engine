const accessKey = 'k0X4fs0TZSCCkMt8M6BsNyB8w_KtBobHVPBXWTkFsGM';

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = 'https://api.unsplash.com/search/photos?page=';

    const response = await fetch(url + page + '&query=' + keyword + '&client_id=' + accessKey + '&per_page=12');
    const data = await response.json();

    const results = data.results;
    if(page == 1){
        searchResult.innerHTML = '';
    }
    results.map((results) =>{
        const image = document.createElement("img");
        image.src = results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target= "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreButton.style.display = 'block';

    // console.log(data);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreButton.addEventListener('click', () => {
    page++;
    searchImages();
})