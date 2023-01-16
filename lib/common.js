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
  // ms = 過去の日時
  // 1 sec ===  1000 ms /  1000  =  1
  // 9 sec ===  9000 ms /  1000  =  9
  // 10sec === 10000 ms /  1000  = 10
  // 10sec === 10000 ms / 60000  =
  // 1 min === 60000 ms /  1000  = 60
  const dateTimeUnits = [
    { unit: 'second', calc: parseInt(ms / 1000) },
    { unit: 'minute', calc: parseInt(ms / 60000) },
    { unit: 'hour', calc: parseInt(ms / 3600000) },
    { unit: 'day', calc: parseInt(ms / 86400000) },
    { unit: 'month', calc: parseInt(ms / 2628028800) },
    { unit: 'year', calc: parseInt(ms / 31536345600) },
  ]

  let response = 'filter script error'

  dateTimeUnits.some(dateTimeUnit => {
    if (dateTimeUnit.calc > 0) {
      response = dateTimeUnit.calc + ' ' + dateTimeUnit.unit
      if (dateTimeUnit.calc > 1) response += 's'
    }
    return dateTimeUnit.calc === 0
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
  const response = html2canvas(document, { useCORS: true, windowWidth: 1400, logging: false }).then(canvas => {
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
