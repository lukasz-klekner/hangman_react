const Word = ({ selectedWord, correctLetters }) => (
  <div className='word'>
    {selectedWord.split('').map((letter, i) => {
      return (
        <span className='letter' key={i}>
          {correctLetters.includes(letter) ? letter : ''}
        </span>
      )
    })}
  </div>
)

export default Word
