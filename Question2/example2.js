// SON object having properties shapename,shapeColor,shapeArea
const originalObject = {
    shapename: 'Rectangle',
    shapeColor: 'Blue',
    shapeArea: 20
   };
   
   // using spread operator create a copy of above Object
   const copyObject = { ...originalObject };
   
   // change the shapeColor in copy
   copyObject.shapeColor = 'Red';
   
   // print details of original object and copy object, both   should have different value for shapecolor
   console.log('Original Object:');
   console.log(originalObject);
   
   console.log('Copy Object:');
   console.log(copyObject);

  




