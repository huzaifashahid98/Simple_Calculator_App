


function getNumber(num)
{
    result=document.getElementById("Result");
    result.value+=num;
}
function clearResult()
{
    result=document.getElementById("Result")
    result.value=""
}
function getResult()
{
    result=document.getElementById("Result")
    result.value=eval(result.value)

}