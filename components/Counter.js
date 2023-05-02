import store from "../data";
import { increment, decrement, reset, setValue } from "../data/counterSlice";

class Counter {
  #holder;
  #btn_increment;
  #btn_decrement;
  #btn_reset;
  #input_counter;
  #h1_counter;
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
        <h1>${counter}</h1>  
    `;
    this.#btn_increment = this.#holder.querySelector(".increment");
    this.#btn_decrement = this.#holder.querySelector(".decrement");
    this.#btn_reset = this.#holder.querySelector(".reset");
    this.#input_counter = this.#holder.querySelector(".field");
    this.#h1_counter = this.#holder.querySelector("h1");
  };
  #setUpEvents = () => {
    this.#btn_increment.onclick = () => {
      store.dispatch(increment());
    };
    this.#btn_decrement.onclick = () => {
      store.dispatch(decrement());
    };
    this.#btn_reset.onclick = () => {
      store.dispatch(reset());
    };
    this.#input_counter.oninput = ({ target: { value } }) => {
      store.dispatch(setValue(value));
    };
  };
  #render = () => {
    const { counter } = store.getState().counter;
    this.#input_counter.value = counter;
    this.#h1_counter.innerText = counter;
  };
}

export default Counter;
