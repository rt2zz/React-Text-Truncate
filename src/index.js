import React, { Component } from 'react'

const isWebkit = navigator.userAgent.indexOf('AppleWebKit') != -1

const truncateText = '…'
const containerStyle = {width: '100%', height: '100%', overflow: 'hidden'}

export default class LineClamp extends Component {
  static propTypes = {
    lines: React.PropTypes.number,
    text: React.PropTypes.string,
  }

  static defaultProps = {
    lines: 1,
    text: '',
  }

  state = {
    trimmedText: null,
  }

  processRef = (scope) => {
    if (scope && !isWebkit) this.setRenderText(scope)
  }

  measureWidth(text) {
    return this.canvas.measureText(text).width
  }

  setRenderText(scope) {
    const {
      lines,
      text,
    } = this.props

    const canvas = document.createElement('canvas')
    const docFragment = document.createDocumentFragment()
    const style = window.getComputedStyle(scope)
    const font = [
      style['font-weight'],
      style['font-style'],
      style['font-size'],
      style['font-family']
    ].join(' ')

    docFragment.appendChild(canvas)
    this.canvas = canvas.getContext('2d')
    this.canvas.font = font

    const scopeWidth = scope.getBoundingClientRect().width

    // return if display:none or if all text fits
    if (scopeWidth === 0 || scopeWidth >= this.measureWidth(text)) {
      return
    }

    let childText = ''
    let currentPos = 1
    let maxTextLength = text.length
    let truncatedText = ''
    let splitPos = 0
    let startPos = 0
    let displayLine = lines
    let width = 0
    let lastIsEng = false
    let lastSpaceIndex = -1

    while (displayLine--) {
      let ext = displayLine ? '' : truncateText + ' ' + childText
      while (currentPos <= maxTextLength) {
        truncatedText = text.substr(startPos, currentPos)
        width = this.measureWidth(truncatedText + ext)
        if (width < scopeWidth) {
          splitPos = text.indexOf(' ', currentPos + 1)
          if (splitPos === -1) {
            currentPos += 1
            lastIsEng = false
          } else {
            lastIsEng = true
            currentPos = splitPos
          }
        } else {
          do  {
            currentPos--
            truncatedText = text.substr(startPos, currentPos)
            if (truncatedText[truncatedText.length - 1] === ' ') {
              truncatedText = text.substr(startPos, currentPos - 1)
            }
            if (lastIsEng) {
              lastSpaceIndex = truncatedText.lastIndexOf(' ')
              if (lastSpaceIndex > -1) {
                currentPos = lastSpaceIndex
                truncatedText = text.substr(startPos, currentPos)
              }
            }
            width = this.measureWidth(truncatedText + ext)
          } while (width >= scopeWidth)
          startPos += currentPos
          break
        }
      }

      if (currentPos >= maxTextLength) {
        startPos = maxTextLength
        break
      }
    }

    if (startPos === maxTextLength) {
      return text
    } else {
      this.setState({ trimmedText: text.substr(0, startPos) + truncateText })
      return
    }
  }

  render() {
    const { lines, text, ...domProps } = this.props
    let style = !isWebkit
      ? containerStyle
      : { ...containerStyle, display: '-webkit-box', WebkitLineClamp: lines, 'something': 1, WebkitBoxOrient: 'vertical' }

    return (
      <div {...domProps} ref={this.processRef} style={style}>
        {this.state.trimmedText || text}
      </div>
    )
  }
}
