/* eslint-disable jsx-a11y/alt-text */
import "../style.css";
import python from "../python.jpeg"
import java from "../java.jpeg"
import react from "../logo.svg"



const Tech =()=>{
    return (
        <div>
            <section>
                <div class="techHead">
                    <h1 style={{
                        paddingTop: 35,
                        color: "white"
                    }}
                    >Technologies I Use</h1>
                    {/* <h4 style={{color: "lightgray"}}
                    >These are Technologies I use in my projects</h4> */}
                </div>
            </section>
            <section>
                <div class="container-fluid techContainer">
                    <div class="row techList">
                        <div class="col-md-4 language">
                            <div>
                                <h3 style={{color: "blue", paddingBottom: 10}}
                                >Coding Languages</h3>
                                <p>Python</p>
                                <p>Java</p>
                                <p>React</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>SQL</p>
                            </div>
                        </div>
                        <div class="col-md-4 library">
                        <h3 style={{color: "blue", paddingBottom: 10}}
                        >Frameworks and Libraries</h3>
                            <p>Django</p>
                            <p>Java Spring</p>
                            <p>Express</p>
                            <p>jQuery</p>
                            <p>Bootstrap</p>
                            <p>Mongoose</p>
                        </div>
                        <div class="col-md-4 database">
                        <h3 style={{color: "blue", paddingBottom: 10}}
                        >Databases</h3>
                            <p>MySql</p>
                            <p>NoSql</p>
                            <p>MongoDb</p>
                            
                        </div>
                    </div>
                </div>
            </section>
            <div class="homeImages row align-items-end">

            <div class="col">
                <img
                    style={{
                        width:200,
                        height:125,
                        
                    }}
                    src={python}
                />
                <img
                    class="App-logo" alt="logo"
                    style={{
                        width:200,
                        height:125,
                        
                    }}
                    src={react}
                />
                <img
                    style={{
                        width:200,
                        height:125,
                    }}
                    src={java}
                />
            </div>
                
            </div> 
        </div>
    )
}



export default Tech;