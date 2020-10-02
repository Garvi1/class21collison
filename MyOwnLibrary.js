function isTouching(os,ow) {
    if (os.x - ow.x < ow.width/2 + os.width/2
      && ow.x - os.x < ow.width/2 + os.width/2
   && os.y - ow.y < ow.height/2 + os.height/2
      && ow.y - os.y < ow.height/2 + os.height/2) {
        return true;
    
  }
  else {
   return false;
  }
}