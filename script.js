//Variables
let switchToogle=document.querySelector(".slider");
let switchValue=true;


//Event listners
switchToogle.addEventListener('click',()=>{
    if(switchValue===true){
        document.body.classList.remove("lightBg","textBlack");
        document.body.classList.add("darkBg","textWhite");
        switchValue=false;
    }
    else{
        document.body.classList.remove("darkBg","textWhite");
        document.body.classList.add("lightBg","textBlack");
        switchValue=true;
    }
})