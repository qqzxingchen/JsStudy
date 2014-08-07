window.onload = changeLink;

function changeLink()
{
    for ( var i = 0 ; i < document.links.length ; i ++ )
    {
        if( document.links[i].className == "newWin" )
        {
            document.links[i].onclick = newLink;
        }
    }
}

function newLink()
{
    var catWindow = window.open( "index.html" );
    catWindow.focus();
    
//    window.open( "ID_27.ico","catWin","resizable=no,width=100,height=100" );
//    window.open( "http://www.baidu.com/" );
    return false;
}