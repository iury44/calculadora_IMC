export const AlertError = {
  element: document.querySelector('.alert-error'),
  open(){
   this.element.classList.add('openError')
  },
  close(){
    this.element.classList.remove('openError')
  }
}
