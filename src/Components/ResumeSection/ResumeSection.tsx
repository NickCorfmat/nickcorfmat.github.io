import './ResumeSection.css'

const ResumeSection = () => {

    return (
        <div className='resume-section'>
            <div className="resume-frame-wrapper">
                <iframe
                src="media/docs/Nicolas_Corfmat_Resume_2025.pdf"
                className="resume-frame"
                title="Resume"
                />
            </div>
        </div>
    )
}

export default ResumeSection