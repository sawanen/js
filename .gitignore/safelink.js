function input(form){
var normal = document.getElementById("normal");
var error = document.getElementById("error");
var output = document.getElementById("output");

var view = document.getElementById("view");
  if (form.url.value.length < "7"){
    error.style.display = "block";
    output.style.display = "none";
    normal.style.display = "none";
    view.style.display = "none";
    return (false);
    }
  return (true);
}
function error(){
var normal = document.getElementById("normal");
var error = document.getElementById("error");
var output = document.getElementById("output");

var view = document.getElementById("view");
    error.style.display = "none";
    view.style.display = "block";
    normal.style.display = "block";
    output.style.display = "block";
    return (false);
}
