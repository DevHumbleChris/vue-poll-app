export default {
  HANDLE_SUBMIT (state, formData) {
    state.Polls.push(formData)
  },
  CLEAR_ALL_POSTS (state, Pols) {
    state.Polls = []
  }
}
