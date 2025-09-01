import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Apex Renting Solutions</h3>
                <p className="text-sm opacity-80">Property Management Excellence</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6 max-w-md">
              Founded by Jacob Silberstein, we provide dedicated property management services 
              with unwavering loyalty and commitment to excellence.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@apexrenting.com" className="hover:opacity-80 transition-opacity">
                  info@apexrenting.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:opacity-80 transition-opacity">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>123 Property Management Blvd, Suite 456</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Property Management</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Financial Management</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Maintenance Services</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Tenant Relations</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Legal Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © 2024 Apex Renting Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;