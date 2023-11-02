import { Breadcrumb, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Breadcrumbs({ urls, active }) {
  const navigate = useNavigate();

  const handleItemClick = (route) => {
    navigate(route);
  };
  return (
    <div className="breadcrumbs">
      <Breadcrumb>
        {urls.map((el) => (
          <Breadcrumb.Item
            key={el.label}
            onClick={() => handleItemClick(el.route)}
          >
            {el.label}
          </Breadcrumb.Item>
        ))}

        <Breadcrumb.Item active>{active}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Breadcrumbs;
