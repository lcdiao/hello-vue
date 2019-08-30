var Utils = function () {
    // 私有属性
    var username;

    // 私有方法
    var setUsername = function (username) {
        this.username = username;
    };

    // 私有方法
    var getUsername = function () {
        return this.username;
    };

    // 暴露出去
    return {
        setUsername: function (username) {
            setUsername(username);
        },
        getUsername: function () {
            return getUsername();
        }
    }
}();
//加了括号变成函数对象，自带闭包特效