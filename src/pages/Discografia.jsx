import Title  from "../elements/Title";

const Discografia = () => {
    return (
        <div className="container my-5">
            <div className="row">

                <Title text={"Discografia"} />


                <h3>Álbumes de estudio</h3>
                <div className="col-md-8">
                    <ul>
                        <li>2004: Hot Fuss</li>
                        <li>2006: Sam's Town</li>
                        <li>2008: Day & Age</li>
                        <li>2012: Battle Born</li>
                        <li>2017: Wonderful Wonderful</li>
                        <li>2020: Imploding the Mirage</li>
                        <li>2021: Pressure Machine</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <img 
                        src="https://storage.googleapis.com/stateless-elclubdelrock-com/2013/06/the-killer-gira-2014-500x500.jpg" 
                        alt="Portada del álbum" 
                        className="img-fluid" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Discografia;
