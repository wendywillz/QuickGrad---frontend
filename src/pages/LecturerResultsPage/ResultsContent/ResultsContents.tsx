import "./ResultsContents.css";

const ResultsContents = () => {
    return ( 
        <>
        <div className="results-container">
        <div className="results-header">
          <h1 className="first-h1">Results</h1>
          <span className="lists">
            <p className="first-p">Semester:</p>
            <span className="span-with-icon">
                <p>Second</p>
                <img src="/chevron-down.svg"/>
                
                </span>
            </span>
          <span className="lists">
            <p className="first-p">Session:</p>
            <span className="span-with-icon">
                <p>2022/2023</p>
                <img src="/chevron-down.svg"/>
                </span>
            </span>
          </div>
        </div>
        <div className="results-body">
          <h6 className="paper">CE 522</h6>
          </div>
        
        </>
     );
}
 
export default ResultsContents;