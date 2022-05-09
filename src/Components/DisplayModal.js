export const displayModal = () => {
    const modal = document.querySelector('.modal');
    
    if(modal.style.display === 'block') {
        document.querySelector('.background-modal').style.display = 'none'
        modal.style.display = 'none'
    } else {
        document.querySelector('.background-modal').style.display = 'block'
        modal.style.display = 'block'
    }
}