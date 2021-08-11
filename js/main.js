Handlebars.registerHelper("img", function(items) {
  return JSON.stringify(items).slice(12, 19) + JSON.stringify(items).slice(20, 32);
});

window.VIDEOJS_NO_DYNAMIC_STYLE = true

let data = { pictures: [ 
  
  {"img_url": "images\\rl\\IMG_4334.JPG", "alt_name": "Pug Photo", "name": "Pug Series","group": "1", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_3863.JPG", "alt_name": "Cattle Photo", "name": "Cattle Series","group": "3", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_6498.JPG", "alt_name": "Puppy Photo", "name": "Puppy Series","group": "17", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_3984.JPG", "alt_name": "Boot Photo", "name": "","group": "5", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_0001.JPG", "alt_name": "Puppy collage Photo", "name": "Photoshop series","group": "22", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_3997.JPG", "alt_name": "Snowy chair Photo", "name": "","group": "6", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_6086.JPG", "alt_name": "Geese Photo", "name": "Geese Series","group": "7", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_6444.JPG", "alt_name": "Squirrel Photo", "name": "Squirrel Series","group": "18", "box_class": "box"},
  {"img_url": "images\\rl\\DJI_0053.JPG", "alt_name": "Drone Photo", "name": "Drone Series","group": "2", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_3994.JPG", "alt_name": "Bridge Photo", "name": "","group": "8", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_5682.JPG", "alt_name": "Sunset Flower Photo", "name": "","group": "10", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_4394.JPG", "alt_name": "Yorkie Photo", "name": "Yorkie Series", "group": "19", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_6021.JPG", "alt_name": "Blank Log Photo", "name": "","group": "11", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_3859.JPG", "alt_name": "Cotton roll and windmill Photo", "name": "","group": "12", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_3975.JPG", "alt_name": "Birdhouse Photo", "name": "","group": "14", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_5585.JPG", "alt_name": "Husky Photo", "name": "Husky Series", "group": "20", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_0796.JPG", "alt_name": "Pink flower Photo", "name": "","group": "15", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_6042.JPG", "alt_name": "Stranded Nail Photo", "name": "","group": "4", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_6390.JPG", "alt_name": "Rabbit Photo", "name": "Rabbit Series","group": "21", "box_class": "box"},
  {"img_url": "images\\rl\\IMG_4491.JPG", "alt_name": "White Photo", "name": "","group": "16", "box_class": "box"},

  {"img_url": "images\\rl\\IMG_4047.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_4043.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_4038.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_4355.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_4086.JPG", "alt_name": "Pug Photo", "name": "","group": "1", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_3879.JPG", "alt_name": "Cow Photo", "name": "","group": "3", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_6518.JPG", "alt_name": "Puppy Photo", "name": "","group": "17", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_6539.JPG", "alt_name": "Puppy Photo", "name": "","group": "17", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_6519.JPG", "alt_name": "Puppy Photo", "name": "","group": "17", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_6084.JPG", "alt_name": "Geese Photo", "name": "", "group": "7", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_6438.JPG", "alt_name": "Squirrel Photo", "name": "", "group": "18", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_6439.JPG", "alt_name": "Squirrel Photo", "name": "", "group": "18", "box_class": "not"},
  {"img_url": "images\\rl\\DJI_0035.JPG", "alt_name": "Drone Photo", "name": "","group": "2", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_4383.JPG", "alt_name": "Yorkie Photo", "name": "", "group": "19", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_5986.JPG", "alt_name": "Yorkie Photo", "name": "", "group": "19", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_5745.JPG", "alt_name": "Husky Photo", "name": "", "group": "20", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_5579.JPG", "alt_name": "Husky Photo", "name": "", "group": "20", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_5542.JPG", "alt_name": "Husky Photo", "name": "", "group": "20", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_6388.JPG", "alt_name": "Rabbit Photo", "name": "","group": "21", "box_class": "not"},
  {"img_url": "images\\rl\\IMG_0002.JPG", "alt_name": "Lorax Puppy Photo", "name": "Lorax Puppy","group": "22", "box_class": "not"}
],
          cg: [
  {"img_url": "images\\cg\\AnvilDark.png", "alt_name": "CG Anvil", "name": "Anvil", "group": "1", "box_class": "box"},
  {"img_url": "images\\cg\\0296.png", "alt_name": "CG Galaxy", "name": "Space", "group": "2", "box_class": "box"},
  {"img_url": "images\\cg\\John.jpg", "alt_name": "CG character", "name": "John's Day Out", "group": "3", "box_class": "box"},
  {"img_url": "images\\cg\\Donut&Coffee.png", "alt_name": "Donut & Coffee", "name": "Donut & Coffee", "group": "4", "box_class": "box"},
  {"img_url": "images\\cg\\Day2_E.png", "alt_name": "CG Room", "name": "Bedroom", "group": "5", "box_class": "box"},
  {"img_url": "images\\cg\\0090.png", "alt_name": "CG Doorway", "name": "Doorway", "group": "6", "box_class": "box"},
  {"img_url": "images\\cg\\Lake_F.png", "alt_name": "CG Lake", "name": "Lake Particle", "group": "7", "box_class": "box"},
  {"img_url": "images\\cg\\t_sand.png", "alt_name": "CG Sand Room", "name": "Sand Room", "group": "8", "box_class": "box"},
  {"img_url": "images\\cg\\noSmoking.gif", "alt_name": "No Smoking GIF", "name": "No Smoking", "group": "9", "box_class": "box"},

  {"img_url": "images\\cg\\D_C.gif", "alt_name": "CG Donut & Coffee", "name": "Donut & Coffee", "group": "4", "box_class": "not"},
  {"img_url": "images\\cg\\0021.png", "alt_name": "CG Earth", "name": "Earth", "group": "2", "box_class": "not"}
],
          video: [
  {"vid_url": "https://www.youtube.com/embed/DnssJ45fAZQ?vq=hd1080&rel=0&color=white", "alt_name": "CG Door Room to Galaxy", "name": "DoorZone", "preview": "images\\cg\\0090.png", "group": "1", "box_class": "box"},
  {"vid_url": "https://www.youtube.com/embed/Mldc7j4yl3M?vq=hd1080&rel=0&color=white", "alt_name": "CG character", "name": "John's Day Out", "preview": "images\\cg\\John.jpg", "group": "2", "box_class": "box"},
  {"vid_url": "https://www.youtube.com/embed/yT8fe9yJuco?vq=hd1080&rel=0&color=white", "alt_name": "CG Floor click", "name": "Snap", "preview": "images\\cg\\Seamless.png", "group": "3", "box_class": "box"},
  {"vid_url": "https://www.youtube.com/embed/hzFVB-jHLTc?vq=hd1080&rel=0&color=white", "alt_name": "CG Space", "name": "Earth", "preview": "images\\cg\\0021.png", "group": "4", "box_class": "box"},
  {"vid_url": "https://www.youtube.com/embed/eQe2_icOKq8?vq=hd1080&rel=0&color=white", "alt_name": "CG Tower Pendulum", "name": "TowerBall", "preview": "images\\cg\\TowerBall_Moment.jpg", "group": "5", "box_class": "box"}
]};

let template = document.getElementById("photoTemplate").innerHTML;
let compiledTemplate = Handlebars.compile(template);
let ourHTML = compiledTemplate(data);
let imageContainer = document.getElementById("photos");
imageContainer.innerHTML = ourHTML;

let template2 = document.getElementById("videoTemplate").innerHTML;
let compiledTemplate2 = Handlebars.compile(template2);
let ourHTML2 = compiledTemplate2(data);
let imageContainer2 = document.getElementById("videos");
imageContainer2.innerHTML = ourHTML2;
