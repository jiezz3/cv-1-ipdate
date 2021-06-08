let html = document.querySelector("#html")
let style = document.querySelector("style")
let n = 0
let string = `
/*你好，我叫袁炜杰
*今年22岁
*是一位前端新人
*接下来我将展示如何画一个太极图
*首先需要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
    right:100px;
    top:50px;
}
/*接下来需要把这个div变成八卦图了
*首先是要变成一个圆形
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    border:none;
}
/*接下来完成八卦一黑一白两边*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*差了点什么呢
*哦还差上下两个黑白的圆啊
**/
#div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = ''
let step = () => {
    setTimeout(() => {
        console.log(string2)
        string2 += string[n] === "\n" ? "<br>" : string[n]
        html.innerHTML = string2
        style.innerHTML = string.substr(0, n)
        window.scrollTo(0, 9999)
        html.scrollTo(0, 99999);
        if (n + 1 < string.length) {
            n = n + 1
            step()
        } else { }
    }, 0)
}
step()
