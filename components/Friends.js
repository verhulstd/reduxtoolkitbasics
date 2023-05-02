import store from "../data";
import friendsApi from "../data/friendsApi";

const {
  endpoints: { getAllFriends },
} = friendsApi;

class Friends {
  #holder;
  #btn_all;
  #loading;
  #list;
  #selector;
  constructor(holder) {
    this.#holder = holder;
    this.#init();
    this.#setupEvents();
    store.subscribe(this.#render);
  }
  #init = () => {
    this.#holder.innerHTML = `
        <button class="all">Get All Friends</button>
        <p class="loading" style="display:none;">loading...</p>
        <ul class="list"></ul>
    `;
    this.#btn_all = this.#holder.querySelector(".all");
    this.#loading = this.#holder.querySelector(".loading");
    this.#list = this.#holder.querySelector(".list");
  };
  #setupEvents = () => {
    this.#btn_all.onclick = () => {
      store.dispatch(getAllFriends.initiate());
    };
  };
  #render = () => {
    const { isLoading, data } = getAllFriends.select()(store.getState());
  };
}

export default Friends;
