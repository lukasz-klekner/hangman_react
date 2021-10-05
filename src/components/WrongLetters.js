const WrongLetters = ({ wrongLetters }) => (
  <div className='wrong-letters-container'>
    <div>
      {wrongLetters.length > 0 && <p>Wrong</p>}
      {wrongLetters
        .map((letter, i) => <span key={i}>{letter}</span>)
        .reduce(
          (prev, current) => (prev === null ? [current] : [prev, ',', current]),
          null
        )}
    </div>
  </div>
)

export default WrongLetters
