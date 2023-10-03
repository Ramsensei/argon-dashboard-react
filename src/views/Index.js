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
import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, FormGroup, Form, Col } from "reactstrap";
import axios from "axios";

// core components

const Index = (props) => {
    const [active, setActive] = useState("top5Know");
    const [search, setSearch] = useState();
    const [searchList, setSearchList] = useState();
    const [data, setData] = useState([]);
    const titles = {
        top5Know: "Top 5 Areas de Conocimiento",
        top5Inst: "Top 5 Instituciones",
        top5Inv: "Top 5 Investigadores",
        invs: "Investigadores",
        projects: "Proyectos",
        publi: "Publicaciones",
        know: "Area de Conocimiento",
        mates: "Colegas",
    };
    const urls = {
        top5Know: "/top_5_area_conocimiento",
        top5Inst: "/top_5_instituciones",
        top5Inv: "/top_5_investigadores",
        invs: "/investigadores",
        projects: "/proyectos",
        publi: "/publicaciones",
        know: "Area de Conocimiento",
        mates: "Colegas",
    };
    const labels = {
        top5Know: "Area de Conocimiento",
        top5Inst: "Institución",
        top5Inv: "Investigador",
        invs: "Investigador",
        projects: "Proyecto",
        publi: "Articulo",
        know: "Area de Conocimiento",
        mates: "Investigador",
    };

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + urls[active])
            .then(function (response) {
                console.log(response.data[Object.keys(response.data)[1]]);
                switch(active) {
                    case "top5Know":
                        setData(response.data[Object.keys(response.data)[1]]);
                    break;
                    case "top5Inst":
                        setData(response.data[Object.keys(response.data)[1]]);
                    break;
                    case "top5Inv":
                        setData(response.data[Object.keys(response.data)[1]]);
                    break;
                    case "invs":
                        setSearchList(response.data[Object.keys(response.data)[1]]);
                    break;
                    case "projects":
                        setSearchList(response.data[Object.keys(response.data)[1]]);
                    break;
                    case "publi":
                        setSearchList(response.data[Object.keys(response.data)[1]]);
                    break;
                }
                
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
    }, [active]);

    useEffect(()=>{
        switch(active){
            case "invs":
                console.log("cambió search");
                axios
                    .get(process.env.REACT_APP_API_URL + `/publicaciones_investigador/${search}`)
                    .then(function (response) {
                        console.log(response.data[Object.keys(response.data)[1]]);
                        setData(response.data[Object.keys(response.data)[1]]);
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
            break;
        }
    }, [search])
    return (
        <>
            <Col lg="5" md="7">
                <Card className="bg-secondary shadow border-0 mt-5">
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form">
                            {Object.entries(titles).map(([key, value]) => (
                                <div
                                    className="custom-control custom-radio mb-3"
                                    key={key}
                                >
                                    <input
                                        defaultChecked={
                                            key === "top5Know" ? true : false
                                        }
                                        className="custom-control-input"
                                        id={key}
                                        name="select-radio"
                                        type="radio"
                                        onClick={() => setActive(key)}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor={key}
                                    >
                                        {value}
                                    </label>
                                </div>
                            ))}
                            <FormGroup className="mb-3">
                                <CustomDropdown
                                    title={titles[active]}
                                    list={searchList}
                                    setSearch = {setSearch}
                                />
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
                {data
                    ? data.map((item, index) => (
                          <Card
                              className="bg-secondary shadow border-0 mt-5"
                              key={index}
                          >
                              <CardHeader className="bg-transparent">
                                  <div className="text-muted text-center mt-2">
                                      <b>{Object.entries(item)[1][0]}:</b>
                                      <p>{Object.entries(item)[1][1]}</p>
                                  </div>
                              </CardHeader>
                              <CardBody className="px-lg-5 py-lg-5">
                                {Object.entries(item).slice(2).map(([key, value]) => (
                                    <div className="text-muted text-center mt-2">
                                        <b>{key}:</b>
                                        <p>{value}</p>
                                    </div>
                                ))}
                              </CardBody>
                          </Card>
                      ))
                    : ""}
            </Col>
        </>
    );
};

export default Index;
