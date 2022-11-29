export default {
  getDiff(ms) {
    const dateTimeUnits = [
      { singular: 'second', plural: 'seconds', calc: parseInt(ms / ) },
      { singular: 'minute', plural: 'minutes', calc: parseInt(ms / ) },
      { singular: 'hour', plural: 'hors', calc: parseInt(ms / ) },
      { singular: 'day', plural: 'days', calc: parseInt(ms / ) },
      { singular: 'month', plural: 'months', calc: parseInt(ms / ) },
      { singular: 'year', plural: 'years', calc: parseInt(ms / ) },
    ]

    let response = 'aaa'

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
  },
}
