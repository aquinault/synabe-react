var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var UserConstants = require('../constants/UserConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _user = {};

var $ = require('jquery');

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function login(username, password) {

  let user = {
    username: username,
    password: password
  };
    
  $.ajax({
    url: '/api/auth/login/',
    dataType: 'json',
    //contentType: 'application/json',
    type: 'POST',
    data: user,
    success: function(data) {
      //console.log('user auth OK');
      //console.log(data);
      
      _user = {
        username: username,
        password: password,
        isAuthentified: true,
        message: data.data.message
      };
      UserStore.emitChange();
      //console.log(user);
    }.bind(this),
    error: function(xhr, status, err) {
      
      console.log(xhr);
      /*
      let message;
      if(xhr.status === 502 ) {
        message = xhr.statusText;
      } else {
        message = xhr.responseJSON.error.message;
      }
      */
      let message = (xhr.status === 502) ? xhr.statusText : xhr.responseJSON.error.message;
      
      _user = {       
        username: username,
        password: password,
        isAuthentified: false,
        message: message
      };
      UserStore.emitChange();
      
      //console.log('/api/auth/login/', status, err.toString());
    }.bind(this)
  });  
  
  

  
}

var UserStore = assign({}, EventEmitter.prototype, {


  /**
   * Get the user.
   * @return {object}
   */
  getUser: function() {
    return _user;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var username, password;

  switch(action.actionType) {
    case UserConstants.USER_LOGIN:
      username = action.username.trim();
      password = action.password.trim();
      if (username !== '' && password !== '') {
        login(username, password);
        //UserStore.emitChange();
      }
      break;

    default:
      // no op
  }
});

module.exports = UserStore;