//Variables
let switchToogle=document.querySelector(".slider");
let switchValue=true;
let helpNavButton=document.querySelector(".help-button-text");

//Event listners
switchToogle.addEventListener('click',()=>{
    if(switchValue===true){
        document.body.classList.remove("lightBg","textBlack");
        document.body.classList.add("darkBg","textWhite");

        helpNavButton.classList.add("textWhite");
        helpNavButton.classList.remove("textBlack");
        


        switchValue=false;
    }
    else{
        document.body.classList.remove("darkBg","textWhite");
        document.body.classList.add("lightBg","textBlack");

        helpNavButton.classList.add("textBlack");
        helpNavButton.classList.remove("textWhite");
        
        switchValue=true;
    }
})