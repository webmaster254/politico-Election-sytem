

            function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
            }
            $(document).ready(function()
{
$(".account").click(function()
{
var X=$(this).attr('id');
if(X==1)
{
$(".submenu").hide();
$(this).attr('id', '0'); 
}
else
{
$(".submenu").show();
$(this).attr('id', '1');
}
});
$(".submenu").mouseup(function()
{
return false
});
$(".account").mouseup(function()
{
return false
});
$(document).mouseup(function()
{
$(".submenu").hide();
$(".account").attr('id', '');
});
});
