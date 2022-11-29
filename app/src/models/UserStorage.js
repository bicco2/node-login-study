"use strict";

class UserStorage {
  static #users = {
    id: ["bicco2", "응애", "응애2"],
    password: ["1234", "1234", "123456"],
    name: ["1", "2", "3"],
  };

  static getUsers(...props) {
    const users = this.#users;
    const newUsers = props.reduce((newUsers, props) => {
      if (users.hasOwnProperty(props)) {
        newUsers[props] = users[props];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
