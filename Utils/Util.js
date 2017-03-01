 
 export var  getColorValue = (() => {
   if (this.colorValue) {
    return this.colorValue;
   }
   var hR = this.red.toString(16);
   var hG = this.green.toString(16);
   var hB = this.blue.toString(16);
   return this.colorValue = "#" + (this.red < 16 ? ("0" + hR) : hR) + (this.green < 16 ? ("0" + hG) : hG) + (this.blue < 16 ? ("0" + hB) : hB);
 })