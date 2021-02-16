class Ground {
    constructor(x,y){
      var options={
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,750,10,options)
      this.width=750
      this.height=10
      World.add(world,this.body)
      
    }
    display(){
      
      rectMode(CENTER)
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
      fill("white")
      
    }
  };