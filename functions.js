class Functions{
  
  constructor(){
    
    this.start = 0
    this.increment = 0.01
  }
  
  display(funct){
    beginShape()
    var xOff = this.start
    for (var x = 0; x < width; x++){
      stroke(255)
      noFill()
      var y = height/2 + funct(xOff) * height/2
      vertex(x, y)
      xOff += this.increment
    }
    endShape()
    this.start += this.increment
  }
  
  freeUndampedMotion(t){
    var A = .1
    var B = .1
    var w = 10
    return ( A*cos(w*t) + B*sin(w*t) )
  }
  
  freeDampedMotion(t){
    var A = 1
    var B = 1
    var w = 10
    var e = (2.71828)**(-t)
    return ( A*e*cos(w*t) + B*e*sin(w*t) )
    
  }
  
  
}