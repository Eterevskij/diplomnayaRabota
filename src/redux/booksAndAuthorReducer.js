const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {"books": [
    {"id": 0, "title": "Война и мир", "author": {"id": 0, "name": "Лев Толстой"} , "genre":  {"id": 0, "name": "Роман" }, "publishingYear": 1869, "price": 879, "photo": "https://fkniga.ru/media/product/04/04010101/KA-00220926.jpg", "pagesNumber": 1270, "coverType": "твердая", "rating": 4.8, "rewievNumber": 4863},
    {"id": 1, "title": "Анна Каренина", "author": {"id": 0, "name": "Лев Толстой"} , "genre":  {"id": 0, "name": "Роман" }, "publishingYear": 1878, "price": 779, "photo": "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkXswBsL5p2WAqmm_mBhYKB6aKTM5SRkZCeTgDn6uOyic", "pagesNumber": 832, "coverType": "мягкая", "rating": 4.9, "rewievNumber": 2786},
    {"id": 2, "title": "Гарри Поттер и узник Азкабана", "author": {"id": 1, "name": "Джоан Роулинг"} , "genre":  {"id": 0, "name": "Роман" }, "publishingYear": 1997, "price": 579, "photo": "https://sun9-15.userapi.com/s/v1/ig2/m7nt0OEMCsv10z6lHP93gZDCBh17TZjXJcb95qufUJQ0SyQkLXkf8v6qUJDwq6qQAyqadeWbN0GPI2vOn7AF0iDT.jpg?size=361x567&quality=96&type=album", "pagesNumber": 528, "coverType": "твердая", "rating": 4.8, "rewievNumber": 1350},
    {"id": 3, "title": "Гарри Поттер и Тайная комната", "author": {"id": 1, "name": "Джоан Роулинг"} , "genre":  {"id": 0, "name": "Роман" }, "publishingYear": 1998, "price": 658, "photo": "https://cdn.vash.market/catalog/i/img/cv4.litres.ru/pub/c/cover/121642.jpg", "pagesNumber": 528, "coverType": "твердая", "rating": 4.7, "rewievNumber": 695},
    {"id": 4, "title": "Гарри Поттер и Кубок огня", "author": {"id": 1, "name": "Джоан Роулинг"} , "genre":  {"id": 0, "name": "Роман" }, "publishingYear": 2000, "price": 721, "photo": "https://sun9-65.userapi.com/s/v1/ig2/z9dR3uLqr6AuSKA8vF5MzMHVd7zdCc7pzTVP5aPB-YC8gHu97d5Znd8hcvuuwlQ9sFVJFdes63D6DD4cnF3Gvz2B.jpg?size=429x648&quality=96&type=album", "pagesNumber": 704, "coverType": "мягкая", "rating": 4.8, "rewievNumber": 1104},
    {"id": 5, "title": "Сияние", "author": {"id": 2, "name": "Стивен Кинг"} , "genre":  {"id": 1, "name": "Ужасы" }, "publishingYear": 1977, "price": 483, "photo": "https://ruslania.com/pictures/books_photos/9/95292/o.jpg", "pagesNumber": 636, "coverType": "твердая", "rating": 4.6, "rewievNumber": 614}
],
"authors": [
    {"id": 0, "name": "Лев Толстой", "birthYear": 1828, "deathYear": 1910, "photo": "https://regnum.ru/uploads/pictures/news/2016/02/25/regnum_picture_1456347857783771_normal.jpg"},
    {"id": 1, "name": "Джоан Роулинг", "birthYear": 1965, "deathYear": null, "photo": "https://yandex-images.clstorage.net/5XV01Vb83/37eb02U_dEy/yu1OGiJJlsvp52V3dVy_qufKPwkoCHUGMJhdBH-wt3vtP-B57ptM2H_zM-_APeGWYdloR1CfasCcEnWG0XpE4x98XRzl2lRLqeemNTOe_mglyf0ILQm1kCVenQY7cmAofH11NyBFUUTxLb8k3CNqUbXavweXmrqRRwg20wqgHPRMqgvVJZpbhu12pnT3FDJp8cHyzPjBaUHyQZ0G_G_g43Iv6_3uRBKNfWw3rBGgZdc_2fKLHEPzn4lGqJDCY1u0RmXHk6wRW4Tv9mWz-tc8ZjwEu0CxgaBGd4NezjYhp-d0IuE5bcdZSPBtMuZdaWDd_pz8Bd3KNx3CT2IWz-3ct4QsDdilW18GLP-lPbrec20_Qj7J9o9nRfjFEMv1LORusSfi-iuBmEm8KrLqkOJnkjBYOs0azT2cQoHsGYNokHHEo4dYo5vYwS21oH36UbygtUh4SjhGqYj3jtbIeiRh5LpjJXEkxFFFfaL9LNvr6xuzG7_M3ED234aE5RWMqtg6xmxH02VeU4HpcmG9_VyyrnDLPMGxzm5NvYmZCDXtIydwr6G0LEOTB7KtMWuX42_a_No1ThPPc5AEAqrexmBSPMnoxhKnGZsE7PHgOjsR9Cd_wzPFdcAgDrVCl8B_KCutuKdg-eTGlAL36zCmHOApXbnTPArQBD6WTcYimcMjkfHJaUtcalwcRqaxqvO0n3Uq8kpyxzEO5oH6Tl8HdeCjY7bnoPysjpjOd6r6JRcqqx41G_LMGMNz1Q1LLZpBrNP8RKDA0u9a3MvhNiF9M9367XwLNc03TysIvUJQBDLkJK477iB1Y0CTh3ZiNaIXYe2euB01xdLK8hiBDuBfgWTfNcOmw52ilBDCLv8jc7VXvqg9g30Js47kwnfEEMPzqC8vNm5vMeOO24L67bDiXi3pkj0dNojcA7AVwkXj1w-s3_OLLkAYr5ZUweExarG3VHdl9wy9ATZDo05zAxHLOk"},
    {"id": 1, "name": "Стивен Кинг", "birthYear": 1947, "deathYear": null, "photo": "https://vgtimes.ru/uploads/posts/2021-06/thumbs/1622625441_15421.jpg"}
]
}

const booksAndAuthorsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}