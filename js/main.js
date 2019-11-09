Handlebars.registerHelper("img", function(items) {
  return JSON.stringify(items).slice(12, 19) + JSON.stringify(items).slice(20, 32);
});

let data = { pictures: [ 
  
  {"img_url": "images\\IMG_4334.JPG", "alt_name": "Pug Photo", "name": "Pug Series","group": "1", "box_class": "box"},
  {"img_url": "images\\IMG_3863.JPG", "alt_name": "Cattle Photo", "name": "Cattle Series","group": "3", "box_class": "box"},
  {"img_url": "images\\IMG_6498.JPG", "alt_name": "Puppy Photo", "name": "Puppy Series","group": "17", "box_class": "box"},
  {"img_url": "images\\IMG_3984.JPG", "alt_name": "Boot Photo", "name": "","group": "5", "box_class": "box"},
  {"img_url": "images\\IMG_3997.JPG", "alt_name": "Snowy chair Photo", "name": "","group": "6", "box_class": "box"},
  {"img_url": "images\\IMG_6086.JPG", "alt_name": "Geese Photo", "name": "Geese Photo","group": "7", "box_class": "box"},
  {"img_url": "images\\IMG_6444.JPG", "alt_name": "Squirrel Photo", "name": "Squirrel Series","group": "18", "box_class": "box"},
  {"img_url": "images\\DJI_0053.JPG", "alt_name": "Drone Photo", "name": "Drone Series","group": "2", "box_class": "box"},
  {"img_url": "images\\IMG_3994.JPG", "alt_name": "Bridge Photo", "name": "","group": "8", "box_class": "box"},
  {"img_url": "images\\IMG_5682.JPG", "alt_name": "Sunset Flower Photo", "name": "","group": "10", "box_class": "box"},
  {"img_url": "images\\IMG_4394.JPG", "alt_name": "Yorkie Photo", "name": "Yorkie Series", "group": "19", "box_class": "box"},
  {"img_url": "images\\IMG_6021.JPG", "alt_name": "Blank Log Photo", "name": "","group": "11", "box_class": "box"},
  {"img_url": "images\\IMG_3859.JPG", "alt_name": "Cotton roll and windmill Photo", "name": "","group": "12", "box_class": "box"},
  {"img_url": "images\\IMG_3975.JPG", "alt_name": "Birdhouse Photo", "name": "","group": "14", "box_class": "box"},
  {"img_url": "images\\IMG_5585.JPG", "alt_name": "Husky Photo", "name": "Husky Series", "group": "20", "box_class": "box"},
  {"img_url": "images\\IMG_0796.JPG", "alt_name": "Pink flower Photo", "name": "","group": "15", "box_class": "box"},
  {"img_url": "images\\IMG_6042.JPG", "alt_name": "Stranded Nail Photo", "name": "","group": "4", "box_class": "box"},
  {"img_url": "images\\IMG_6390.JPG", "alt_name": "Rabbit Photo", "name": "Rabbit Series","group": "21", "box_class": "box"},
  {"img_url": "images\\IMG_4491.JPG", "alt_name": "White Photo", "name": "","group": "16", "box_class": "box"},

  {"img_url": "images\\IMG_4047.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\IMG_4043.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\IMG_4038.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\IMG_4355.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\IMG_4086.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\IMG_3879.JPG", "alt_name": "Cow Photo", "name": "","group": "3", "box_class": "not"},
  {"img_url": "images\\IMG_6518.JPG", "alt_name": "Puppy Photo", "name": "","group": "17", "box_class": "not"},
  {"img_url": "images\\IMG_6539.JPG", "alt_name": "Puppy Photo", "name": "","group": "17", "box_class": "not"},
  {"img_url": "images\\IMG_6519.JPG", "alt_name": "Puppy Photo", "name": "","group": "17", "box_class": "not"},
  {"img_url": "images\\IMG_6084.JPG", "alt_name": "Geese Photo", "name": "", "group": "7", "box_class": "not"},
  {"img_url": "images\\IMG_6438.JPG", "alt_name": "Squirrel Photo", "name": "", "group": "18", "box_class": "not"},
  {"img_url": "images\\IMG_6439.JPG", "alt_name": "Squirrel Photo", "name": "", "group": "18", "box_class": "not"},
  {"img_url": "images\\DJI_0035.JPG", "alt_name": "Drone Photo", "name": "","group": "2", "box_class": "not"},
  {"img_url": "images\\IMG_4383.JPG", "alt_name": "Yorkie Photo", "name": "", "group": "19", "box_class": "not"},
  {"img_url": "images\\IMG_5986.JPG", "alt_name": "Yorkie Photo", "name": "", "group": "19", "box_class": "not"},
  {"img_url": "images\\IMG_5745.JPG", "alt_name": "Husky Photo", "name": "", "group": "20", "box_class": "not"},
  {"img_url": "images\\IMG_5579.JPG", "alt_name": "Husky Photo", "name": "", "group": "20", "box_class": "not"},
  {"img_url": "images\\IMG_5542.JPG", "alt_name": "Husky Photo", "name": "", "group": "20", "box_class": "not"},
  {"img_url": "images\\IMG_6388.JPG", "alt_name": "Rabbit Photo", "name": "","group": "21", "box_class": "not"},
]};

let template = document.getElementById("photoTemplate").innerHTML;
let compiledTemplate = Handlebars.compile(template);
let ourHTML = compiledTemplate(data);
let imageContainer = document.getElementById("photos");
imageContainer.innerHTML = ourHTML;
