function takeANumber(katzDeli, name) {
katzDeli.push (name)
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name)+1} in line.`
}

function nowServing (katzDeliLine) {
  if katzDeliLine.length === 0 {
    return "There is nobody waiting to be served"
  }
}
