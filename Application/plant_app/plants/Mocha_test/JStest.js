var expect = chai.expect;
var assert = chai.assert;


describe('Plant List Page', function() {
  it('mouse over, img focused', function() {
    img_over(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    document.getElementById("info1").innerHTML= bordercolor.toString();

    assert(bordercolor == 'rgb(87, 188, 144)', 'border color set to #57BC90');
  });

  it('mouse out, img restored', function() {
    img_out(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    
    assert(bordercolor == 'rgb(255, 255, 255)', 'border color set to white');

  });

  it('button onclick, block visibility switched', function() {
    var x = document.getElementById('Top5_plants');

    xlist1(document.getElementById('show_Top5_plants'),'Top5_plants');
    assert(x.style.display == 'block', 'visibility switched1');

    xlist1(document.getElementById('show_Top5_plants'),'Top5_plants');
    assert(x.style.display == 'none', 'visibility switched back');

  });
});


describe('Park List Page', function() {
  it('mouse over, img focused', function() {
    img_over(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    // var borderwidth = document.getElementById("item").style.borderWidth;

    document.getElementById("info1").innerHTML= bordercolor.toString();

   
    assert(bordercolor == 'rgb(87, 188, 144)', 'button color set to #57BC90');
     });

  it('mouse out, img restored', function() {
    img_out(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    
    assert(bordercolor == 'rgb(255, 255, 255)', 'border color set to white');
      });
});


describe('Ecoregion List Page', function(){

  //remember to change var "loc" to the location of eco_images on your own computer when you try the test!
  //you can view the image location by running the following commented code
  var loc = 'file:///home/fei/Documents/EE461L-sp19-owl-team/Application/plant_app/plants/Mocha_test/images/';

  it('show Trans Pecos img', function() {

    transpecosfunc();

    // use this code to view full location path of "eco_transpecos.jpg" in your computer:

    // var transpecosloc = document.getElementById("eco_pic").src;
    // document.getElementById("locinfo").innerHTML="the path of the images:";
    // document.getElementById("imgloc").innerHTML=transpecosloc.toString();

      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_transpecos.jpg','eco_pic is transpecos!');
  })
  it('show Edwards Plateau img', function() {

      edwardsfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_edwards.png','eco_pic is edwards!');
  })
  it('show Cross Timbers img', function() {
      crosstimbersfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_crosstimbers.png','eco_pic is crosstimbers!');
  })

  it('show South Plains img', function() {
      southplainsfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_southplains.png','eco_pic is southplains!');
  })

  it('show Post Oak img', function() {
      postoakfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_postoaksavanah.jpg','eco_pic is postoaksavanah!');
  })

  it('show Piney Woods img', function() {
      pineywoodsfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_pineywoods.png','eco_pic is pineywoods!');
  })

  it('show Blackland Prairie img', function() {
      blacklandprairiefunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_blacklandprairie.jpg','eco_pic is blacklandprairie!');
  })

  it('show Gulf Coast Prairies img', function() {
      coastfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_marshes.png','eco_pic is marshes!');
  })

  it('show High Plains img', function() {
      highplainsfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_highplains.png','eco_pic is highplains!');
  })
  it('show Rolling Plains img', function() {
      rollingplainsfunc();
      var imgsrc = document.getElementById("eco_pic").src;
      assert(imgsrc == loc+'eco_rollingplains.jpg','eco_pic is rollingplains!');
  })

  it('img hidden', function() {
      leave();
      var imgvb = document.getElementById("eco_pic").visibility;
      assert(imgvb =='hidden','eco_pic is hidden!');
  })

});

// describe('show text', function(){
//   it('show Trans Pecos text', function() {
//     transpecosfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Trans Pecos','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Edwards Plateau text', function() {
//     edwardsfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Edwards Plateau','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Cross Timbers text', function() {
//     crosstimbersfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Cross Timbers','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show South Plains text', function() {
//     southplainsfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'South Plains','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Post Oak text', function() {
//     postoakfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Post Oak','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Piney Woods text', function() {
//     pineywoodsfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Piney Woods','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Blackland Prairie text', function() {
//     blacklandprairiefunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Blackland Prairie','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Gulf Coast Prairies text', function() {
//     coastfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Gulf Coast Prairies','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show High Plains text', function() {
//     highplainsfunc();
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'High Plains','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Rolling Plains text', function() {
//     rollingplainsfunc()
//     var text = document.getElementById("eco_text").innerHTML;
//     //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Rolling Plains','text is right!');
//     //assert(imgsrc.toString() !== loc+'eco_transpecos.jpg','eco_pic is not transpecos!');
//   });

//   it('show Mouse-out text', function() {
//       leave();
//       var text = document.getElementById("eco_text").innerHTML;
//   //document.getElementById("eco_text").innerHTML=imgsrc.toString();
//     assert(text == 'Pick Your Ecoregion!','text is right!');
//   })

// });

describe('Plant Profile Page', function() {
  it('mouse over, img focused', function() {
    img_over(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    document.getElementById("info1").innerHTML= bordercolor.toString();

    assert(bordercolor == 'rgb(87, 188, 144)', 'border color set to #57BC90');
  });

  it('mouse out, img restored', function() {
    img_out(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    
    assert(bordercolor == 'rgb(255, 255, 255)', 'border color set to white');

  });
  it('background color changed green', function() {
    backgroundColorBlue(item);

    var backgroundcolor = document.getElementById("item").style.backgroundColor;
    document.getElementById("info1").innerHTML= backgroundcolor.toString();

    assert(backgroundcolor == 'rgb(87, 188, 144)', 'background color set to #57BC90');
  });
  // it('button background color changed grey', function() {
  //   backgroundColorGrey(document.getElementById('plant_profile'));

  //   var backgroundcolor = document.getElementById("plant_profile").style.backgroundColor;
    
 
  //   assert(backgroundcolor == 'rgb(165,165,175)', 'border color set to #A5A5Af');

  // });
  it('color reverse', function() {

    var backgroundcolor = document.getElementById("item").style.backgroundColor;
      if(item.style.backgroundColor === "57BC90"){
        buttonReverseColor(item);
        assert(backgroundcolor == 'rgb(165,165,175)', 'color changed to #A5A5Af');

    } else{
      buttonReverseColor(item);
        assert(backgroundcolor == 'rgb(87, 188, 144)', 'color changed to #57BC90');
    } 
  });
  // it('buttom function', function() {
  //   xlist(document.getElementById('show_Top5_plants'),'item', 'ecoSet');
    
  //   assert(document.getElementById('show_Top5_plants').backgroundColor == 'rgb(255,105,97)', 'border color set to #A5A5Af');

  // });

});


describe('Park Profile Page', function() {
  it('mouse over', function() {
    img_over(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    document.getElementById("info1").innerHTML= bordercolor.toString();

    assert(bordercolor == 'rgb(87, 188, 144)', 'border color set to #57BC90');
  });

  it('mouse out', function() {
    img_out(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    
    assert(bordercolor == 'rgb(255, 255, 255)', 'border color set to white');

  });
  it('background color changed', function() {
    backgroundColorBlue(item);

    var backgroundcolor = document.getElementById("item").style.backgroundColor;
    document.getElementById("info1").innerHTML= backgroundcolor.toString();

    assert(backgroundcolor == 'rgb(87, 188, 144)', 'background color set to #57BC90');
  });

  it('color reverse', function() {
    var backgroundcolor = document.getElementById("item").style.backgroundColor;
      if(item.style.backgroundColor === "57BC90"){
        buttonReverseColor(item);
        assert(backgroundcolor == 'rgb(165,165,175)', 'color changed to #A5A5Af');

    } else{
      buttonReverseColor(item);
        assert(backgroundcolor == 'rgb(87, 188, 144)', 'color changed to #57BC90');
    } 
  });

});

describe('Eco Profile Page', function() {
  it('mouse over', function() {
    img_over(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    document.getElementById("info1").innerHTML= bordercolor.toString();

    assert(bordercolor == 'rgb(87, 188, 144)', 'border color set to #57BC90');
  });

  it('mouse out', function() {
    img_out(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    
    assert(bordercolor == 'rgb(255, 255, 255)', 'border color set to white');

  });
  it('background color changed', function() {
    backgroundColorBlue(item);

    var backgroundcolor = document.getElementById("item").style.backgroundColor;
    document.getElementById("info1").innerHTML= backgroundcolor.toString();

    assert(backgroundcolor == 'rgb(87, 188, 144)', 'background color set to #57BC90');
  });

  it('color reverse', function() {
    var backgroundcolor = document.getElementById("item").style.backgroundColor;
      if(item.style.backgroundColor === "57BC90"){
        buttonReverseColor(item);
        assert(backgroundcolor == 'rgb(165,165,175)', 'color changed to #A5A5Af');

    } else{
      buttonReverseColor(item);
        assert(backgroundcolor == 'rgb(87, 188, 144)', 'color changed to #57BC90');
    } 
  });

});



describe('About Page', function() {
  it('mouse over, img focused', function() {
    img_over(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    document.getElementById("info1").innerHTML= bordercolor.toString();

    assert(bordercolor == 'rgb(87, 188, 144)', 'border color set to #57BC90');
  });

  it('mouse out, img restored', function() {
    img_out(item);

    var bordercolor = document.getElementById("item").style.borderColor;
    
    assert(bordercolor == 'rgb(255, 255, 255)', 'border color set to white');

  });
});

