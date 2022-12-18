export function styleSetter(tags) {
  const root = document.querySelector(':root')
  tags.forEach(tag => {
    tag.attributes.forEach(attribute => {
      root.style.setProperty(`--${tag.name}-${attribute.name}`, attribute.value + attribute.unit)
    })
  })
}
