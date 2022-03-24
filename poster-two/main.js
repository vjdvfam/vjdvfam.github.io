$(function(){
    console.log("I'm ready now");
    
    var classes = ["one", "two", "three"];

    function randomClass() {
        $(".text").each(function () {
            $(this).removeClass(classes);
            $(this).addClass(classes[Math.floor(Math.random() * classes.length)]);
        });
        setTimeout(randomClass, 1500)
    }

    randomClass();

});
