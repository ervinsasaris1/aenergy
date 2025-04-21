import React from 'react'
import '../App.css'
import EmailForm from '../components/EmailForm';

function EntryPage() {
    return (
        <div className="container main-content">
            <div className="row">
                <div className="col-12 section">
                    <h1>Par mums</h1>
                    <p>
                        Esam energoefektivitātes profesionāļi, kas palīdzēs Jums samazināt enerģijas patēriņu un izmaksas.
                        Vairāku gadu pieredze energosertificēšanā un uzņēmumu energoauditā sniedz mums iespēju
                        piedāvāt individuālus risinājumus, kas ir piemēroti jebkurām Jūsu vēlmēm.
                    </p>
                </div>
            </div>
            <div className="row services">
                <div className="col-sm-12 col-md-4">
                    <a href="#">
                        <div className="pt-0">
                            <img src="buildings.jpg" alt="Ēkas pagaidu energosertifikāts" className="company-logo"/>
                            <p>Ēkas pagaidu energosertifikāts</p>
                        </div>
                    </a>
                </div>
                <div className="col-sm-12 col-md-4">
                    <a href="#">
                        <div className="pt-0">
                            <img src="buildings.jpg" alt="Ēkas energosertifikāts" className="company-logo"/>
                            <p>Ēkas energosertifikāts</p>
                        </div>
                    </a>
                </div>
                <div className="col-sm-12 col-md-4">
                    <a href="#">
                        <div className="pt-0">
                            <img src="buildings.jpg" alt="Energoefektivitātes konsultācijas" className="company-logo"/>
                            <p>Energoefektivitātes konsultācijas</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">
                <EmailForm />
            </div>
        </div>
    )
}

export default EntryPage;