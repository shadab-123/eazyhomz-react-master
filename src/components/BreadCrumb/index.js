import { Link, useLocation } from "react-router-dom";
import './breadcrumb.scss'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames1 = location.pathname.split("/").filter((x) => x);
  const pathnames = pathnames1.map((p)=>{
    const path = p.replace(/_/g, ' ');
    return path
  })
  let breadcrumbPath = "";
  
  return (
    <div className="breadcrumbs">
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        breadcrumbPath += `> ${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={breadcrumbPath}>  <KeyboardArrowRightIcon fontSize="small" />  {name}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;