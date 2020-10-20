export default class LocalSocket {
  constructor() {
    this.listeners = {};

    window.addEventListener('storage', (e) => {
      console.log(e);
      this.notifyChannel(e.key, JSON.parse(e.newValue));
    });

    return {
      initialize: this.initialize.bind(this),
      addListener: this.addListener.bind(this),
      sendMessage: this.sendMessage.bind(this),
      destroy: this.destroy.bind(this),
    };
  }

  initialize(channel) {
    if (!this.listeners[channel]) {
      this.listeners[channel] = [];
    }

    if (!localStorage.getItem(channel)) {
      localStorage.setItem(channel, JSON.stringify([]));
    }

    this.notifyChannel(channel, this.getDataChannel(channel));
  }

  destroy(channel) {
    localStorage.setItem(channel, JSON.stringify([]));
  }

  addListener(channel, listener) {
    this.listeners[channel].push(listener);
    this.notifyChannel(channel, this.getDataChannel(channel));
  }

  sendMessage(channel, nickname, message) {
    const messages = [...this.getDataChannel(channel), { nickname, message }];

    this.notifyChannel(channel, messages);

    localStorage.setItem(channel, JSON.stringify(messages));
  }

  notifyChannel(channel, messages) {
    (this.listeners[channel] || []).forEach((listener) => listener(messages));
  }

  getDataChannel(channel) {
    return JSON.parse(localStorage.getItem(channel)) || [];
  }
}
