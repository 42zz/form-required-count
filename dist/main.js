var reqForm = /** @class */ (function () {
    function reqForm(target, total, remaining) {
        this.targetNames = [];
        this.total = 0;
        this.remaining = 0;
        this.target = document.getElementById(target);
        this.totalEl = document.getElementById(total);
        this.remainingEl = document.getElementById(remaining);
        this.setTargetNames(this.target);
        this.writeInnerHtml(this.totalEl, this.total.toString());
        this.writeInnerHtml(this.remainingEl, this.total.toString());
        this.updateRemainingCount();
    }
    // 対象となる項目のnameを取得する
    reqForm.prototype.setTargetNames = function (target) {
        var elements = target.elements;
        for (var i = 0; i < target.elements.length; i++) {
            var attrName = elements[i].getAttribute('name');
            if (this.targetNames.indexOf(attrName) === -1 &&
                elements[i].getAttribute('name') &&
                elements[i].getAttribute('type') !== 'submit' &&
                elements[i].getAttribute('required') === '') {
                this.targetNames.push(attrName);
                this.total++;
            }
            if (target.elements[i].getAttribute('type') === 'submit') {
                this.submit = target.elements[i];
                this.submit.setAttribute('disabled', 'true');
            }
        }
        return;
    };
    reqForm.prototype.updateRemainingCount = function () {
        var _this = this;
        var elements = [];
        for (var i = 0; i < this.targetNames.length; i++) {
            elements.push(document.getElementsByName(this.targetNames[i])[0]);
        }
        document.addEventListener('change', function (e) {
            e.preventDefault();
            // const target: HTMLInputElement = e.target as HTMLInputElement;
            var remainingNames = _this.targetNames.filter(function (name) {
                var targetInput = document.getElementsByName(name);
                if (targetInput[0].getAttribute('type') === 'radio') {
                    var radio = Array.from(document.querySelectorAll("input[name=" + name + "]"));
                    for (var _i = 0, radio_1 = radio; _i < radio_1.length; _i++) {
                        var item = radio_1[_i];
                        if (item.checked) {
                            return item.name;
                        }
                    }
                }
                else if (targetInput[0].value) {
                    return name;
                }
                return;
            });
            _this.remaining = _this.total - remainingNames.length;
            _this.writeInnerHtml(_this.remainingEl, _this.remaining.toString());
            if (_this.remaining === 0) {
                _this.submit.removeAttribute('disabled');
            }
        });
        return;
    };
    reqForm.prototype.writeInnerHtml = function (targetHtml, writeContent) {
        targetHtml.innerHTML = writeContent;
        return;
    };
    return reqForm;
}());
