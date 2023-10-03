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
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from "reactstrap";

const Profile = () => {
    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0 mt-5">
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <CustomDropdown title="Proyectos" />
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Id"
                                        readOnly
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Titulo"
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Año de Inicio"
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Duracion (meses)"
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-search" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Area de Conocimiento"
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    color="primary"
                                    type="button"
                                >
                                    Crear o Modificar
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default Profile;
