window.onload = initForm;
window.onunload = function() {};

function initForm()
{
    // selectedIndex用来指定下拉列表框中默认选择的项，从0开始计数。
    document.getElementById("Months").selectedIndex = 0;
    // onchange用来指定当表单被选择的项被选中时的行为。
    document.getElementById("Months").onchange = changeFormOption;
}

function changeFormOption()
{
    var dayArray = new Array( 31,28,31,30,31,30,31,31,30,31,30,31 );
    var mon = document.getElementById("Months").selectedIndex;

    // 第一种动态插入表单项的方法
    for ( var i = 0 ; i < dayArray[mon] ; i ++ )
    {
        document.getElementById("Days").options[i] = new Option(i+1);
    }
    
    // 第二种动态插入表单项的方法
    var str;
    var dayTemp;
    
    for ( var i = 0 ; i < dayArray[mon] ; i ++ )
    {
        dayTemp = i + 1 ;
        str += "<option>"+dayTemp+"<\/option>";    
    }
    document.getElementById("Days").innerHTML = str;
}