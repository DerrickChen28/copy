function playlist(songs) {
    return `<div class = "card"
        <h1>${songs.name}
        <img src="${songs.image}"
        <h2>${songs.price}
        <h2>${songs.Type}
    </div>`;
}

export {playlist};