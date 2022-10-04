function imgchange(value){
    if(value=="rz60"){
        imgq.src = "./jpg/2.jpg";
        qtext.innerHTML = "Стандартное качество - подходит для 90% задачь, точность до 0,4-0,2мм"
    }
    else if (value == "rz80"){
        imgq.src = "./jpg/4.jpg";
        qtext.innerHTML = "Грубое качество - для сварных, неточных деталей, точность - 0,5-0,7мм"
    }

    else{
        imgq.src = "./jpg/1.jpg";
        qtext.innerHTML = "Высокое качестко - для точных изделий, точность до 0,1мм"
    }
}
