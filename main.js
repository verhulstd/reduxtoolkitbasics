import "./style.scss";
import store from "./data";
import landscapesApi from "./data/landscapesApi";
store.subscribe(render);

const { getAllLandscapes, postLandscape, deleteLandscape, incrementLike } =
  landscapesApi.endpoints;
store.dispatch(getAllLandscapes.initiate(""));

function render() {
  const { isLoading, data } = getAllLandscapes.select("")(store.getState());
  if (data) {
    document.querySelector(".gridview section").innerHTML = data
      .map(
        ({ id, name, image, likes }) => `
          <aside data-id="${id}" data-likes="${likes}">
            <img src="/${image}" alt="${name}" />
            <p>${name} <sup>${likes} likes</sup></p>
            <button class="like">👍</button>
          </aside>
          `
      )
      .join("");

    document.querySelector(".tableview tbody").innerHTML = data
      .map(
        ({ id, name, image, likes }) => `
        <tr data-id="${id}">
          <td>${id}</td>
          <td><img src="/${image}" alt="${name}" /></td>
          <td>${name}</td>
          <td>${likes}</td>
          <td><button class="remove">❌</button></td>
        </tr>
          `
      )
      .join("");
  }
}

document.querySelector(".addform").onsubmit = (e) => {
  e.preventDefault();
  store.dispatch(
    postLandscape.initiate({
      name: document.querySelector(".name").value,
      image: document.querySelector(".image").value,
      likes: 0,
    })
  );
};

document.querySelector(".tableview tbody").onclick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("remove")) {
    store.dispatch(deleteLandscape.initiate(e.target.closest("tr").dataset.id));
  }
};

document.querySelector(".gridview").onclick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("like")) {
    store.dispatch(
      incrementLike.initiate({
        id: e.target.closest("aside").dataset.id,
        body: {
          likes: parseInt(e.target.closest("aside").dataset.likes) + 1,
        },
      })
    );
  }
};
