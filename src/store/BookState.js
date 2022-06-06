import {
    makeAutoObservable,
    runInAction
} from "mobx";
import {getBook, sendComment} from '../api';

class Author {
    books = [];

    userComment = {
        name: null,
        text: null,
        rating: null
    };

    isFetching = true;

    constructor() {
        makeAutoObservable(this)
    }

    loadBookInfo = async (id = 1) => {
        let books;
        runInAction(() => this.isFetching = true);
        books = await getBook(id);
        runInAction(() => {
            this.books = books;
            this.isFetching = false;
        });
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

    changeUserComment = (field, value) => {
        this.userComment[field] = value;
    }

    sendUserComment = async () => {
        let sendData = {
            "name": this.userComment.name,
            "rating": this.userComment.rating,
            "text": this.userComment.text,
            "book": this.books.id
        }
        await sendComment(sendData);
        debugger
        runInAction(() => {
            debugger
            this.books.comment.push(sendData);
            this.userComment.name = '';
            this.userComment.text = '';
            this.userComment.rating = '';
        });
    }

}

export default new Author();