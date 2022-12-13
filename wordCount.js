function show() {
            
    let count_Char = document.getElementById("textarea").value.length;
    if(count_Char){
        document.getElementById("countCharacters").innerHTML = count_Char;
    }else{
        document.getElementById("countCharacters").innerHTML = 0;
    }

    let count_Words = document.getElementById("textarea").value;
    count_Words = count_Words.match(/\w+/g);
    if (count_Words) {
        document.getElementById("countWords").innerHTML = count_Words.length;
    }else {
        document.getElementById("countWords").innerHTML = 0;
    }

}