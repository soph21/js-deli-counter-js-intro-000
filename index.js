function takeANumber(katzDeli, name) {
katzDeli.push (name)
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name)+1} in line.`
}

function nowServing (deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }  else {
    let a = deliLine[0]
    deliLine.shift
    return `Currently service ${a}.`
  }
}
