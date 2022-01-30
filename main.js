function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function clecan(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotresults);
}
function gotresults(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById('label').innerHTML='Label : '+results[0].label;
        document.getElementById('confidence').innerHTML='Confidence : '+Math.round(results[0].confidence*100)+" %";
        Utterthis=new SpeechSynthesisUtterance(results[0].label);
        synth.speak(Utterthis);
        }
}