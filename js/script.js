const dropList=document.querySelectorAll(".drop-list select"),
getButton=document.querySelector("form button");

for(let i=0;i<dropList.length;i++){
    for(currency_code in country_code){
        //selecting USD by default as FROM currency and LKR as TO currency
        let selected;
        if(i==0){
            selected=currency_code=="USD" ? "selected" : "";
        }else if(i==1){
            selected = currency_code == "LKR" ? "selected" : "";
        }
        //creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}"${selected}>${currency_code}</option>`;
        //inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend",optionTag);
    }
}

getButton.addEventListener("click", e=>{
    e.preventDefault();//preventing form from submitting
    getExchangeRate();
})
