import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer'
import RightSidebar from './right-sidebar';


class TermsAndConditions extends Component {

    render() {
        return (
            <React.Fragment>


                <div className="grid">
                    <header>
                        <Header></Header>
                    </header>

                    <aside className="sidebar-left">
                        <Sidebar></Sidebar>
                    </aside>

                    <article>
                        <h3>Terms And Conditions</h3><br></br>

                        <span style={{ fontWeight: "bold" }}>Please read all these terms and conditions.</span><br></br>
                        <p>As we can accept your order and make a legally enforceable agreement without further reference to you, you must read these terms and conditions to ensure that they do not contain anything you are not happy with.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Application</span><br></br>

                        <p>These Terms and Conditions will apply to the purchase by the goods and services by you, the customer, from OKO Development. These are the terms on which we will sell the services to you. You can only purchase the goods and services from this website if you are eligible to enter into a contract and at a minimum of 18 years old.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Services</span><br></br>

                        <p>The description of the services and goods is as set out in the website, brochures or other forms of advertisement. Any description is for illustrative purposes only and there may be small differences in the actual product. It is your responsibility to ensure that any information provided is accurate. We can make changes to the services which are necessary to comply with any applicable law or safety requirement. We will notify you of these changes.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Customer Responsibilities</span><br></br>

                        <p>You must cooperate with us in all matters relating to the services, provide us with all information required to perform the services and obtain any necessary licences and consents (unless otherwise agreed). Failure to comply with the above is a customer default which entitles us to suspend performance of the services until the customer remedies it. We can terminate the contract with immediate effect on written notice to the customer.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Personal Information</span><br></br>

                        <p>We retain and use all information strictly under the Privacy Policy.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Basis of Sale</span><br></br>

                        <p>The description of the service on our website does not constitute a contractual offer to sell the services. When an order has been submitted on the website, we can reject it for any reason, although we will try to tell you the reason without delay. The order process is set out on the website. Each step allows you to check and amend any errors before submitting the order. It is the customers responsibility to check that you have used the ordering process correctly. We intended that these Terms and Conditions apply only to a contract entered into by you as a consumer. If this is not the case, you must tell us, so that we can provide you with a different contact with terms which are more appropriate for you and which might, in some respects, be better for you.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Privacy</span><br></br>

                        <p>Your privacy is crucial to us. We respect your privacy and comply with the General Data Protection Act (2018) with regard to your personal information. The data we have stored will comply with our obligations imposed by Data Protection Laws:</p>
                        <p>Before or at the time of collecting personal data, we will identify the purposes for which the information is being collected.</p>
                        <p>We will only process personal data for the purposes identified.</p>
                        <p>We will respect your rights in relation to your personal data.</p>
                        <p>We will implement technical and organisational measures to ensure your personal data is secure.</p>
                        <p>For any inquiries or complaints regarding data privacy, you can email: <span style={{ color: 'blue' }} href="mailto: okodevelopment@gmail.com">okodevelopment@gmail.com</span>.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Excluding Liability</span><br></br>

                        <p>The supplier does not take liability for: (i) any fraudulent act or omission, or (ii) death or personal injury caused by negligence or breach of the supplier’s other legal obligations. Subject to this, we are not liable for loss of profit to your business, trade, craft of profession which would not be suffered by a consumer - because we believe you are not buying the services and goods wholly or mainly for your business, trade, craft or profession.</p>

                        <br></br><span style={{ fontWeight: "bold" }}>Governing law, Jurisdiction and Complaints</span><br></br>

                        <p>The contract (including any non-contractual matters) is governed by the law of Scotland. Disputes can be submitted to the jurisdiction of the courts of Scotland. We try to avoid any dispute, so we deal with complaints by emailing <a style={{ color: 'blue' }} href="mailto: okodevelopment@gmail.com">okodevelopment@gmail.com</a>.</p>

                    </article>

                    <aside>
                        <RightSidebar></RightSidebar>
                    </aside>

                    <footer>
                        <Footer></Footer>
                    </footer>
                </div>



            </React.Fragment>
        );
    }
}

export default TermsAndConditions;



