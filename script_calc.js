window.onload = () => {

    const buttons = document.getElementById('buttons'),
    clear = document.getElementById('clear'), 
    answer = document.getElementById('answer');
    

    // clicking on each button 

    buttons.addEventListener('click', function(e) {

       

        if(e.target.nodeName === 'LI') {

            // get value of button

            const v = e.target.innerHTML;
            
            if(v === '=') {
                try {
                    answer.innerHTML = eval(answer.innerHTML);

                } catch(e) {
                    answer.innerHTML=e.message;
                }
            }else {
                answer.innerHTML += v;
            }

        }

        
    })

   
    function removeHandler(){
        const button = document.getElementByClass('button');
        button.removeEventListener('click', once);
   
    }

    clear.addEventListener('click', function() {
        answer.innerHTML = '';
    })

};