import store from "../data";
import { increment } from "../data/counterSlice";

class Counter {
  #holder;
  #btn_increment;
  #btn_decrement;
  #btn_reset;
  #input_counter;
  constructor(holder) {
    this.#holder = holder;
    this.#init();
    this.#setUpEvents();
    store.subscribe(this.#render);
  }
  #init = () => {
    const { counter } = store.getState().counter;
    this.#holder.innerHTML = `
        <input type="number" class="field" value="${counter}">
        <button class="increment">+</button>
        <button class="decrement">-</button>
        <button class="reset">reset</button>
    `;
    this.#btn_increment = this.#holder.querySelector(".increment");
    this.#btn_decrement = this.#holder.querySelector(".decrement");
    this.#btn_reset = this.#holder.querySelector(".reset");
    this.#input_counter = this.#holder.querySelector(".field");
  };
  #setUpEvents = () => {
    this.#btn_increment.onclick = function () {
      store.dispatch(increment());
    };
  };
  #render = () => {
    const { counter } = store.getState().counter;
    this.#input_counter.value = counter;
  };
}

export default Counter;
