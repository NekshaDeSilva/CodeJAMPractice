var val = 232;
function addMorew(div){
    if(val > 470){
        $('.cendiv_usrdiv').eq(1).css({
            'justify-content':'flex-start',
            'overflow-y':'scroll',
            'overflow-x':'hidden',
            'height':`470px`,
            'max-height':`470px`
        })
        $('.usr_gen').css({
           
            
            'height':`470px`,
            'max-height':`470px`
        })
        $('.cendiv_usrdiv').eq(1).append('<div class="inputDiv inputDivAdd HGhjgjsyig"><input type="text" placeholder="Enter by Here."><span>Additionals</span></div>')
    }else{
        
    }
    div = $('.cendiv_usrdiv');
    val += 72;

    $('.cendiv_usrdiv').css({
        'max-height': `232px`
    })
    $('.cendiv_usrdiv').eq(1).append('<div class="inputDiv inputDivAdd HGhjgjsyig"><input type="text" placeholder="Enter by Here."><span>Additionals</span></div>')
    .css({
        'height': `${val}px`

    })
    $('.inputDivAdd').removeClass('HGhjgjsyig')
    div.eq(1).css({
            'max-height': `${val}px`
        })
    setTimeout(()=>{
        
        
    },1000)
    
}
//Async

function ObjectGen(vals, type) {
    this.vals = vals;
    this.type = type;
}
function clickBtn(){
    function checkFd(){
        return new Promise ((resolve, reject)=>{
        const result = runTheParadigm();
        if(result){
            resolve('Success');
            console.log('success');
            defineTheRadialValeuRgb();

        }else{
            reject('Rejected');
            console.log('failed');
            alert('Please Enter Values Required.');

        }
    });
    }
    checkFd()
    .then((response)=>{
        console.log('success', response);
            defineTheRadialValeuRgb();
            

    })
    .catch((error)=>{
        console.log('failed', error);
        alert('Please Enter Values Required. and try again');
    })
    

    function runTheParadigm(){
        var numberOfElem = $('.cendiv_usrdiv').find('.inputDiv').length;
        for(let i = 0; i<numberOfElem ; i++ ){
            var changeVal = $('.inputDiv').eq(i).find('input').val();
            if(!changeVal){
                return false;
            }else{
                if(i === (numberOfElem-1)){
                    return true;
                }else{
                    //doNothing
                }
            }
        }
    }
}
function defineTheRadialValeuRgb(valk, valtype){

    var numberOfElem = $('.cendiv_usrdiv').find('.inputDiv').length;
    for(let i = 0; i<numberOfElem ; i++ ){
        valk = $('.inputDiv').eq(i).find('input').val();
        valtype = $('.inputDiv').eq(i).find('input').attr('type');
        var mainObject ={};
        mainObject[`${i}Val`] = new ObjectGen(vals = valk, type = valtype); //we have to use pre declared mainObject here bacause it's essential when assignin g dynamic prperties.
        console.log(mainObject);

    }

}