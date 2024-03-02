

const ContactPage = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            {/* Your contact page content here */}
            <form className="new-contact-submission">
                <input
                    type="text"
                    placeholder = "Your name"
                    name = "your_name"
                ></input>
                <br></br>
                <input
                    type="text"
                    placeholder = "Your email"
                    name = "your_name"
                ></input>
                <br></br>
                <input
                    type="text"
                    placeholder = "Your message"
                    name = "your_name"
                ></input>
                <br></br>      
                <button className="contact-inquiry-button">Submit correspondence</button>          


            </form>
        </div>
    );
};

export default ContactPage;