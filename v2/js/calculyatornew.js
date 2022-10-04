
let grn_min = 65; //грн-минута

function myCalculyator(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', './basa.json');
    xhr.responseType = 'json';
    xhr.send();
    
    // тело ответа 
    xhr.onload = function() {
        let mater = xhr.response;
        clac(mater);
    };
};

function clac(mater){

    console.log(mater)
    res_sp.innerHTML = "думаю...";
    
    let mat = document.getElementById('materials_choice').value;
    let tin = document.getElementById('thickness_choice').value;
    let cond = document.getElementById('quality_choice').value;
    let mery = document.getElementById('length_choice').value;    

    let result = (1000/ mater[mat][cond][tin]) * grn_min * mery;
    result = Math.floor(result * 10)/10;
    setTimeout(function() {
        if (result<600){
            res_sp.innerHTML = 'Фактическая стоимость: ' + result + ' грн.';
            calcMess.innerHTML = 'Минимальная стоимость заказа - 1000грн'
        }
        else{
             res_sp.innerHTML = 'Стоимость заказа: ' + result + ' грн';
             calcMess.innerHTML = null;
        }
    }, 700);
}

// function imgchange(value){
//     if(value=="rz60"){
//         imgq.src = "./jpg/2.jpg";
//         qtext.innerHTML = "Стандартное качество - подходит для 90% задачь, точность до 0,4-0,2мм"
//     }
//     else if (value == "rz80"){
//         imgq.src = "./jpg/4.jpg";
//         qtext.innerHTML = "Грубое качество - для сварных, неточных деталей, точность - 0,5-0,7мм"
//     }

//     else{
//         imgq.src = "./jpg/1.jpg";
//         qtext.innerHTML = "Высокое качестко - для точных изделий, точность до 0,1мм"
//     }
// }
