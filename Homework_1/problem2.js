var application = {
  alertBox: function (value) {
    alert(value);
  },
  initialize: function () {
    setTimeout(function () {
      this.alertBox("hello world");
    }, 2000);
  },
};

// Solution 1 : (8 lane) change to }.bind(this) 2000);

// Solution 2 : (between 5 and 6 lanes) : var a = this;
//              (7 lane) :    a.alertBox("hello world");                