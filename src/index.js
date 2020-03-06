module.exports = function check(str, bracketsConfig) {
    console.log("первый параметр, строка:");
    console.log(str);
    console.log(" ");
    console.log("второй параметр, массив:");
    console.log(bracketsConfig);

    function check2(str) {
        let stack = [];

        if (isFinite(str)) {
            stack.push(str[0]);

            for (let i = 1; i < str.length; i++) {
                if (str[i] == stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    stack.push(str[i]);
                }
            }
            console.log("оставшиеся символы без пары: ", stack);
            if (!stack.length) {
                return true;
            } else {
                return false;
            }
        }

        for (let i = 0; i < str.length; i++) {
            if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
                stack.push(str[i]);
            } else if (str[i] == "|") {
                if (stack[stack.length - 1] == "|") {
                    stack.pop();
                } else {
                    stack.push(str[i]);
                }
            } else {
                if (!stack.length) {
                    return false;
                }
                if (
                    (stack[stack.length - 1] == "(" && str[i] !== ")") ||
                    (stack[stack.length - 1] == "[" && str[i] !== "]") ||
                    (stack[stack.length - 1] == "{" && str[i] !== "}")
                ) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }

        if (stack.length) {
            return false;
        }

        return true;
    }

    let stringCheck,
        arrayCheck,
        brackets = [].concat(...bracketsConfig).join("");

    stringCheck = check2(str);
    arrayCheck = check2(brackets);
    console.log("stringCheck ", stringCheck);
    console.log("arrayCheck ", arrayCheck);
    // console.log(stringCheck == true);
    // console.log(arrayCheck == true);

    if (stringCheck && arrayCheck) {
        console.log("результат true");
        return true;
    } else {
        console.log("результат false");
        return false;
    }
};
