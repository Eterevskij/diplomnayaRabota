import {
    makeAutoObservable,
    runInAction
} from "mobx";

import {getAuthor} from '../api';

class Author {
    author = {};

    isFetching = true;

    constructor() {
        makeAutoObservable(this)
    }

    loadAuthorsInfo = async (id) => {
        let authors;
        runInAction(() => this.isFetching = true);
        authors = await getAuthor();
        runInAction(() => {
            this.authors = authors;
            this.isFetching = false;
        });

    }

}

export default new Author();