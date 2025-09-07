import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Waves, Users, Brain, Globe, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center shadow-ocean">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">ResQ</span>
            </div>
            <Link to="/dashboard">
              <Button className="bg-ocean-gradient hover:opacity-90 shadow-ocean">
                Launch Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Unified Coastal Emergency
              <span className="bg-ocean-gradient bg-clip-text text-transparent"> Response</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              ResQ combines citizen reporting, AI-powered social media analysis, and real-time data visualization 
              to help emergency response agencies make faster, more informed decisions during ocean disasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-ocean-gradient hover:opacity-90 shadow-ocean">
                  <Shield className="w-5 h-5 mr-2" />
                  Enter Command Center
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="shadow-card">
                <Users className="w-5 h-5 mr-2" />
                Join as Citizen Reporter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Complete Emergency Response Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technology to create a comprehensive coastal hazard monitoring system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: "Real-time Hazard Mapping",
                description: "Interactive maps showing live coastal threats with dynamic hotspot generation based on report volumes and AI verification.",
                color: "text-primary"
              },
              {
                icon: Users,
                title: "Citizen Reporting Network",
                description: "Crowdsourced hazard reports with media upload, location tagging, and offline data collection capabilities.",
                color: "text-safe"
              },
              {
                icon: Brain,
                title: "AI-Powered Analysis",
                description: "Natural language processing engine detecting hazard keywords, sentiment analysis, and threat assessment from social media.",
                color: "text-emergency"
              },
              {
                icon: Globe,
                title: "Multilingual Support",
                description: "Accessible to diverse coastal communities with full language support and cultural considerations for emergency communication.",
                color: "text-primary"
              },
              {
                icon: CheckCircle,
                title: "Verification System",
                description: "Advanced verification protocols combining human oversight and AI validation to ensure report accuracy and reduce false alarms.",
                color: "text-safe"
              },
              {
                icon: Shield,
                title: "Early Warning Integration",
                description: "Seamless integration with existing emergency warning systems and protocols for coordinated disaster response.",
                color: "text-emergency"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-lg transition-all duration-300 animate-slide-up border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Active Citizen Reporters" },
              { number: "99.7%", label: "Accuracy Rate" },
              { number: "4.2 min", label: "Average Response Time" },
              { number: "15", label: "Languages Supported" }
            ].map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Transform Emergency Response?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join emergency agencies worldwide using ResQ to protect coastal communities with 
              real-time intelligence and coordinated response capabilities.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-ocean-gradient hover:opacity-90 shadow-ocean">
                <Shield className="w-5 h-5 mr-2" />
                Access ResQ Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-ocean-gradient rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">ResQ</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Unified Coastal Emergency Response System - Protecting communities through intelligent monitoring
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
