pandaCorrect = "2";
lionCorrect = "3";
penguinCorrect = "2";

function radioValue() {
  var pandas = document.getElementsByName("panda");
  var lions = document.getElementsByName("lion");
  var penguins = document.getElementsByName("penguins");

  flag = true;

  var panda, penguin, lion;

  for (i = 0; i < pandas.length; i++) {
    if (pandas[i].checked) panda = pandas[i].value;
  }
  for (i = 0; i < lions.length; i++) {
    if (lions[i].checked) lion = lions[i].value;
  }
  for (i = 0; i < penguins.length; i++) {
    if (penguins[i].checked) penguin = penguins[i].value;
  }

  if (pandas != undefined && lion != undefined && penguin != undefined) {
    if (panda != pandaCorrect) flag = false;
    else if (lion != lionCorrect) {
      flag = false;
    } else if (penguin != penguinCorrect) flag = false;

    if (flag) window.location.href = "quiz100.html";
    else window.location.href = "quizfail.html";
  } else {
    alert("Need to select the answers");
  }
}
