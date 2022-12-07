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
