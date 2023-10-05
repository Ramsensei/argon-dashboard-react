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

// reactstrap components
import CustomDropdown from "components/Dropdown/Dropdown";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Col,
} from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [investigators, setInvestigators] = useState([]);
  const [projects, setProjects] = useState([]);
  const [idInv, setIdInv] = useState(0);
  const [idPry, setIdPry] = useState(0);
  useEffect(() => {
        
    axios
        .get(process.env.REACT_APP_API_URL + "/investigadores")
        .then(function (response) {
            console.log(response.data[Object.keys(response.data)[1]]);
            setInvestigators(response.data[Object.keys(response.data)[1]]);
        })
        .catch(function (error) {
            if (error.response) {
                // GET response with a status code not in range 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // no response
                console.log(error.request);
                // instance of XMLHttpRequest in the browser
                // instance ofhttp.ClientRequest in node.js
            } else {
                // Something wrong in setting up the request
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
      setTimeout(() => axios
        .get(process.env.REACT_APP_API_URL + "/proyectos")
        .then(function (response) {
            console.log(response.data[Object.keys(response.data)[1]]);
            setProjects(response.data[Object.keys(response.data)[1]]);
        })
        .catch(function (error) {
            if (error.response) {
                // GET response with a status code not in range 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // no response
                console.log(error.request);
                // instance of XMLHttpRequest in the browser
                // instance ofhttp.ClientRequest in node.js
            } else {
                // Something wrong in setting up the request
                console.log("Error", error.message);
            }
            console.log(error.config);
        }),1000);
}, []);

const sendAsignation = () => {
  axios.post(
    process.env.REACT_APP_API_URL + `/associar_inv_proy`,
    {
      //Body
      id_pry: idPry,
      id_inv: idInv,
    }
  ).then(function (response) {
  
    console.log(response.data);
    alert("Proyecto asociado a investigador");
  
  }).catch(function (error) {
    if (error.response) { // POST response with a status code not in range 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) { // no response
      console.log(error.request);
      // instance of XMLHttpRequest in the browser
      // instance ofhttp.ClientRequest in node.js
    } else { // Something wrong in setting up the request
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0 mt-5">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <CustomDropdown title="Investigador" list={investigators} setSearch={setIdInv}/>
              </FormGroup>
              <FormGroup className="mb-3">
                <CustomDropdown title="Proyecto" list={projects} setSearch={setIdPry}/>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={sendAsignation}>
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

export default Login;
