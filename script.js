async function lodsss() {
           kadoIn.style="display:none";ket.style="display:none";
           Content.style = "opacity:1;margin-top:2vh";
           bodyblur.style="opacity:.7";
           wallpaper.style="transform: scale(1);";
           stickerhaihalyhalods.style="display:inline-flex;";
           setTimeout(lylodssticker,200);
           setTimeout(kethalo,500);
  }
  
  function lylodssticker(){
    if(palitsticker==0){stickerhaihalyhalods.src = defstickerhaihalyhalods;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transform:scale(1)";}
    if(palitsticker==1){stickerhaihalyhalods.src = stickerhaihalyhalods2.src;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(palitsticker==2){stickerhaihalyhalods.src = stickerhaihalyhalods3.src;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(palitsticker==3){stickerhaihalyhalods.src = stickerhaihalyhalods4.src;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(palitsticker==4){stickerhaihalyhalods.src = stickerhaihalyhalods5.src;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(palitsticker==5){stickerhaihalyhalods.src = stickerhaihalyhalods6.src;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(palitsticker==6){stickerhaihalyhalods.src = stickerhaihalyhalods7.src;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(palitsticker==7){stickerhaihalyhalods.src = stickerhaihalyhalods8.src;stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }
  function fthilang(){stickerhaihalyhalods.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){stickerhaihalyhalods.style.animation="rto .8s infinite alternate";setInterval(createHeart,200);}
  
  function kethalo(){
  new TypeIt("#halo", {
  strings: ["" + vketikhalo], startDelay: 50, speed: 30, waitUntilVisible: true,
  afterComplete: function(){
    halo.innerHTML = vketikhalo;
    setTimeout(bqmuncul,200);
  },}).go();
  }
  function kethalo2(){
  bqhilang();fthilang();palitsticker=6;setTimeout(lylodssticker,400);
  halo.style="display:none";
  new TypeIt("#halo2", {
  strings: ["" + vketikhalo2], startDelay: 50, speed: 60, waitUntilVisible: true,
  afterComplete: function(){
    bq.style="";
    halo2.innerHTML = vketikhalo2;
    setTimeout(munculbwh,800);
    setInterval(createHeart,400);setTimeout(tombol,7000);
  },}).go();
  }
  
  defbottomsentence = bottomsentence.innerHTML;
  function munculbwh(){bottomsentence.innerHTML=defbottomsentence;setTimeout(munculbwh2,2000);otomatis();}
  function munculbwh2(){bottomsentence.innerHTML=bottomsentence2.innerHTML;setTimeout(munculbwh3,2000);otomatis();}
  function munculbwh3(){bottomsentence.innerHTML=bottomsentence3.innerHTML;setTimeout(munculbwh,2000);otomatis();}
  function otomatis() {bottomsentence.style="position:relative;opacity:0;transform:scale(.3);";setTimeout(anim,300);} 
  function anim() {bottomsentence.style="position:relative;opacity:1;transform:scale(1);";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();fungsi=1;}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  function otokal() {sentence.style="opacity:0;transform:scale(.3);";setTimeout(anikal,300);} 
  function anikal() {setTimeout(otopsL,700);sentence.style="opacity:1;transform:scale(1);";}
  function otopsL(){opsL.style.opacity=".8";opsLcheck+=1;opsLclick=1;}

  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";fungsi=1}
  document.getElementById("By").onclick = function() {if(fungsi==1){menuju();}}
  
  vketik1=sentence.innerHTML;sentence.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#sentence", {
  strings: ["" + vketik1], startDelay: 400, speed: 50, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    otopsL();
  },}).go();
  }

  opsLclick=0;opsLcheck=0;
  document.getElementById("bq").addEventListener("click", myCheck);
  function myCheck() {
    if(opsLclick==1){
      if(opsLcheck==1){sentence.innerHTML = sentenceb.innerHTML;otokal();fthilang();palitsticker=1;setTimeout(lylodssticker,300);}
      if(opsLcheck==2){sentence.innerHTML = sentencec.innerHTML;otokal();fthilang();palitsticker=2;setTimeout(lylodssticker,300);}
      if(opsLcheck==3){sentence.innerHTML = sentenced.innerHTML;otokal();fthilang();palitsticker=3;setTimeout(lylodssticker,300);}
      if(opsLcheck==4){sentence.innerHTML = sentencee.innerHTML;otokal();fthilang();palitsticker=4;setTimeout(lylodssticker,300);}
      if(opsLcheck==5){sentence.innerHTML = sentencef.innerHTML;otokal();fthilang();palitsticker=5;setTimeout(lylodssticker,300);}
      if(opsLcheck==6){kethalo2();}
      opsL.style.opacity="0";opsLclick=0;
    }
  }
