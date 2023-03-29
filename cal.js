var flag = 1;

function cal(btn) {
    const obj = document.getElementById("res");
    const num = btn.value;
    switch (num) {
        case "AC":
            obj.innerHTML = "0";
            flag = 1;
            break;
        case "=":
            obj.innerHTML = eval(document.getElementById("res").innerHTML);
            flag = 1;
            break;
        case "×":
            if (flag) {
                obj.innerHTML = "*";
                flag = 0;
                break;
            } else {
                if (obj.innerHTML.length < 8){
                    obj.innerHTML += "*";
                }
                flag = 0;
                break;
            }
        case "÷":
            if (flag) {
                obj.innerHTML = "/";
                flag = 0;
                break;
            } else {
                if (obj.innerHTML.length < 8){
                    obj.innerHTML += "/";
                }
                flag = 0;
                break;
            }
        case "  0":
            if (flag) {
                obj.innerHTML = "0";
                flag = 0;
                break;
            } else {
                if (obj.innerHTML.length < 8) {
                    obj.innerHTML += "0";
                }
                flag = 0;
                break;
            }
        default:
            if (flag) {
                obj.innerHTML = num;
                flag = 0;
                break;
            } else {
                if (obj.innerHTML.length < 8) {
                    obj.innerHTML += num;
                }
                flag = 0;
                break;
            }
    }
}

function toPercent() {
    const obj = document.getElementById("res");
    obj.innerHTML = parseFloat(obj.innerHTML) / 100;
}

function switchFlag() {
    const obj = document.getElementById("res");
    if (obj.innerHTML[0] === "-") {
        obj.innerHTML = obj.innerHTML.slice(1);
    } else {
        obj.innerHTML = "-" + obj.innerHTML;
    }
}
