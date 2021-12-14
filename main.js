var img = "";
var status = "";
var objects = [];
function preload(){
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    ml5 = ml5.objectDetector("cocossd",ML);
    document.getElementById("status").innerHTML = "Status;Detecting Objects";
}
function ML(){
    status = true;
   ml5.detect(img,gotresult);
}
function gotresult(error,result){
    if(error){
        console.error(error);
    }else{
        console.log(result);
        objects = result;
    }
}
function draw(){
    img = loadImage(document.getElementById("URL").value);
    image(img,0,0,640,420);
    if(status != ""){
        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status:Object Identified";
            fill('#008B8B');
            text(objects[i].label + ", " + 100*objects[i].confidence + "%",objects[i].x,objects[i].y);
            noFill();
            stroke('#008B8B');
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }   
    }
}