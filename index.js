$(".acceptButton").click(function(){
if($("#name").val() === ""){
  $("#name").addClass("empty");
  $("#name").attr("placeholder", " ");
  $("#name").after("<p class='emptyAlert'>First Name cannot be empty</p>");
  
};

if($("#surname").val() === ""){
  $("#surname").addClass("empty");
  $("#surname").attr("placeholder", " ");
  $("#surname").after("<p class='emptyAlert'>Last Name cannot be empty</p>");
};

if($("#e-mail").val() === ""){
  $("#e-mail").addClass("empty");
  $("#e-mail").attr("placeholder", " ");
  $("#e-mail").after("<p class='emptyAlert'>Email cannot be empty</p>");
};

if($("#password").val() === ""){
  $("#password").addClass("empty");
  $("#password").attr("placeholder", " ");
  $("#password").after("<p class='emptyAlert'>Password cannot be empty</p>");
};
});

$(".acceptButton").click(function(){
var email = false;
var email = emailValidation($("#e-mail").val());
if(!email && ($("#e-mail").val() != "")){
  $("#e-mail").addClass("empty");
  $("#e-mail").attr("placeholder", " ");
  $("#e-mail").after("<p class='emptyAlert'>Looks like this is not an email</p>");
};
});


function emailValidation(email){
  var at = email.indexOf("@");
  var dot = email.indexOf(".");
  if (at === -1 || dot === -1){return false;

  } else {return true;}

}

