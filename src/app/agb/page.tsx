import Footer from "@/components/footer";

export default function AGB() {
    return (
      <div className="w-full flex flex-col bg-black h-screen uppercase mt-20 space-y-1 p-8">
            <div className="text-5xl font-bold">Terms and Conditions</div>
            <div>
              <div>
                <h1 className="text-2xl font-bold">General Terms and Conditions</h1>
                <h1 className="text-xl font-bold mt-2">1. Scope</h1>
                <div>
                  These General Terms and Conditions apply to all users of the website. By using the website, you agree to these terms.
                </div>
                <h1 className="text-xl font-bold mt-2">2. Copyright</h1>
                <div>
                  All content on this website, including texts, graphics (excluding icons), logos, and images are owned by the company and protected by copyright law. The use of the content, including reproduction, modification, distribution, or reproduction without prior written consent of the company is strictly prohibited.
                </div>
                <h1 className="text-xl font-bold mt-2">3. Cookies</h1>
                <div>
                  This website uses cookies necessary for the operation and security of the website. These cookies do not collect personal data and are used solely to ensure the functionality of the website.
                </div>
                <h1 className="text-xl font-bold mt-2">4. Disclaimer</h1>
                <div>
                  The contents of our pages have been created with the utmost care. However, we cannot assume any liability for the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to the general laws, but are not obligated to monitor transmitted or stored information from third parties.
                </div>
                <h1 className="text-xl font-bold mt-2">5. Changes to the Terms and Conditions</h1>
                <div>
                  We reserve the right to change these terms and conditions at any time without prior notice. The current version of the terms and conditions can be viewed on our website.
                </div>
                <h1 className="text-xl font-bold mt-2">6. Consent to Data Processing by Contact Form</h1>
                <div>
                  By submitting the contact form, you agree that your entered data (name, email address, and other information provided in the form) will be stored and processed by the company to handle your inquiry. Your data will be treated confidentially and will not be passed on to third parties without your explicit consent.
                  <div>
                    You have the right to revoke your consent at any time. The revocation of your consent does not affect the legality of the processing of your data carried out until the revocation. Further information on the processing of your data can be found in our privacy policy.
                  </div>
                </div>
                <h1 className="text-xl font-bold mt-2">7. Final Provisions</h1>
                <div>
                  Should individual provisions of these terms and conditions be or become invalid or unenforceable, the validity of the remaining terms and conditions shall remain unaffected. Instead of the invalid or unenforceable provision, the valid and enforceable provision which comes closest to the economic objectives pursued by the contracting parties with the invalid or unenforceable provision shall apply. The above provisions apply accordingly in the event that the terms and conditions prove to be incomplete.
                </div>
              </div>
            </div>
            <Footer />
      </div>
    );
  }
  