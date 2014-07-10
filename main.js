// $(document).on('ready', function() {
  
// }); 
var FuelStation = function(){

};
FuelStation.prototype.fueling=function(truck){
	truck.fuelLevel = 100;	
}

var Truck =function(color, fuelLevel) {
	//initiator
	
	if(color){
		this.color= color;
	}
	this.iconType = 'truck';

	this.fuelLevel = 100; 
	
};
Truck.prototype.drive =function(){
	this.fuelLevel--;
	return this.fuelLevel;
}
Truck.prototype.color = 'red';
Truck.prototype.create = function() {
var el=$('<i>')
	.addClass('icon-' + this.iconType)
	.css('color', this.color);
  return el;
};
Truck.prototype.update=function() {
	this.el.css('color', this.color);
}

  var Ambulance = function(){
  	this.iconType = 'ambulance';
  
};
Ambulance.prototype= new Truck('blue');
Ambulance.prototype.constructor= Ambulance;

var burritoTruck = new Truck('red');
$('body').append(burritoTruck.create());

var tofurkTruck = new Truck();
$('body').append(burritoTruck.create());

var ambulance = new Ambulance();
$('body').append(ambulance.create());


var conoco = new FuelStation();


