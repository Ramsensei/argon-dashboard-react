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
import { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
    const [search, setSearch] = useState();
    const [searchList, setSearchList] = useState();
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [anno, setAnno] = useState("");
    const [duracion, setDuracion] = useState("");
    const [area, setArea] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        
        axios
            .get(process.env.REACT_APP_API_URL + "/proyectos")
            .then(function (response) {
                console.log(response.data[Object.keys(response.data)[1]]);
                let temp = response.data[Object.keys(response.data)[1]];
                temp.push({
                    Id: -1,
                    name: "Añadir Proyecto (+)"
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
                setAnno(item["Año de Inicio"]);
                setDuracion(item["Duracion (meses)"]);
                setArea(item["Area de Conocimiento"]);
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
                .post(process.env.REACT_APP_API_URL + `/proyecto`, {
                    //Body
                    id: resultadosOrdenados[0].Id + 1,
                    titulo: titulo,
                    anno: anno,
                    duracion: duracion,
                    area: area
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
                .put(process.env.REACT_APP_API_URL + `/proyecto`, {
                    //Body
                    id: id,
                    atributo: "titulo_proyecto",
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
                        .put(process.env.REACT_APP_API_URL + `/proyecto`, {
                            //Body
                            id: id,
                            atributo: "anno_inicio",
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
                1100
            );
            setTimeout(
                () =>
                    axios
                        .put(process.env.REACT_APP_API_URL + `/proyecto`, {
                            //Body
                            id: id,
                            atributo: "duracion_meses",
                            nuevo_valor: duracion,
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
                2200
            );
            setTimeout(
                () =>
                    axios
                        .put(process.env.REACT_APP_API_URL + `/proyecto`, {
                            //Body
                            id: id,
                            atributo: "area_conocimiento",
                            nuevo_valor: area,
                        })
                        .then(function (response) {
                            console.log(response.data);
                            alert("Proyecto Actualizado");
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
                3300
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
                                <CustomDropdown title="Proyectos" list={data} setSearch={setSearch}/>
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
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
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
                                        value={titulo}
                                        onChange={(e) => setTitulo(e.target.value)}
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
                                        placeholder="Año de Inicio"
                                        value={anno}
                                        onChange={(e) => setAnno(e.target.value)}
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
                                        placeholder="Duracion (meses)"
                                        value={duracion}
                                        onChange={(e) => setDuracion(e.target.value)}
                                    ></Input>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fa fa-book" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        placeholder="Area de Conocimiento"
                                        value={area}
                                        onChange={(e) => setArea(e.target.value)}
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

export default Profile;
