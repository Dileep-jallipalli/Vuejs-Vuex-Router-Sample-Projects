import Axios from "axios";

const state = {
  todos: [],
  filters: [
    {
      id: 200,
      value: 200,
    },
    {
      id: 150,
      value: 150,
    },
    {
      id: 100,
      value: 100,
    },
    {
      id: 50,
      value: 50,
    },
  ],
};

const getters = {
  allTodos: (state) => state.todos,
  allFilters: (state) => state.filters,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await Axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, filter) {
    let filterValue = filter.target.value;

    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit`
    );
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
