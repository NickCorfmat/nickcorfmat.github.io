import './Languages.css'
import { languages } from '../../../public/Assets/personalData'

const Languages = () => {
  return (
    <div className='languages'>
        <h2>Languages</h2>
        <div className='languages-list'>
            {languages.map((language, index) => (
                <span key={index} className='language-tag'>{language}</span>
            ))}
        </div>
    </div>
  )
}

export default Languages
