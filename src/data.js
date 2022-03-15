import runner from "./images/runner.png"
import wedding from "./images/wedding.png"
import bike from "./images/bike.png"


export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        price: 136,
        coverImg: runner,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        price: 125,
        coverImg: wedding,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: "1",
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        price: 50,
        coverImg: bike,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Offline",
        openSpots: "1",
    }
];