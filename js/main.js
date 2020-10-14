const btnModeDark = document.getElementById('btn-mode');

if(btnModeDark){
    btnModeDark.addEventListener('click', _ =>{
        btnModeDark.classList.toggle('active');
        document.querySelector('body').classList.toggle('active');
    })
}