const songs = [
    {
        name: "WarInHeaven",
        Sad: true,
        Hype: false,
        Random: false,
        price: "$20.99",
        image: "https://images.genius.com/f2168d20260847b2e742275e83ee6abe.1000x1000x1.jpg", 


    },
    {
        name: "DannyPhantom",
        Sad: false,
        Hype: false,
        Random: true,
        price: "$0.01",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3a/DannyPhantomTitleCard.jpg", 

    },
    {
        name: "NeonGuts",
        Sad: false,
        Hype: true,
        Random: false,
        price: "$99.99",
        image: "https://preview.redd.it/mgdyn8vb6yl31.jpg?auto=webp&s=515a956b6afb054028904cbe300693345abcf185"

    },
    {
        name: "Ride",
        Sad: true,
        Hype: false,
        Random: false,
        price: "$999.99", 
        image: "https://i1.sndcdn.com/artworks-000191811270-5yejvq-t500x500.jpg"

    },
    {
        name: "ComeandGetYourLove",
        Sad: false,
        Hype: false,
        Random: true,
        price: "$49.99",
        image: "https://downinthevalley.com/Photo/418458349675",

    },
    {
        name: "YoungDumbandBroke",
        Sad: false,
        Hype: true,
        Random: false,
        price: "$999999.99",
        image: "https://i.scdn.co/image/ab67616d0000b2737117fe7225ba6c6d09402a2c", 

    },
];
songs.reverse()

import { playlist } from './function'

const best = songs.map(songs => ({
    name: songs.name,
    Sad: songs. Sad,
    Hype: songs.Hype, 
    Random: songs.Random,
    price: songs.price,
}));
best.forEach((songs) => playlist(songs));

export{songs}
