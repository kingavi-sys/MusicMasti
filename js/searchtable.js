function search() {
    let searchword= document.getElementById('myinput').value.toLowerCase();
    let mytable= document.getElementById('searchtable');
    let tr= mytable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td= tr[i].getElementsByTagName('td')[1];

        if(td){
            let textvalue= td.textContent || td.innerHTML;
            
            if(textvalue.toLowerCase().indexOf(searchword) > -1){
                tr[i].style.display="";}
            else{
                    tr[i].style.display= "none";
                }

            }
        }
}