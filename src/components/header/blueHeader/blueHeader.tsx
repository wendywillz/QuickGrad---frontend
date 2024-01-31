import "./blueHeader.css";

interface BlueHeaderProps {
    userDetails: {
        department: string;
        faculty: string;
        university: string;
        location: string;
        matricNo: string
    }
}
const BlueHeader = (props: BlueHeaderProps) => {
    return ( 
        <div className="blue-card-header">
            <div className="user-matricNo">
                <p>{props.userDetails.matricNo}</p>
            </div>
            <div className="user-details">
                <p>{props.userDetails.department}</p>
                <p>{props.userDetails.faculty}</p>
                <p>{props.userDetails.university}</p>
                <p>{props.userDetails.location}</p>
            </div>
        </div>
     );
}
 
export default BlueHeader;