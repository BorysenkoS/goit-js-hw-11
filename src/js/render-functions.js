export function imageTemplate(image) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `<li class="gallery-item">
          <a class="gallery-link" href="${webformatURL}">
            <img class="gallery-image" src="${largeImageURL}" alt="${tags}" width="360" height="200";/>
            <div class="gallery-describe">
              <p class="gallery-text">Likes${likes}</p>
              <p class="gallery-text">Views${views}</p>
              <p class="gallery-text">Comments${comments}</p>
              <p class="gallery-text">Downloads${downloads}</p>
            </div>
          </a>
        </li>`;
}

export function imagesTemplate(images) {
  return images.hits.map(imageTemplate).join('');
}
