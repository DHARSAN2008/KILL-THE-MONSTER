class Hero {
    constructor(x,y,r){
      var options={
        frictionAir:1,
        density:1
      }
      this.r=r
      this.x=x
      this.y=y
      this.image=loadImage("s.png")
      this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
      World.add(world,this.body)
    }
    display(){
      push()
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
  
      pop()
    }
  }
  