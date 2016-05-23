import Loader from './Loader.js';

export class ImageLoader extends Loader{
  constructor(){
    super();
    this._store = {};
    console.log('enter ImageLoader');
  }

  load(images){
    return new Promise((resolve, reject)=>{
    let total = 0;
    let counter = 0;
    let loadFinish = () =>{return total === counter;}
    Object.getOwnPropertyNames(images)
    .forEach((key)=>{
      total++;
      let img = new Image();
      img.src = images[key];
      img.onload = () =>{
          this._store[key] = img;
          counter++;
          console.log(counter+'-'+'image:'+key+'-'+' load finish.');
       /*   document.getElementById("img").appendChild(img.src);*/

          let line = document.createElement("p");
          line.innerHTML = "<img src=" + img.src + '>';
          document.getElementById("img").appendChild(line);



          if(loadFinish()){
            resolve();
          }
      }
    })
  })
  }
}


let images = {
  "pig":"http://i3.ytimg.com/vi/ReiY77HXPrs/mqdefault.jpg",
  "apple":"http://maxcdn.thedesigninspiration.com/wp-content/uploads/2009/09/cute-animals/02.jpg",
  "BlahBlah":"http://petupon.com/wp-content/uploads/2014/05/259758xcitefun-cute-animals-0.jpg",
  "Test":"https://s-media-cache-ak0.pinimg.com/236x/c0/14/23/c014230dec32c2eeb133b7b8da072317.jpg",
};

let loader = new ImageLoader();
loader.load(images).then(()=>{
  console.log('load finish.');
});
