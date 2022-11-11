export default {
  // document.getElementsByClassName("v-show-content").item("innerHTML")
  setHeader(element, headerData) {
    element.item(0).insertAdjacentHTML('afterbegin', headerData.html)
    const header = document.getElementById('project-header')
    this.setIdStyles(headerData.style.id)
    return header
  },
  setIdStyles(idStyle) {
    idStyle.forEach(id => {
      const idDoc = document.getElementById(id.key)
      idDoc.style.cssText = id.css
    })
  },
  setMenu(headerElement, menuData) {
    headerElement.insertAdjacentHTML('afterbegin', menuData.html)
  },
}
