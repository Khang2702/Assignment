const header = 'header'
function showModal(modalId, display = false){
    let modal = document.getElementById(modalId)
    if(display){
        modal.style.display= 'none'
    }else{
        modal.style.display= 'flex'
    }
}
function hideModal(modalId){
    let modal = document.getElementById(modalId)
    modal.style.display= 'none'
}
function headerDisplay(){
    let headerId = document.getElementById(header)
    let currentHeight = headerId.clientHeight === 46;
    if(currentHeight){
        headerId.style.height = 'auto';
    }else{
        headerId.style.height = '46px'
    }
}

function hideHeader(){
    let headerId = document.getElementById(header)
    headerId.style.height = '46px'

}