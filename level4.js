var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [{
            name: "summer",
            sex: "woman"
        },
        {
            name: "daWen",
            sex: "woman"
        },
        {
            name: "yang",
            sex: "man"
        }
    ],
    work: {
        time: "2019",
        project: {
            name: "test",
            obtain: ["css", "html", "js"]
        }
    },
    play: function () {
        console.log("玩滑板");
    }
}

//使用JSON当值为undefined、function、symbol 会在转换过程中被忽略
//var copy = JSON.parse(JSON.stringify(data))

//递归实现
function deepCopy(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            //判断obj的子元素是否是对象，如果是就递归复制，不是的话就简单复制
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                result[key] = deepCopy(obj[key]);
            } else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}
var copy = deepCopy(data)