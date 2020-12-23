/**
 * after pixel value - before pixel value + 128
 * 代码引用自 gloomyfish
 * 浮雕效果
 */
function reliefProcess(context, canvasData) {
  // caontext 画布对象  document.querySelector().getContext("2d");
  // conavas document.querySelector().getContext("2d").getImageData();
  console.log("Canvas Filter - relief process");
  var tempCanvasData = this.copyImageData(context, canvasData);
  for (var x = 0; x < tempCanvasData.width - 1; x++) {
    for (var y = 0; y < tempCanvasData.height - 1; y++) {

      // Index of the pixel in the array    
      var idx = (x + y * tempCanvasData.width) * 4;
      var bidx = ((x - 1) + y * tempCanvasData.width) * 4;
      var aidx = ((x + 1) + y * tempCanvasData.width) * 4;

      // calculate new RGB value
      var nr = tempCanvasData.data[aidx + 0] - tempCanvasData.data[bidx + 0] + 128;
      var ng = tempCanvasData.data[aidx + 1] - tempCanvasData.data[bidx + 1] + 128;
      var nb = tempCanvasData.data[aidx + 2] - tempCanvasData.data[bidx + 2] + 128;
      nr = (nr < 0) ? 0 : ((nr > 255) ? 255 : nr);
      ng = (ng < 0) ? 0 : ((ng > 255) ? 255 : ng);
      nb = (nb < 0) ? 0 : ((nb > 255) ? 255 : nb);

      // assign new pixel value    
      canvasData.data[idx + 0] = nr; // Red channel    
      canvasData.data[idx + 1] = ng; // Green channel    
      canvasData.data[idx + 2] = nb; // Blue channel    
      canvasData.data[idx + 3] = 255; // Alpha channel    
    }
  }
}