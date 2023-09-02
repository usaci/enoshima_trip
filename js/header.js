function menu__isOpened(e){
    //ハンバーガーメニューの挙動制御
    const hamburger = document.querySelectorAll('#hamburger_menu_list li');
    var e = document.getElementById('menu_btn');
    const menu = document.getElementById('hamburger_menu');
    if(!menu.classList.contains('is_opened')){
        menu.classList.add('is_opened');
        document.body.classList.add('is_fixed');
        console.log('is_opened');
        hamburger.forEach((e)=>{
            e.classList.add('is_animated');
        })
    }else{
        menu.classList.remove('is_opened');
        document.body.classList.remove('is_fixed');
        console.log('is_closed');
        hamburger.forEach((e)=>{
            e.classList.remove('is_animated');
        })
        
    }
    
    console.log(e);
}