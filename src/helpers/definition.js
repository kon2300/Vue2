const generate = () => {
  const allBirthYears = []
  for (let y = 2020; y > 1921; y--) {
    if (y > 2018) {
      allBirthYears.push( { year: y, label: `${y}年 (令和${y - 2018}年)` } )
    } else if (y > 1988) {
      allBirthYears.push( { year: y, label: `${y}年 (平成${y - 1988}年)` } )
    } else if (y > 1925) {
      allBirthYears.push( { year: y, label: `${y}年 (昭和${y - 1925}年)` } )
    } else if (y > 1911) {
      allBirthYears.push( { year: y, label: `${y}年 (大正${y - 1911}年)` } )
    }
  }
  return allBirthYears
}

export { generate }
