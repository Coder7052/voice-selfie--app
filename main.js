var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");
function start(){
    Textbox.innerHTML = "";
    recognition.start();
}
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri +'"/>';
    });
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    Textbox.innerHTML = content;
    console.log(content);
    if (content == "take my selfie"){
        console.log("Action succesful:Taking selfie.....");
        speak();
    }

}

 Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpeg_quality:90
});
camera = document.getElementById("camera");
function speak(){
   Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
    },5000);
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}