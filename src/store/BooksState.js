import {
    makeAutoObservable,
    runInAction
} from "mobx";
import {
    getBook,
    sendComment, 
    getSortBook
} from '../api';

class BooksState {
    books = [];

    isFetching = true;

    constructor() {
        makeAutoObservable(this)
    }

    loadBooks = async () => {
        let books;
        runInAction(() => this.isFetching = true);
        books = await getBook();
        runInAction(() => {
            this.books = books;
            this.isFetching = false;
        });
    }

    sortByRating = async () => {
        let books;
        runInAction(() => this.isFetching = true);
        books = await getSortBook('avg');
        runInAction(() => {
            this.books = books;
            this.isFetching = false;
        });
    }

}

export default new BooksState();