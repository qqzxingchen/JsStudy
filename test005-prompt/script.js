// 定义了一个 单行文本框+确认按钮+取消按钮
// 当单行文本框内有内容且确认按钮呗按下时，ans为文本框的内容，否则为空
// var的作用域：如果它在函数中被定义，那么它就是局部的；否则，它是全局的。
var ans = prompt("Are you want to do that ?","");

if(ans)
{
    alert ( "You said : " + ans );
}
else
{
    alert ( "You refused to do that!" );
}

