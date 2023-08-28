interface HeadingTextProps {
  text: string
  emphasis?: string
}

const loopThroughWordsAndHighlightEmphasis = (
  splitText: string[],
  emphasisValue?: string
) => {
  return (
    <h1 className='text-white text-4xl lg:text-5xl font-bold'>
      {splitText.map((item: string, index, number) => {
        if (splitText[index] === emphasisValue) {
          return (
            <span key={index} className='text-light-green select-light-green'>
              {item}{' '}
            </span>
          )
        } else {
          return (
            <span key={index} className='select-light-green'>
              {item + ' '}
            </span>
          )
        }
      })}
    </h1>
  )
}

const HeadingText = ({ text, emphasis }: HeadingTextProps) => {
  const splitText = text.split(' ')
  const withEmphasisValue = emphasis
    ? loopThroughWordsAndHighlightEmphasis(splitText, emphasis)
    : ''

  return (
    <div>
      {emphasis ? (
        withEmphasisValue
      ) : (
        <h1 className='text-white text-4xl lg:text-5xl font-bold select-light-green'>
          {text}
        </h1>
      )}
    </div>
  )
}

export default HeadingText
