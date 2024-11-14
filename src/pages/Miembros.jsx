import Title from "../elements/Title";

const Miembros = () => {
    return (
        <div className="Container my-5">
            <div className="row">

                <Title text={"Miembros actuales"} />
                
                <div className="col-md-12">

                    <ul>
                        <li>
                            Brandon Flowers: vocalista, piano, teclado, sintetizador (2001-presente), bajo eléctrico (2001, 2002-presente), guitarra (2020-presente, en estudio)
                        </li>
                        <li>
                            Dave Keuning: guitarra líder, piano, corista (2001-2017, 2020-presente, en hiatus de las giras entre 2017 y 2020 y desde 2022, en hiatus de las grabaciones entre 2017 y 2020)
                        </li>
                        <li>
                            Mark Stoermer: bajo eléctrico, guitarra rítmica, corista (2002-2020, 2022-presente, en hiatus de las giras desde 2016, en hiatus de las grabaciones entre 2020 y 2022)
                        </li>
                        <li>
                            Ronnie Vannucci Jr.: batería, percusión, sintetizador, corista (2002-presente), guitarra (2017-2022, en estudio)
                        </li>
                    </ul>

                </div>
                <div className="col-md-4">
                    <img src="https://www.nacionrock.com/wp-content/uploads/TheKillers_700x354-1-1.jpg" alt="Nose q Poner XD" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}
export default Miembros;
