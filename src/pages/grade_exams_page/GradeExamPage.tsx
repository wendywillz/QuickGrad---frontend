
import "./GradeExamPageStyle.css"
import TableHeadings from "./GradeTableHeadings";
import TableTitle from "./GradeTableTitle";
import TableRow from "./GradeTableRow";




function GradeExamPage() {
 
 return (
   <>
      <main className="gade-exams-page-main-section">
           <div className="grade-exams-page-main-section-title-container">
               <h1 className="grade-exams-page-main-section-title">GRADE EXAMS</h1>
               <form className="grade-exams-page-top-session-form" action="#" method="post">
                   <label className="grade-exams-page-top-session-form-label" htmlFor="sessionYearInput">Sort by Session:</label>
                   <select name="sessionYear" id="sessionYearInput" className="grade-exams-page-top-session-form-inputs">
                       <option value="2022/2023">2022/2023</option>
                       <option value="2021/2022">2021/2022</option>
                       <option value="2020/2021">2020/2021</option>
                       <option value="2019/2020">2019/2020</option>
                       <option value="2018/2019">2018/2019</option>
                       <option value="2017/2018">2017/2018</option>
                   </select>
               </form>
           </div>
           
           <div className="grade-exams-page-table-title-and-contents">

           <TableTitle/>
       
               <div className="grade-exams-page-table-container">
                   
                   <table className="grade-exams-page-table-contents">
                   <TableHeadings/>
                   <TableRow/>
                   <TableRow/>
                   <TableRow/>
                   </table>
               </div>

           </div>
           <div className="grade-exams-page-table-title-and-contents">

           <TableTitle/>
       
               <div className="grade-exams-page-table-container">
                   
                   <table className="grade-exams-page-table-contents">
                   <TableHeadings/>
                   <TableRow/>
                   <TableRow/>
                   <TableRow/>
                   </table>
               </div>

           </div>
       </main>
   </>
   
 );
}

export default GradeExamPage;

//  <div className="hiddenfunction">{increaseCount()}</div>
// <div className="hiddenfunction">{increaseCount()}</div>