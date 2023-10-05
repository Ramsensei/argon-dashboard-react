import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import {
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";



// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick, value, setValue}, ref) => (
    <>
      <InputGroup className="input-group-alternative">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className="fa fa-search" />
        </InputGroupText>
      </InputGroupAddon>
      <Form.Control
          ref={ref}
          onClick={(e) => {
              e.preventDefault();
              onClick(e);
          }}
          className="d-block"
          placeholder={children}
          onChange={(e) => setValue(e.target.value)}
          value={value}
      />
      </InputGroup>
    </>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy, value }, ref) => {

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
              {/* <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                /> */}
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value ||
                            child.props.children.toLowerCase().startsWith(value.toLowerCase())
                    )}
                </ul>
            </div>
        );
    }
);

const CustomDropdown = ({children, title, list, setSearch}) => {
  const [value, setValue] = useState("");
  return (
    <Dropdown className="w-100">
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" value={value} setValue={setValue}>
            {title}
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu} value={value} className="w-75 overflow-auto" style={{maxHeight: "400%"}}>
            {list ? list.map((item,index)=> (<Dropdown.Item key={index} onClick={()=>{setValue(item.name); setSearch(item.Id)}}>{item.name}</Dropdown.Item>)) : ""}
        </Dropdown.Menu>
    </Dropdown>)
};

export default CustomDropdown;