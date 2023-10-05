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
import { createRef, useState } from "react";
// react component that copies the given text inside your clipboard
// reactstrap components
import {
  Button,
  Card, CardBody,
  FormGroup,
  Form, InputGroup, Col
} from "reactstrap";
import axios from "axios";
// core components

const Icons = () => {
  const [copiedText, setCopiedText] = useState();

  const fileRef = createRef();

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    setSelectedFiles(event.target.files);
  };

  const sendFiles = (event) => {
    const formData = new FormData();
    for (let index = 0; index < selectedFiles.length; index++) {
      formData.append('file', selectedFiles[index]);
    }
    console.log(formData);
    axios.post(process.env.REACT_APP_API_URL + '/upload', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0 mt-5">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <input
                    placeholder="Email"
                    multiple
                    type="file"
                    onChange={handleFileUpload}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={() => {sendFiles(); alert("Datos Cargados")}}>
                  Upload
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Icons;
