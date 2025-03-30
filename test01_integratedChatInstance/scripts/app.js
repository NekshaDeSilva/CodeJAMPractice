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
