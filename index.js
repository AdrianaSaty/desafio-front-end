let stickers = 0;
let totalStickers = document.getElementById('stickers');

function plus(){
    stickers++;
    totalStickers.value = stickers;
}

function minus(){
    stickers <= 0 ? stickers = 0 : stickers--;
    totalStickers.value = stickers;
}