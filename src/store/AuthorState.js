import {
    makeAutoObservable
} from "mobx";

const baseUrl = 'https://olejjja.herokuapp.com/api/author';

class Author {
    author = {};

    isFetching = true;

    constructor() {
        makeAutoObservable(this)
    }

    loadAuthorInfo = async (id = 1) => {
        this.isFetching = true;
        fetch(`${baseUrl}/${id}/`)
            .then(response => response.json())
            .then(json => {
                this.isFetching = false;
                this.author = json;
                console.log(json)
            })

    }

}

export default new Author();