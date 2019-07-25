var x= function(j){
	this.i=0;
	this.j=j;
}

x.prototype.getVal=function(){
	return this.j;
}

var x1= new x(1);

x1.getVal();


// 2
// base class

var Job = function(){
	this.pays=true;
};

//prototype method

Job.prototype.print= function(){
	console.log(this.pays ? "Yes" : "No");
};

//subclass

var TechJob = function(title,pays){
	// call job constructor and makes it base class of TechJob
	Job.call(this);
	
	this.title=title;
	this.pays=pays;
};

//inherit from job.prototype
TechJob.prototype= Object.create(Job.prototype);
//set the constructor 

TechJob.prototype.constructor=TechJob;

var pos = new TechJob("js",true);