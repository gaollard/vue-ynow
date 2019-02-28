import io from 'socket.io-client';
import store from 'store';
import ynowApi from '../../api/ynow';
import { wsHost } from '../../config';

// browser
const log = console.log;
const userInfo = store.get('userInfo');

let socketInstance = null;

export default {
  namespaced: true,
  state: () => {
    return {
      userList: [],
      msgList: [],
      msgObj: {}
    };
  },
  getters: {
  },
  mutations: {
    getAllMsg (state, { userList, msgList, msgObj }) {
      state.userList = userList;
      state.msgList = msgList;
      state.msgObj = msgObj;
    }
  },
  actions: {
    // 初始化 socket
    initSocket ({ dispatch }) {
      const socket = io(wsHost, {
        query: {
          room: 'demo',
          token: userInfo.token || Math.random()
        },
        transports: ['websocket']
      });

      socket.on('res', msg => {
        console.log('res f_from server: %s!', msg);
      });

      socket.on('connect', () => {
        const id = socket.id;

        log('#connect,', id, socket); // receive online user information

        // listen for its own id to implement p2p communication
        // socket.on(userInfo.token, msg => {
        //   dispatch('getChatList');
        // });
        socket.on('sendMsg', msg => {
          console.log(msg);
          dispatch('getChatList');
          dispatch('scrollToLast');
        });
      });

      socket.on('receiveAllMsg', msg => {
        log('#receiveAllMsg,', msg);
      });

      socket.on('online', msg => {
        log('#online,', msg);
      });

      // system events
      socket.on('disconnect', msg => {
        log('#disconnect', msg);
      });

      socket.on('disconnecting', () => {
        log('#disconnecting');
      });

      socket.on('error', () => {
        log('#error');
      });

      socketInstance = socket;
    },

    // 获取所有的聊天信息
    getChatList ({ state, commit }) {
      ynowApi.getChatList().then(res => {
        const msgList = res.data.msgList;
        const userList = res.data.userList;
        const obj = {};

        msgList.forEach(element => {
          let key;
          if (+element.f_from === +userInfo.id) {
            key = `${userInfo.id}_${element.f_to}`;
          } else {
            key = `${userInfo.id}_${element.f_from}`;
          }

          const key1 = `${element.f_from}_${element.f_to}`;
          const key2 = `${element.f_to}_${element.f_from}`;

          if (key === key1 || key === key2) {
            if (!obj[key]) {
              obj[key] = [];
            }
            if (obj[key]) {
              obj[key].push(element);
            }
          }
        });

        let values = Object.values(obj);

        function chatCompare (chatA, chatB) {
          if (chatB.create_time > chatA.create_time) {
            return 1;
          } else if (chatB.create_time === chatA.create_time) {
            return 0;
          } else {
            return -1;
          }
        }

        values.forEach(element => {
          element.sort(chatCompare);
        });

        userList.sort((a, b) => {
          const keya = `${userInfo.id}_${a.id}`;
          const keyb = `${userInfo.id}_${b.id}`;
          return chatCompare(obj[keya][0], obj[keyb][0]);
        });

        commit('getAllMsg', {
          msgObj: obj,
          msgList,
          userList
        });
      });
    },
    sendMsg ({ state, commit }, { to, content }) {
      const payload = {
        to,
        content,
        from: userInfo.id
      };
      socketInstance.emit('sendMsg', {
        payload
      });
    },
    scrollToLast () {
      const dom = document.querySelector('.view.chatItem .content');
      dom.scrollTop = dom.scrollHeight + 100;
    }
  }
};
