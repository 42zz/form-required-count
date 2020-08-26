var reqForm = /** @class */ (function () {
    function reqForm(target, total, nokori) {
        this.targetNames = [];
        this.count = 0;
        this.total = 0;
        this.target = document.getElementById(target);
        this.totalEl = document.getElementById(total);
        this.nokoriEl = document.getElementById(nokori);
        this.setTargetNames(this.target);
        this.writeInnerHtml(this.totalEl, this.total.toString());
        console.log(this.total);
        this.count = this.target.length;
    }
    reqForm.prototype.setTargetNames = function (target) {
        var elements = target.elements;
        for (var i = 0; i < target.elements.length; i++) {
            if (this.targetNames.indexOf(elements[i].getAttribute('name')) === -1 && elements[i].getAttribute('name') !== null) {
                this.targetNames.push(elements[i].getAttribute('name'));
                this.total++;
            }
        }
        return;
    };
    reqForm.prototype.writeInnerHtml = function (targetHtml, writeContent) {
        targetHtml.innerHTML = writeContent;
        return;
    };
    return reqForm;
}());
var formInit = new reqForm('remaining-target', 'total', 'nokori');
