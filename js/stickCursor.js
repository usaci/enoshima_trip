//カーソルが追従する
const cursor = document.querySelector('.cursor');
function stickCursor(){
    document.addEventListener('mousemove', (e)=>{
        cursor.style.transform = 'translate(' + e.clientX + 'px, ' + parseInt( window.scrollY + e.clientY ) + 'px)';
    })
    //aタグにカーソルを重ねたときにカーソルを大きくする
    const anchor = document.querySelectorAll('a');
    anchor.forEach((e)=>{
        
        e.addEventListener('mouseover', ()=>{
            cursor.classList.add('isHover');
            console.log(e);
        })
        e.addEventListener('mouseout', ()=>{
            cursor.classList.remove('isHover');
            console.log('out!');
        })
    })

}

stickCursor();