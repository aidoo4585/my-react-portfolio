import './index.scss'

const AnimatedLetters = ({letterClass, strArray, index}) => { 
    return( 
        <span /*Creating inline spans to form word, return char in the array*/> 
        { 
            strArray.map((char, i) => (
                <span key ={strArray.index} className={`${letterClass} _${i + index}` }> 
                    {char}
                </span> 
            ))
        }
        </span>
    )
}

export default AnimatedLetters;