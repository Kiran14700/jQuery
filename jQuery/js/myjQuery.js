

/* //iska matlab ki jab pura html document page ajaye tab yeh jQuery functions ko execute kar dena */
$('document').ready(function () {

    // $ and jQuery both are same
    console.log(jQuery);
    // $ meh pehla ham p,id,name select kartah ha aur click meh kya function execute 
    // karna ha woh daaltah ha

    //example of $=jQuery,Selector=id,class,element ,action=click,dbclick,hover
    // $('selector').action();


    // $('p').click(function () {
    //     console.log("You are clicked on p");

    // });


    $('h1').click(function () {
        console.log("You are clicked on p", this);  //is this ko likhna se isme jo code ha woh bhi dikhega
        //this daalne ki wajse ham jis bhi h1 par click karengeh woh hide ho jayega 
        $(this).hide();
    })

    //there are three main type of selectors
    // 1.element selector
    // 2.id selector
    // 3.class selector


    // 1 Element selector - This is an example of element selector which clicks on all p
    // $('p').click();


    //2 Id selector - This is an example of id selector which clicks on all p
    // $('#second').click();

    //3 class selector - This is an example of class selector which clicks on all p
    // $('.odd').click();

    //other selectors
    // $('*').click(); // ise daalne se aap sab element ko click kar saktah ho

    //ise jo h1 me jo bhi class me name 'odd' who sibh click hongi 
    // $('h1.odd').click();

    //jo bhi first h1 hoga woh click hoga
    $('h1:first').click();


    //hover or dblclick kam nahi kar rah pr woh main index.html meh work kar rah ha


    //we can use multiple mouse cliking function through this methods
    $('h3').on(
        {
            click: function () {
                console.log("Thanks for clicking", this);
            },
            mouseleave: function () {
                console.log("mouseleave", this);
            }
        });


    //hide and show function
    // $('#wiki').hide(1000, function(){
    //     console.log("hidden");
    // });

    // $('#wiki').show(1000, function(){
    //     console.log("showing");
    // });


    // //making an toogle button
    // $('.toggle').click(function(){
    //         //toggle yeh karega ki jab jab ham button pr click karengeh 
    //         //woh show hogi ya toh hide hogi
    //         $('#wiki').toggle(1000);

    // });


    //fadeIn()
    //fadeOut()
    //fadeToggle()
    //fadeTo()

    // // fadeout() use karne se yeh gayab ho jayega
    // $('.toggle').click(function(){
    //         //toggle yeh karega ki jab jab ham button pr click karengeh 
    //         //woh show hogi ya toh hide hogi
    //         $('#wiki').fadeOut(1000);

    // });


    // fadeIn() or fadeOut() ko sath meh use karne hoga ise yeh hotah ha ki 1 sec ke liye gayab hoga fir fadein se firse dekhega
    // $('.toggle').click(function(){
    //         //toggle yeh karega ki jab jab ham button pr click karengeh 
    //         //woh show hogi ya toh hide hogi
    //         $('#wiki').fadeIn(1000);

    // });


    // fadeToggle() se toh dono hi hoga fadeIn or fadOut
    //toggle yeh karega ki jab jab ham button pr click karengeh 
    //woh show hogi ya toh hide hogi

    // $('.toggle').click(function () {
    //     $('#wiki').fadeToggle(1000);
    // });



    //Slide method

    // //yeh niche se text ko gayab kar deta ha
    // $('.toggle').click(function () {
    //     $('#wiki').slideUp(1000);
    // });

    // //yeh uper se text ko gayab kar deta ha

    // $('.toggle').click(function () {
    //     $('#wiki').slideDown(1000);
    // });

    // //yeh dono bhi kar deta ha
    // $('.toggle').click(function () {
    //     $('#wiki').slideToggle(1000);
    // });




    //Animate function in jQuery
    // $('.toggle').click(function () {
    //    //by animation we use our css codes
    // $('#wiki').animate({
    //     opacity:0.3 ,   //iska matlab thodsa light dikhtah ha
    //     height:'150px',
    //     width:'350px'
    //  },'fast')   // we can use fast and slow  or 1000
    // });




    //doing multiple animations 
    $('.toggle').click(function () {
        //by animation we use our css codes
        $('#wiki').animate({ opacity: 0.3 }, 'slow');
        $('#wiki').animate({ opacity: 0.9 }, 'slow');
        $('#wiki').animate({ width: '350px' }, 'fast');
        // $("#wiki").html('i changed');      //by using this i change the html this is called DOM Manipulation 
        // $("#wiki").empty();    //by using this we can empty the data of wiki
        // $("#wiki").remove();    //it directly removes the element
        // $("#wiki").text("We can add anotherir data through text it is called DOM Manipulation");    //by text we can add data
        // $("#wiki").addClass('classAdded');    //we can add class
        $("#wiki").removeClass('Checking');    //we can add class
        //learn toggleClass


        $("#wiki").css('background-color', 'red');    //we can use css also
    });




    //by using this we add values in input
    $('.toggle').click(function () {
        $("#val").val('The value is changed');
    });


    $('.toggle').click(function () {
        $("#val").val('The value is changed');
    });



    //AJAX using jQuery



});
