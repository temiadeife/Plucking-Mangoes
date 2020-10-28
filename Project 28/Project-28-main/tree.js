class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
    this.height=650;
    this.width=400
		
		this.image=loadImage("tree.png")
	}
	display()
	{
			push();
			fill(255)
			imageMode(CENTER);
			image(this.image, this.x,this.y,this.width,this.height);
			pop()
			
	}

}