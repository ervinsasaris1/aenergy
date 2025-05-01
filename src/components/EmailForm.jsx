import React, {useState} from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import Button from "./Button";
import './EmailForm.css';

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("hello");
    }

    return (
        <>
            <div className="col-md-6 col-sm-12">
                <div className="service-title">
                    <h2>Pakalpojuma konsultācija</h2>
                    <div>
                        <p>Hello, gan jau kaut kādu filleri šeit vajag?</p>
                    </div>
                </div>
            </div>
            <div className="email-form col-md-6 col-sm-12">
                <form onSubmit={handleSubmit}>
                    <TextInput label="Vārds" name="name" value={formData.name} onChange={handleChange} />
                    <TextInput label="E-pasts" name="email" value={formData.email} onChange={handleChange} />
                    <TextInput label="Tālrunis" name="phone" value={formData.phone} onChange={handleChange} />
                    <TextArea label="Pakalpojums" name="service" value={formData.message} onChange={handleChange} />
                    <Button label="Nosūtīt ziņu" type="submit" />
                </form>
            </div>
        </>
    )
}

export default EmailForm;