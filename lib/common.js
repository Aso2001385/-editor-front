import html2canvas from 'html2canvas'

export function nestClone(materials) {
  return JSON.parse(JSON.stringify(materials))
}

export function getDiff(ms) {
  const dateTimeUnits = [
    { singular: 'second', plural: 'seconds', calc: parseInt(ms / 1000) },
    { singular: 'minute', plural: 'minutes', calc: parseInt(ms / 60000) },
    { singular: 'hour', plural: 'hours', calc: parseInt(ms / 3600000) },
    { singular: 'day', plural: 'days', calc: parseInt(ms / 86400000) },
    { singular: 'month', plural: 'months', calc: parseInt(ms / 2628028800) },
    { singular: 'year', plural: 'years', calc: parseInt(ms / 31536345600) },
  ]

  let response = 'filter script error'

  dateTimeUnits.forEach(dateTimeUnit => {
    if (dateTimeUnit.calc > 0) {
      response = dateTimeUnit.calc
      if (dateTimeUnit.calc === 1) {
        response += ' ' + dateTimeUnit.singular
      } else {
        response += ' ' + dateTimeUnit.plural
      }
    }
  })

  return response
}

export function tagOrder(designContents) {
  return {
    body: designContents.body,
    h1: designContents.h1,
    h2: designContents.h2,
    h3: designContents.h3,
    h4: designContents.h4,
    h5: designContents.h5,
    h6: designContents.h6,
    p: designContents.p,
    table: designContents.table,
    list: designContents.list,
  }
}

export function getPreview(document) {
  const response = html2canvas(document, { useCORS: true, windowWidth: 1400 }).then(canvas => {
    return canvas.toDataURL()
  })
  return response
}
