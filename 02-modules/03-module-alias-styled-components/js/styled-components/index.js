const styled = {
  h1: function (styles) {
    return (content) => `<h1 style="${styles}">${content}</h1>`
  },
  h2: function (styles) {
    return (content) => `<h2 style="${styles}">${content}</h2>`
  },
  div: function (styles) {
    return (content) => `<div style="${styles}">${content}</div>`
  }
}

export default styled
