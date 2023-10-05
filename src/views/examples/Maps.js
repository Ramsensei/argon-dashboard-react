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
// import { useState } from "react";
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
import { useEffect, useState } from "react";
import axios from "axios";
const Maps = () => {
    const [search, setSearch] = useState();
    const [searchList, setSearchList] = useState();
    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [titulo, setTitulo] = useState("");
    const [institution, setInstitution] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + "/investigadores")
            .then(function (response) {
                console.log(response.data[Object.keys(response.data)[1]]);
                let temp = response.data[Object.keys(response.data)[1]];
                temp.push({
                    Id: -1,
                    name: "Añadir Investigador (+)"
                });
                setData(temp);
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
    }, []);
    useEffect(() => {
        data.map((item) => {
            if (item.Id == search) {
                setId(item.Id);
                setNombre(item.name);
                setTitulo(item["Titulo Academico"]);
                setInstitution(item["Institucion"]);
                setEmail(item["Email"]);
            }
        });
    }, [search]);

    const sendData = () => {
        // console.log(search);
        if (search == -1) {
            axios
                .post(process.env.REACT_APP_API_URL + `/investigador`, {
                    //Body
                    nombre: nombre,
                    titulo: titulo,
                    inst: institution,
                    email: email
                })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    if (error.response) {
                        // POST response with a status code not in range 2xx
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
        } else {
            axios
                .put(process.env.REACT_APP_API_URL + `/investigador`, {
                    //Body
                    id: id,
                    atributo: "nombre_completo",
                    nuevo_valor: nombre,
                })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    if (error.response) {
                        // POST response with a status code not in range 2xx
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
            setTimeout(
                () =>
                    axios
                        .put(process.env.REACT_APP_API_URL + `/investigador`, {
                            //Body
                            id: id,
                            atributo: "titulo_academico",
                            nuevo_valor: titulo,
                        })
                        .then(function (response) {
                            console.log(response.data);
                        })
                        .catch(function (error) {
                            if (error.response) {
                                // POST response with a status code not in range 2xx
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
                        }),
                1000
            );
            setTimeout(
                () =>
                    axios
                        .put(process.env.REACT_APP_API_URL + `/investigador`, {
                            //Body
                            id: id,
                            atributo: "institucion",
                            nuevo_valor: institution,
                        })
                        .then(function (response) {
                            console.log(response.data);
                        })
                        .catch(function (error) {
                            if (error.response) {
                                // POST response with a status code not in range 2xx
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
                        }),
                2000
            );
            setTimeout(
                () =>
                    axios
                        .put(process.env.REACT_APP_API_URL + `/investigador`, {
                            //Body
                            id: id,
                            atributo: "email",
                            nuevo_valor: email,
                        })
                        .then(function (response) {
                            console.log(response.data);
                            alert("Investigador Modificado");
                        })
                        .catch(function (error) {
                            if (error.response) {
                                // POST response with a status code not in range 2xx
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
                        }),
                3000
            );
        }
    };

    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0 mt-5">
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form">
                            <FormGroup className="mb-3">
                                <CustomDropdown
                                    title="Investigador"
                                    list={data}
                                    setSearch={setSearch}
                                />
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-id-badge" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Id"
                                        readOnly
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setId(e.target.value);
                                        }}
                                        value={id}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-user-secret" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Nombre"
                                        onChange={(e) =>
                                            setNombre(e.target.value)
                                        }
                                        value={nombre}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-graduation-cap" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Titulo Academico"
                                        onChange={(e) =>
                                            setTitulo(e.target.value)
                                        }
                                        value={titulo}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-institution" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Institucion"
                                        onChange={(e) =>
                                            setInstitution(e.target.value)
                                        }
                                        value={institution}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-at" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <div className="text-center">
                                <Button
                                    className="my-4"
                                    color="primary"
                                    type="button"
                                    onClick={sendData}
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

export default Maps;
