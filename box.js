class Box {
    constructor(x,y){
      var options={
        friction:1.0,
        density:0.04,
        restitution:0.8
      }
      this.body=Bodies.rectangle(x,y,45,45,options)
      this.width=45
      this.height=45
      World.add(world,this.body)
    }
    display(){
      var angle=this.body.angle
      push()
      translate(this.body.position.x,this.body.position.y)
      rotate(angle)
      fill("lime")
      strokeWeight(4)
      stroke("black")
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      
      pop()
    }
  }