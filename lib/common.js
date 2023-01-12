import html2canvas from 'html2canvas'

export function nestClone(materials) {
  return JSON.parse(JSON.stringify(materials))
}

export function formatter(date, format = 'YYYY年MM月DD日') {
  format = format.replace(/YYYY/, date.getFullYear())
  format = format.replace(/MM/, date.getMonth() + 1)
  format = format.replace(/DD/, date.getDate())
  return format
}

export function dateTimeFormatter(dateTime, format = 'YYYY年MM月DD日hh時mm分ss秒') {
  format = format.replace(/YYYY/, dateTime.getFullYear())
  format = format.replace(/MM/, dateTime.getMonth() + 1)
  format = format.replace(/DD/, dateTime.getDate())
  format = format.replace(/hh/, dateTime.getHours())
  format = format.replace(/mm/, dateTime.getMinutes())
  format = format.replace(/ss/, dateTime.getSeconds())

  return format
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

export function exceptCopy(material, keys) {
  const obj = nestClone(material)
  keys.forEach(key => delete obj[key])
  return obj
}

export function onlyCopy(material, keys) {
  const obj = nestClone(material)
  const onlyKeys = Object.keys(material).filter(function (v) {
    return !keys.includes(v)
  })
  onlyKeys.forEach(key => delete obj[key])
  return obj
}

export function getPreview(document) {
  const response = html2canvas(document, { useCORS: true, windowWidth: 1400 }).then(canvas => {
    return canvas.toDataURL()
  })
  return response
}

export function neoLog(name, material) {
  console.log(name)
  console.log(material)
}

export function orderBy(
  materials,
  key = String,
  mode = Boolean,
  asc = Boolean,
  sub = { keys: Array, mode: Boolean, asc: Boolean }
) {
  // 全部昇順

  switch (mode) {
    case 'num':
      materials.sort((x, y) => {
        if (x[key] - y[key] !== 0 || !(sub.keys instanceof Array)) return x[key] - y[key]

        // 二つ目のソート条件
        sub.keys.forEach(e => {
          x = x[e]
          y = y[e]
        })

        switch (sub.mode) {
          case 'num':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x - y : y - x
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y - x : x - y
            }

          case 'str':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.localeCompare(y, 'ja') : y.localeCompare(x, 'ja')
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.localeCompare(x, 'ja') : x.localeCompare(y, 'ja')
            }
          default:
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.length - y.length : y.length - x.length
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.length - x.length : x.length - y.length
            }
        }
      })
      break
    case 'str':
      materials.sort((x, y) => {
        if (x[key].localeCompare(y[key], 'ja') !== 0 || !(sub.keys instanceof Array))
          return x[key].localeCompare(y[key], 'ja')

        sub.keys.forEach(e => {
          x = x[e]
          y = y[e]
        })

        switch (sub.mode) {
          case 'num':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x - y : y - x
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y - x : x - y
            }

          case 'str':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.localeCompare(y, 'ja') : y.localeCompare(x, 'ja')
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.localeCompare(x, 'ja') : x.localeCompare(y, 'ja')
            }
          default:
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.length - y.length : y.length - x.length
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.length - x.length : x.length - y.length
            }
        }
      })

      break
    default:
      materials.sort((x, y) => {
        if (x[key].length - y[key].length !== 0 || !(sub.keys instanceof Array)) return x[key].length - y[key].length

        sub.keys.forEach(e => {
          x = x[e]
          y = y[e]
        })

        switch (sub.mode) {
          case 'num':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x - y : y - x
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y - x : x - y
            }

          case 'str':
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.localeCompare(y, 'ja') : y.localeCompare(x, 'ja')
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.localeCompare(x, 'ja') : x.localeCompare(y, 'ja')
            }
          default:
            if (asc) {
              // 昇順(リバースなし)なら
              return sub.asc ? x.length - y.length : y.length - x.length
            } else {
              // 降順(リバースあり)なら
              return sub.asc ? y.length - x.length : x.length - y.length
            }
        }
      })

      break
  }

  if (!asc) materials.reverse()

  return materials
}

export function arrayOrderBy(materials, mode = Boolean, asc = Boolean) {
  switch (mode) {
    case 'num':
      materials.sort((x, y) => {
        return x - y
      })
      break
    case 'str':
      materials.sort((x, y) => {
        return x.localeCompare(y, 'ja')
      })

      break
    default:
      materials.sort((x, y) => {
        return x.length - y.length
      })
      break
  }

  if (!asc) materials.reverse()
  return materials
}
