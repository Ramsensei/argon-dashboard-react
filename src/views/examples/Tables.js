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
import { useState, useEffect } from "react";
import axios from "axios";
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

const Tables = () => {
    const [search, setSearch] = useState();
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [anno, setAnno] = useState("");
    const [revista, setRevista] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + "/publicaciones")
            .then(function (response) {
                console.log(response.data[Object.keys(response.data)[1]]);
                let temp = response.data[Object.keys(response.data)[1]];
                temp.push({
                    Id: -1,
                    name: "Añadir Publicacion (+)",
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
                setTitulo(item.name);
                setAnno(item["Año de Publicacion"]);
                setRevista(item["Nombre de la Revista"]);
            }
        });
    }, [search]);

    const sendData = () => {
        // console.log(search);
        if (search == -1) {
            const resultadosOrdenados = data.sort((a,b) =>{
                return Number.parseInt(b.Id) - Number.parseInt(a.Id)
              })
            axios
                .post(process.env.REACT_APP_API_URL + `/publicacion`, {
                    //Body
                    id: resultadosOrdenados[0].Id + 1,
                    nombre: revista,
                    titulo: titulo,
                    anno: anno,
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
                .put(process.env.REACT_APP_API_URL + `/publicacion`, {
                    //Body
                    id: id,
                    atributo: "titulo_publicacion",
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
                });
            setTimeout(
                () =>
                    axios
                        .put(process.env.REACT_APP_API_URL + `/investigador`, {
                            //Body
                            id: id,
                            atributo: "anno_publicacion",
                            nuevo_valor: anno,
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
                            atributo: "nombre_revista",
                            nuevo_valor: revista,
                        })
                        .then(function (response) {
                            console.log(response.data);
                            alert("Publicacion modificada");
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
                                    title="Publicaciones"
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
                                            <i className="fa fa-filter" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Titulo"
                                        onChange={(e) => {
                                            setTitulo(e.target.value);
                                        }}
                                        value={titulo}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-calendar" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Año de Publicacion"
                                        onChange={(e) => {
                                            setAnno(e.target.value);
                                        }}
                                        value={anno}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-quote-left" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Nombre de Revista"
                                        onChange={(e) => {
                                            setRevista(e.target.value);
                                        }}
                                        value={revista}
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

export default Tables;
