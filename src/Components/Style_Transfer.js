import React from "react";
import axios from "axios";
import InputFile from "./InputFile";

class Style_Transfer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: ""
        };
    }

    componentDidMount() {
        axios.get("/api/image-inpainting")
            .then(
                (result) => {
                    console.log(result.data)
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                }
            )
            .catch((error) => {
                console.log(error)
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    }

    generate(){
        const photo = "photo", style = "stele image";

        axios.post("/",{photo,style})
            .then(
                (result) => {
                    console.log(result.data)
                    /*this.setState({
                        isLoaded: true,
                        items: result.data
                    });*/
                }
            )
            .catch((error) => {
                console.log(error)
                /*this.setState({
                    isLoaded: true,
                    error
                });*/
            })
    }

    render() {
        /* const {error, isLoaded, items} = this.state;
         if (error) {
             return <div>Error: {error.message}</div>;
         } else if (!isLoaded) {
             return <div>Loading...</div>;
         } else {*/

        return (
            //<img src={"data:image/png;base64," + items}></img>
            /* <InputFile/>*/

            <div className="container justify-content-around">
                <div>
                    <div className="d-flex flex-wrap justify-content-around align-content-around">

                        <div className="card" style={{marginBottom:20}}>
                            <div className="card-header">
                                <ul className="nav mb-3" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill"
                                           role="tab" aria-selected="true">Upload photo</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" role="tabpanel" style={{minWidth:300 ,maxWidth:400, maxHeight:300}}>
                                        <InputFile/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-pills mb-3" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#styles-popular"
                                           role="tab" aria-selected="true">Popular styles</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#styles-upload"
                                           role="tab" aria-selected="false">My style</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="styles-popular" role="tabpanel" style={{minWidth:300}}>
                                        <div className="d-flex flex-wrap overflow-auto" style={{maxWidth:400, maxHeight:300}}>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>

                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>

                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>

                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                                 className="style-popular rounded float-left img-thumbnail img-fluid" alt="..."
                                                 style={{width: 120, height: 120}}/>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="styles-upload" role="tabpanel">
                                        <InputFile/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={this.generate} className="btn btn-outline-primary">Generate</button>
                    </div>

                </div>
                <br/>
                <div className="card text-center">
                    <div className="card-header">
                        Export Image
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-around">
                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                 className="rounded float-left img-thumbnail img-fluid" alt="..."
                                 style={{width: 300, height: 300}}/>

                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                 className="rounded img-thumbnail img-fluid" alt="..."
                                 style={{width: 300, height: 300}}/>

                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                                 className="rounded float-right img-thumbnail img-fluid" alt="..."
                                 style={{width: 300, height: 300}}/>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        <button type="button" className="btn btn-outline-primary">Download</button>
                    </div>
                </div>
            </div>

        );
        // }
    }
}

export default Style_Transfer;