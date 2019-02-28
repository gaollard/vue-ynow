import io from 'socket.io-client';
import store from 'store';
import ynowApi from '../../api/ynow';

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
      const socket = io('ws://127.0.0.1:8001', {
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
          let key
          if (element.f_from == userInfo.id) {
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
          console.log(keya, keyb);
          return chatCompare(obj[keya][0], obj[keyb][0]);
        });

        commit('getAllMsg', {
          msgObj: obj,
          msgList,
          userList
        });

        function getMsgKey (user) {
          return `${userInfo.id}_${user.id}`;
        }

        function getLastMsg (user) {
          const key = getMsgKey(user);
          return msgObj[key][0]['content'];
        }
      });
    },
    sendMsg ({ state, commit }, { to, content }) {
      const payload = {
        to,
        content,
        from: userInfo.id
      };
      console.log(payload);
      socketInstance.emit('sendMsg', {
        payload
      });
    }
  }
};
