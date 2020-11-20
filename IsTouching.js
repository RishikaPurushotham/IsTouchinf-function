function isTouching(obj){
    if(mrect.x-obj.x<mrect.width/2+obj.width/2 &&
        obj.x-mrect.x<mrect.width/2+obj.width/2 &&
        obj.y-mrect.y<mrect.height/2+obj.height/2&&
        mrect.y-obj.y<mrect.height/2+obj.height/2){mrect.shapeColor=("red")
       return true }
        else{mrect.shapeColor=("yellow")
       return false}



}
