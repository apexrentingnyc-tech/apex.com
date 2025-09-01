import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Founded on Devotion & Loyalty
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Apex Renting Solutions was founded by <strong className="text-foreground">Jacob Silberstein</strong> with 
              a mission to revolutionize property management through unwavering dedication and innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment goes beyond managing properties – we build lasting relationships with our clients, 
              treating each property as if it were our own. This devotion to excellence has made us a trusted 
              partner for property owners across the region.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Properties Managed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
            
            <Button size="lg" className="px-8">
              Meet Our Team
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center border-border">
              <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Devotion</h3>
              <p className="text-sm text-muted-foreground">
                We are devoted to your success, treating every property with the care it deserves.
              </p>
            </Card>
            
            <Card className="p-6 text-center border-border">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Commitment to the highest standards in every aspect of property management.
              </p>
            </Card>
            
            <Card className="p-6 text-center border-border">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Results</h3>
              <p className="text-sm text-muted-foreground">
                Focused on delivering measurable results that exceed expectations.
              </p>
            </Card>
            
            <Card className="p-6 text-center gradient-primary text-primary-foreground">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Loyalty</h3>
              <p className="text-sm">
                Building lasting partnerships through unwavering loyalty and trust.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;