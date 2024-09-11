const DS_CLASS = 'disabled-scroll'

export const disableScroll = () => {
  const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
  document.documentElement.classList.add(DS_CLASS)
  document.documentElement.style.paddingRight = paddingOffset
}

export const enableScroll = offsetElementID => {
  document.documentElement.classList.remove(DS_CLASS)
  document.documentElement.style.paddingRight = 0

  if (offsetElementID) {
    const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    document.querySelector(`#${offsetElementID}`).style.paddingLeft = paddingOffset
  }
}
