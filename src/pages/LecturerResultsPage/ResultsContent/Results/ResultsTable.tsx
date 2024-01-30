import "./ResultsTable.css";

const ResultsTable = () => {
    return ( 
        <section className="table-section">
        <div className="table">
           <table >
        <thead >
            <tr >
                <th >S/N</th>
                <th>Student ID</th>
                <th >Department</th>
                <th >Exam Score</th>
            </tr>
        </thead>
        <tbody >
            <tr >
                <td >1</td>
                <td >123456</td>
                <td >Computer Science</td>
                <td>85</td>
            </tr>
            <tr>
                <td>2</td>
                <td>789012</td>
                <td>Electrical Engineering</td>
                <td>92</td>
            </tr>
        </tbody>
    </table>
        </div>
        <div>
           <table className="results-table">
        <thead>
            <tr>
                <th>S/N</th>
                <th>Student ID</th>
                <th>Department</th>
                <th>Exam Score</th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td>1</td>
                <td>123456</td>
                <td>Computer Science</td>
                <td>85</td>
            </tr>
            <tr>
                <td>2</td>
                <td>789012</td>
                <td>Electrical Engineering</td>
                <td>92</td>
            </tr>
        </tbody>
    </table>
        </div>
        </section>
     );
}
 
export default ResultsTable;