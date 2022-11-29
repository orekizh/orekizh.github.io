hamster = {
  date: Date.parse("2022-11-27"),
  people: 7,
  capacity: 10
};

dog = {
  date: Date.parse("2022-12-01"),
  people: 15,
  capacity: 15
};

cat = {
  date: Date.parse("2022-12-08"),
  people: 8,
  capacity: 20
};

function submitForm() {
  message = "Sign up succesfully";
  eventType = document.getElementById("eventType").value;
  age = document.getElementById("age").value;
  namev = document.getElementById("name").value;
  phone = document.getElementById("phone").value;
  email = document.getElementById("email").value;

  flag = true;
  if (eventType != 1 && eventType != 2 && eventType != 3) flag = false;
  if (namev == "") flag = false;
  if (phone == "") flag = false;
  if (age == "") flag = false;
  if (email == "") flag = false;
if(flag){
  let date = Date.parse(new Date());

  switch (eventType) {
    case "1":
      if (date > hamster.date) {
        message = "Sorry, the event is expired";
      } else {
        if (hamster.people >= hamster.capacity) {
          message = "Sorry, the event is fully booked";
        } else {
          if (age < 4) {
            message = "Sorry,your child is under age";
          } else if (age > 12) {
            message = "Sorry, your child is over age";
          }
        }
      }
      break;
    case "2":
      if (date > dog.date) {
        message = "Sorry, the event is expired";
      } else {
        if (dog.people >= dog.capacity) {
          message = "Sorry, the event is fully booked";
        } else {
          if (age < 6) {
            message = "Sorry,your child is under age";
          } else if (age > 12) {
            message = "Sorry, your child is over age";
          }
        }
      }
      break;
    case "3":
      console.log("3");
      if (date > cat.date) {
        message = "Sorry, the event is expired";
      } else {
        if (cat.people >= cat.capacity) {
          message = "Sorry, the event is fully booked";
        } else {
          if (age < 5) {
            message = "Sorry,your child is under age";
          } else if (age > 12) {
            message = "Sorry, your child is over age";
          }
        }
      }

      break;
    default:
    }
  }
  else{
    message = "Please fill up all the information"
  }

  document.getElementById("messageBox").innerHTML = message;
}

function cleanForm() {
  document.getElementById("eventType").value = "Choose the event";
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("messageBox").innerHTML = "The data has been clean";
}

function checkAvailabillity(id){
    message = "Congratulate,this event is available"
    switch(id){
        case "hamster":
            if(hamster.people>=hamster.capacity)
                message = "Sorry,this event is fully booked "
            break;
        case "dog":
            if(dog.people>=dog.capacity)
            message = "Sorry,this event is fully booked "
            break;
        case "cat":
            if(cat.people>=cat.capacity)
            message = "Sorry,this event is fully booked "
            break
    }
    alert(message)
}