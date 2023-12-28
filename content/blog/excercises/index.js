function presses(phrase) {
  const keyboard = [
    ["1"],
    ["A", "B", "C", 2],
    ["D", "E", "F", "3"],
    ["G", "H", "I", 4],
    ["J", "K", "L", 5],
    ["M", "N", "O", 6],
    ["P", "Q", "R", "S", 7],
    ["T", "U", "V", 8],
    ["W", "X", "Y", "Z", 9],
    ["*"],
    [" "],
    ["#"],
  ]
  const transformedPhrase = phrase.split("")
  let counter = 0
  transformedPhrase.map(itemm => {
    keyboard.map(subItem => {
      if (subItem.indexOf(itemm) !== -1) {
        counter = counter + subItem.indexOf(itemm) + 1
      }
    })

    return counter
  })
  return counter
}

export default presses
