const {fromJS} = require('immutable');
const {constants} = require('../constants');

const stateTree = {
  notification: {},
  loading: {},
  selectedTab: '',
  accesstoken: '',
  topics: {},
  userTopics: {},
  replyTopics: {},
  favTopics: {},
  topic: {},
  user: {},
  messages: {}
};

function reducer(state = fromJS({}), action) {
  switch (action.type) {
    case constants.NOTIFY:
      return state.update('notification', (state) => core.notify(state, action));

    case constants.LOADING:
      return state.update('loading', (state) => core.loading(state, action));

    case constants.SELECT_TAB:
      return state.set('selectedTab', action.tab);

    case constants.SET_ACCESSTOKEN:
      return state.set('accesstoken', action.accesstoken);

    case constants.SELECT_TOPICS_TAB:
    case constants.SET_TOPICS:
      return state.update('topics', (state) => core.setTopics(state, action));

    case constants.SET_USER_TOPICS:
      return state.update('userTopics', (state) => core.setUserTopics(state, action));

    case constants.SET_REPLY_TOPICS:
      return state.update('replyTopics', (state) => core.setReplyTopics(state, action));

    case constants.SET_FAV_TOPICS:
    case constants.ADD_FAV_TOPIC:
    case constants.REMOVE_FAV_TOPIC:
      return state.update('favTopics', (state) => core.favTopics(state, action))

    case constants.SET_TOPIC:
      return state.update('topic', (state) => core.setTopic(state, action));

    case constants.SET_USER:
      return state.update('user', (state) => core.setUser(state, action));

    case constants.SET_UNREAD_MESSAGES_NUM:
    case constants.SET_UNREAD_MESSAGES:
    case constants.SET_READED_MESSAGES:
      return state.update('messages', (state) => core.readMessages(state, action));

    case constants.SET_MESSAGE:
      return state.update('message', (state) => core.setMessage(state, action));
  }

}


