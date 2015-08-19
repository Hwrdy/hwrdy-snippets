String.prototype.ltrim = function () {
    return this.replace(/^(\s*| *)/, "");
};

String.prototype.rtrim = function () {
    return this.replace(/(\s*| *)$/, "");
};

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        var t = this.rtrim();
        return t.ltrim();
    };
}


