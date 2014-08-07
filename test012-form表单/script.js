window.onload = initForm;

// 当窗口卸载时，设置onunload为一个值，这样当用户点击back按钮回到我们的页面时，这个js将会被重新加载
// 即如果不提供给它一个函数，一些浏览器将会缓存这个网页。提供之后空函数后这个网页将不会被缓存
window.onunload = function() {};

// 这时另外一种清除页面缓存的方法，但是这种方法对safari不适用，因此最好使用上面一种方法
// window.onpageshow;

function initForm()
{
//    alert( "xc" );
    // selectedIndex用来指定下拉列表框中默认选择的项，从0开始计数。
    document.getElementById("newLocation").selectedIndex = 1;
    // onchange用来指定当表单被选择的项被选中时的行为。
    document.getElementById("newLocation").onchange = jumpPage;
}

function jumpPage()
{
    var newLoc = document.getElementById("newLocation");
    var newPage = newLoc.options[newLoc.selectedIndex].value;
    
    if( newPage != "" )
    {
        window.location = newPage;
    }
}