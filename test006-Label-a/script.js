window.onload = initAll;

function initAll()
{
    document.getElementById("redirect").onclick = initRedirect;
}
function initRedirect()
{
    // 如果window.location被赋值this，那么它将会跳转到a标签中href指定的地址
    window.location = "http://www.baidu/com";
    window.location = this;
    
    // 如果这里return true，则告诉a标签，还需要它继续进行处理，即跳转（href）
    // 如果这里return false，则告诉a标签，不需要它继续处理了
    return false;
    
    // 这样，通过 window.location = this 和 return true 的联合使用，可以实现
    // 一个通用的脚本：在a标签被点击之后、跳转之前，为其增加一些其他的处理
}