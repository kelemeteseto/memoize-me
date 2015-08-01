document.addEventListener('click', memoize());

function memoize() {
  var cache = {};

 return function( elem ) {
   var arg = elem.srcElement.id;
   var target = elem.srcElement.className;

   if (arg) {

   }
   else if (target) {
     arg = target;
   }

   if(arg in cache) {
     console.log('Cache hit for ' + arg);
     return cache[arg];
   }
   else {
     console.log('Cache miss for ' + arg);
     cache[arg] = arg;
     return cache[arg];
   }
 };
}