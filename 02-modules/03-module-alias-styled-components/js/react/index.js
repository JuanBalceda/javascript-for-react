function component(strings, ...dynamicValues) {
  return (data) => {
    let content = strings.slice()

    dynamicValues.forEach((value, index) => {
      content[index] += data[value]
    })

    return content.join('')
  }
}

export {
  component
}