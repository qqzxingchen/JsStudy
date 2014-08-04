window.onload = writeMessage;   // 此处不能改为writeMessage

function writeMessage()
{
    document.getElementById("helloMessage").innerHTML = "HelloWorld!";
}