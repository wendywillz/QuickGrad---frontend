import "./GradeExamPageStyle.css"
function GradeTableHeadings(){
    return(
        <>
        <tr className="grade-exams-page-table-header-row">
                            <th className="grade-exams-page-table-header">Course Code</th>
                            <th className="grade-exams-page-table-header">Submissions</th>
                            <th className="grade-exams-page-table-header">Graded</th>
                            <th className="grade-exams-page-table-header">Not Graded</th>
                            <th className="grade-exams-page-table-header">Exam Status</th>     
                          </tr> 
        </>
    )
}

export default GradeTableHeadings