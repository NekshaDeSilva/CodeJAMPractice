function sayname(text) {
    return text;
}
console.log(sayname("Hello, World!"));
// Javascript is a camel case language, so we use camel case.
$('.btn').on('click', function(){
    $(this).addClass('clicked_btn');
    console.log(this ,' clicked' );
});

sayname();
var calculus ={};
var globalRootVal;
function redandbacvkzombie(status){

        $('.btn').on('click', function(){
            globalRootVal = $(this).attr('--data-val');
        if(status == 0){
        status =1;
        $(this).addClass('btn-ci');
        }else{
        status =0;
        $(this).removeClass('btn-ci');
    }
    })
    $('.btn').on('mouseup touchend mouseout', function(){
        $(this).removeClass('btn-ci');
    })
}
redandbacvkzombie(status =0 );

//fucntion for getting data-id likwise values;

   
    function calcValues(tier,operator,operand1_tier, operand2_tier, result){
        this.tier = tier
        this.operator =operator,//we should make this program as operands add as we add operands in the  calculator
        this.operand1_tier = operand1_tier//operand is "Sanugunakaya"
        this.operand2_tier = operand2_tier,
        this.result =result
    
    }
   var tierval = 0;
   function blackout(prp,opt){
    if(opt ==1 ){
        $('.btn-style').css({

        'opacity':'70%'

    
        
        });
        $('.btn-style').removeClass(prp);
   }else{
    $('.btn-style').css({

        'opacity':'100%'

    
        
        });
        $('.btn-style').addClass(prp);
    }
}
function  controlsCheck(val){
    console.log(val)
    blackout(prp = 'btn', opt = 0);
    calculus['tier'+tierval].operator=  val;
    
}
 //as we calculate, we have to increase tiers because we need to show the history
  $('.btn').on('click', function( numberchoice){ 
    numberchoice++;
    
   
    function outMainVal(val){
        
        val = globalRootVal;
        return val;
    }
     console.log(outMainVal());

     function writeonobject(){
        var w_tier;
        var w_operator;

        var w_result;
        calculus['tier'+tierval]  = new calcValues(tier = w_tier+tierval);

     }
    if (tierval == 0){
        
        
        console.log('welcome for the first time!');
       writeonobject();
       calculus['tier'+tierval].operand1_tier = outMainVal();
       blackout(prp = 'btn', opt = 1);
      
       tierval=1;
       
    }else if(tierval ==1){
        
        tierval=0;
        
        console.log(outMainVal());
       
        console.log('welcome back again!');
        $('.button-grid').disable =true;
        calculus['tier'+tierval].operand2_tier = outMainVal();
    }
  console.log(calculus);
})
  

function person(name, age, gender){
    this.name = name,
    this.age = age,
    this.gender = gender
}
console.log(person('neksha', '16', 'male'));
function preventin(){
    $('form').on('submit', function(event){
        event.preventDefault();
        //window.open("https://www.appleasia.lk")
        })
}
preventin(); //EventPreventing from actions 
function randRoot(root, root1, root2){
        root = Math.round(Math.random()*100)
        root2 = Math.round(Math.random()*35)
        root1 = Math.round(Math.random()*24)
        return ('rgb('+ root2 +','+ root1 +',' +root +  ')');
        
}
function applyRandColours(numberofobjects){
   numberofobjects =$('.practice-division-segment').find('.practice-div').length;//the .practice-division-segment <-- this term is called as selector.
   for(var loopcount= 0; loopcount < numberofobjects; loopcount++){ //suffix incremental operator
        $('.practice-div').eq(loopcount).css({
            'background': randRoot()
        })
        
   }
}

setInterval(applyRandColours,200);
$('.practice-div').on('click', function(){
    $(this).on('click',function(){

    })
})

function toggleX(){
    $('button').on('click', function(){
        $('.practice-div').slideToggle(); //disappears and reappears which means it changes the styles to visibility off and on.
        $('input').toggle();

        
        //$('input').show(); //used to reappear when hide() used.

    });
    
    
}
toggleX();//forToggleEvents

function upDownEvents(){
    $('.practice-div').slideUp();
    setTimeout(function(){
        $('.practice-div').slideDown();

        },3000)
}
$('body').on('dblclick', function(){
    upDownEvents();
})
//essential functions

function findingHowMuchDivs(countN){
    countN = $('body').find('div').length;
    return countN;


}
console.log(findingHowMuchDivs());
$('body h1').css({
    'color':'hotpink' //JS Codes are the highest priority.
})

function animationPure(){
    $('.practice-div').removeClass('practice-div')
    .eq(1).animate({
        width: '100%',
        height: '200px',
        opacity: 1,
        backgroundColor: 'rgb(255,255,255)' //in jQuery or any other Javascript styling as an propeerty, it's essential to use Camel Case intead of ''(inverted commas)
    }, 1500)
     //we can use this method instead of declaring selector every time.
}
$('input').on('input', function(){//"change" is used to listen when a a whole change is appeared to it like right after enter key is pressed
    animationPure();
    
    console.log('inputting');
})
function traversy(){ //traversy is moving through elements
    for(var i =0; i <10; i++){
        $('.practice-div').next().css({
            'transform':'scale(1.3)',
            'width':'8%'
            
        });
        $('.practice-div').prev().css({ //this selects the previous element in a sequence of added element. Watch how [h1] get's also inversed after selectign it as the previous element of  [prqactice-div]
            'filter':'invert(1)'
        })
        $('.practice-div').filter('.special').css({ //selects the special div elements with class [special]
            'border' : '.1rem solid white',
            'transform':'translateX(50%)'
        })
        $('.practice-division-segment').css({
            'display':'flex'

        })
        
    }
  
            $('h2').text($('.practice-division-segment').find('.special').length + ' Speacial Boxes');  // prints hoe muuch special elemtns there
        //IMPORTANT: JQuery traversy only works for parent class selectors.



        
}
//JQuery AJAX -------------Asynchornous JavaScript and XML.
//Maybe help  with gettig data from other sources to our chatBOT without reloading the content. 
//I Think webSOCKETS will be even more valueable than AJAX.
function jqeryAJAX1(val){
   $('h1').load('./assets/ststic/AJAX.txt'); //Wow! the data on text file is loaded by AJAX
}
//AJAX Error handeling
function AJAXErrorCatch(){
    $('h1').load('./assets/nothing.txt' , function(responseTxt, statusTxt){
        if(statusTxt =="success"){
            alert('successfully loaded without page reload.')
        }
        if(statusTxt == 'error'){
            $(this).html('error:' + responseTxt + ' //JQUERY AJAX ERROR HANDELING' )
        }
    })
}

$.get("./assets/ststic/ajax.txt", function(response){
    console.log(response)
});

$.post("./assets/ststic/ajax.txt", {name:'neksha'}, function(response){
    console.log(response)
})
