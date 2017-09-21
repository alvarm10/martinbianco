'use strict';

module.exports = {
  templateUrl: 'lir/components/SOA/lir.soa.html',
  controller: Soa
};

function Soa($http) {
  this.$http = $http;
}

Soa.prototype = {
  myHandle: function (method, url) {
    this.$http({
      method: method,
      url: url
    }).then(function successCallback(response) {
      return handleRequest(response.data);
    }, function errorCallback(response) {
      return handleRequest(null, response);
    });
  }
};

function handleRequest(data, err) {
  if (err) {
    return(err);
  }
  return(data);
}

