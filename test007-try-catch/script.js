// 注意：一旦js文件中出现语法错误，则js文件将会整个加载失败（即使其他函数没有语法错误）
// 这时需要到 chrome》审查元素》console 查看到底是哪里出了问题

window.onload = initAll;

function initAllError()
{
    var ans = prompt("enter a number","");
    try 
    {
        if ( !ans || isNaN(ans) || ans < 0 )
        {
            throw new Error("not a valid number");
        }
        alert("the square root of "+ ans + " is " + Math.sqrt(ans) );
    }
    catch (errMsg)
    {
        alert errMsg;
    }
}
function initAll()
{
    var ans = prompt("enter a number","");
    try 
    {
        if ( !ans || isNaN(ans) || ans < 0 )
        {
            throw new Error("not a valid number");
        }
        alert("the square root of "+ ans + " is " + Math.sqrt(ans) );
    }
    catch (errMsg)
    {
        alert (errMsg.message);
    }

}