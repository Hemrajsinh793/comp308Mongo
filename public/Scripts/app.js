
//Costom java script
(function(){

    function Start(){
        console.log(`%c Apllication started`,"font-size:20px; color:blue;font-weight:bold;");

        $(".btn-danger").click(function(event){
            if(!confirm("Are you sure????")){
                event.preventDefault();
                window.location.assign("/contact-list");
            }
        });
    }
    addEventListener("load", Start);
})();