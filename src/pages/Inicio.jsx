import Title from "../elements/Title";

const Inicio = () => {
    return (
        <div className="Container my-5">
            <div className="row">

                <Title text={"Inicio"} />

                <div className="col-md-8">
                    <p>
                        The Killers es una banda de indie rock estadounidense formada en 2001 en Las Vegas (Nevada) por el vocalista,
                        teclista y bajista Brandon Flowers y el guitarrista Dave Keuning. La banda actualmente está formada por Brandon Flowers, Dave Keuning,
                        Mark Stoermer y Ronnie Vannucci Jr. Después de llamar la atención de un busca talentos, el grupo firmó
                        con el sello independiente británico Lizard King Records y el estadounidense Island Records.
                    </p>

                    <p> 
                        La banda ha lanzado siete álbumes de estudio: Hot Fuss (2004), Sam's Town (2006), Day & Age (2008), Battle Born (2012),
                        Wonderful Wonderful (2017), Imploding the Mirage (2020) y su reciente álbum Pressure Machine (2021).3
                        Todos los álbumes han ocupado el puesto número uno en UK y en Irlanda; además, se estima que han vendido 22 millones de álbumes en todo el mundo.4
                        Por otra parte, también han lanzado un álbum recopilatorio (Sawdust, en 2007), un álbum en vivo (Live from the Royal Albert Hall, en 2009)
                        y un álbum de grandes éxitos (Direct Hits, en 2013).
                    </p>


                </div>
                <div className="col-md-4">
                    <img src="https://i.scdn.co/image/ab6761610000e5eb207b21f3ed0ee96adce3166a" alt="Nose q Poner XD" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
