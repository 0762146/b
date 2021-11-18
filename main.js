Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});
var camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_Snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("Result").innerHTML='<img id="captured_Image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelLoaded);


function modelLoaded(){
    console.log('Model is Loaded!!!');
}
function check(){
    image = document.getElementById('captured_Image');
    classifier.classify(image, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHtml=results[0].label;

    }
}
