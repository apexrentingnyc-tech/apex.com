import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-bg py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Property Management 
              <span className="text-accent"> Solutions</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Dedicated to providing property owners with comprehensive management tools and services. 
              Founded by Jacob Silberstein, we deliver loyalty, devotion, and professional excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="px-8" onClick={() => window.location.href = '#contact'}>
                Start Today
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-white">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-2" />
                Trusted Management
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-2" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-2" />
                Advanced Tools
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent mr-2" />
                Proven Results
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">Your properties are protected with our comprehensive security measures</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Dedicated professionals committed to your success</p>
            </Card>
            
            <Card className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Maximize Returns</h3>
              <p className="text-sm text-muted-foreground">Optimize your property investment with our proven strategies</p>
            </Card>
            
            <Card className="p-6 text-center gradient-primary text-primary-foreground">
              <div className="text-2xl font-bold mb-2">500+</div>
              <p className="text-sm">Properties Managed</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;