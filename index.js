var input = prompt("Enter your name please");
var slicevar = input.slice(0,1);
slicevar = slicevar.toUpperCase();
var remname = input.slice(1,input.length);
var remname = remname.toLowerCase();
var fname = slicevar + remname;
alert("Hello" + fname);
