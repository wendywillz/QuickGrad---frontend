import "./blueHeader.css";

interface BlueHeaderProps {
    session: string;
    userDetails: {
        department: string;
        faculty: string;
        university: string;
        location: string;
    }
}
const BlueHeader = (props: BlueHeaderProps) => {
    return ( 
        <div className="blue-card-header">
            <div className="session">
                <p>{props.session}</p>
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