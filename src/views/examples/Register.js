/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import CustomDropdown from "components/Dropdown/Dropdown";
import { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Col,
} from "reactstrap";

const Register = () => {
  const [articles, setArticles] = useState([{id:1, name:"Apa"}, {id:2, name:"Yolo"}]);
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0 mt-5">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <CustomDropdown title="Articulo" list={articles}/>
              </FormGroup>
              <FormGroup className="mb-3">
                <CustomDropdown title="Projecto" list={articles}/>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Asociar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
