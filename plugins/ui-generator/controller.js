import Headers from '~/assets/ui-components/header-parts/header.json'
import Utility from '~/plugins/ui-generator/utility.js'
export default {
  uiGenerator() {
    const BASE_ELEMENT = document.getElementsByClassName('v-note-show')
    const header = Utility.setHeader(BASE_ELEMENT, Headers[0])
    console.log(header)
  },
}
