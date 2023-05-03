import store from "../data";
import friendsApi from "../data/friendsApi";

const {
  endpoints: { getAllFriends, getOneFriend, getManyFriends, addFriend },
} = friendsApi;

class Friends {
  #holder;
  #btn_all;
  #loading;
  #list;
  #btn_bart;
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
        <button class="bart">Add Bart</button>    
        <ul class="list"></ul>
    `;
    this.#btn_all = this.#holder.querySelector(".all");
    this.#loading = this.#holder.querySelector(".loading");
    this.#list = this.#holder.querySelector(".list");
    this.#btn_bart = this.#holder.querySelector(".bart");
  };
  #setupEvents = () => {
    this.#btn_all.onclick = () => {
      store.dispatch(getAllFriends.initiate());

      //   store.dispatch(getOneFriend.initiate());

      //   store.dispatch(getManyFriends.initiate([5, 6, 8]));
    };
    this.#btn_bart.onclick = () => {
      store.dispatch(
        addFriend.initiate({
          name: "Bart",
          birthDay: "1971-03-22",
        })
      );
    };
  };
  #render = () => {
    const { isLoading, data } = getAllFriends.select()(store.getState());

    // const { isLoading: isLoading2, data: data2 } = getOneFriend.select(5)(
    //   store.getState()
    // );

    // const { isLoading: isLoading3, data: data3 } = getManyFriends.select([
    //   5, 6, 8,
    // ])(store.getState());

    // console.log(data3);

    if (isLoading) {
      this.#loading.style.display = "block";
    } else {
      this.#loading.style.display = "none";
    }
    if (data) {
      this.#list.innerHTML = data
        .map((friend) => `<li>${friend.name}</li>`)
        .join("");
    }
  };
}

export default Friends;
