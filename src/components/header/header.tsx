import "./header.css"

// const Header = () => {
//     return ( 
//         <div className="header-bar">
//         <img src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"/>
//         <p>Welcome, New User</p>
//        </div>
//      );
// }
interface HeaderProps {
  newUser: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  return ( 
      <div className="header-bar">
          <img src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"/>
          <p>Welcome, {props.newUser}</p>
      </div>
  );
}

export default Header;