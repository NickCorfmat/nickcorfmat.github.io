import './ResumeSection.css'

const ResumeSection = () => {

    return (
        <div className='resume-section'>
            <iframe
                src="Assets/docs/Nicolas_Corfmat_Resume_2025.pdf"
                title="Resume PDF"
                className="resume-frame"
            />
        </div>
    )
}

export default ResumeSection