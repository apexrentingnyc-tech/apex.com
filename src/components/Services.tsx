import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, DollarSign, Settings, Users, FileText, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Property Management",
      description: "Comprehensive management of residential and commercial properties with attention to every detail.",
      features: ["Tenant Screening", "Rent Collection", "Property Inspections", "Maintenance Coordination"]
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description: "Complete financial oversight to maximize your property investment returns.",
      features: ["Monthly Reports", "Expense Tracking", "Tax Preparation", "ROI Analysis"]
    },
    {
      icon: Settings,
      title: "Maintenance Services",
      description: "Proactive maintenance and repair services to preserve property value.",
      features: ["24/7 Emergency Response", "Vendor Network", "Preventive Maintenance", "Quality Assurance"]
    },
    {
      icon: Users,
      title: "Tenant Relations",
      description: "Professional tenant management ensuring satisfaction and retention.",
      features: ["Lease Management", "Tenant Communication", "Move-in/Move-out", "Conflict Resolution"]
    },
    {
      icon: FileText,
      title: "Legal Compliance",
      description: "Stay compliant with all local, state, and federal property regulations.",
      features: ["Legal Documentation", "Regulatory Updates", "Eviction Processes", "Contract Review"]
    },
    {
      icon: Wrench,
      title: "Property Tools",
      description: "Advanced digital tools to streamline property management processes.",
      features: ["Online Portal", "Mobile App", "Analytics Dashboard", "Automated Reports"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Property Management Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to successfully manage your property investments, 
            backed by Jacob Silberstein's commitment to excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;