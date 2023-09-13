let currId = 0

export function addUtils(state, payload) {
    if (Array.isArray(state)) {
      const id = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
      state.push({
        id: id,
        completed: false,
        text: payload,
      });
    } else {
      currId += 1
      state[currId] = {
        id: currId,
        completed: false,
        text: payload,
      };
    }
  }