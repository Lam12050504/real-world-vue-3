import { createStore } from "vuex";

export default createStore({
  state: {
    user: { id: '123', name: 'Lam' },
    categories: [
      'thit',
      'ca',
      'trung',
      'sua',
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: true },
      { id: 3, text: '...', done: false },
      { id: 4, text: '...', done: true },
    ],
    events: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: true },
      { id: 3, text: '...', done: false },
      { id: 4, text: '...', done: true },
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todos => todos.done === true)
    },
    activeTodos: state => {
      return state.todos.filter(todos => todos.done === false)
    },
    getEventID: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
});
