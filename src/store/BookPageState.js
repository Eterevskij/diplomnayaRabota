import {
    makeAutoObservable,
    runInAction
} from "mobx";
import {
    getBook,
    sendComment
} from '../api';

class BookPageState {

    constructor() {
        makeAutoObservable(this)
    }

    isFetching = true;

    books = {};

    userComment = {
        name: null,
        text: null,
        rating: null
    };

    loadBookInfo = async (id) => {
        let book;
        runInAction(() => this.isFetching = true);
        book = await getBook(id);
        runInAction(() => {
            debugger
            this.isFetching = false;
            this.books = book;
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

export default new BookPageState();