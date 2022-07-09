function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JE0yUnByA/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var cow = 0;
var duck = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Cow - '+cow+ ' Detected Duck - '+duck;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Mooing") {
      img.src = 'cow.jpg';
      cow = cow + 1;
    } else if (results[0].label == "Quacking") {
      img.src = 'duck.jpg';
      duck = duck + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}