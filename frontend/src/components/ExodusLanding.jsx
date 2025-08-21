import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  FileText, 
  Download, 
  Zap, 
  FileUp, 
  FileDown, 
  Settings, 
  Check, 
  ArrowRight,
  Code2,
  Database,
  Shield,
  Monitor,
  ChevronRight,
  Github,
  ExternalLink
} from "lucide-react";

const ExodusLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "File Handling & Imports",
      description: "Seamlessly import XML files with eSpecObjects structure and split elements efficiently",
      details: [
        "XML import with eSpecObjects support",
        "Smart element splitting (SplitElements)",
        "Modified XML generation",
        "Multiple output zip handling"
      ]
    },
    {
      icon: <FileDown className="w-8 h-8" />,
      title: "PDF Report Generation",
      description: "Generate comprehensive status reports with tabular data visualization",
      details: [
        "Extract data from eObjectAttribute",
        "Tabular format with attribId & classId",
        "Effectivity and audit information",
        "Professional PDF output"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Processing & Validation",
      description: "Robust processing with comprehensive error handling and validation",
      details: [
        "XML attribute processing (attribId, classId, elemId)",
        "CS8600 nullable reference handling",
        "Error handling for missing outputs",
        "Safe XML parsing"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Blazor UI Interface",
      description: "Modern web interface with intuitive navigation and real-time feedback",
      details: [
        "Clean navbar with branding",
        "File upload interface",
        "Real-time processing logs",
        "Download links for outputs"
      ]
    }
  ];

  const outputTypes = [
    { name: "StatusValues_*.zip", color: "bg-blue-100 text-blue-800" },
    { name: "StatusTypes_*.zip", color: "bg-green-100 text-green-800" },
    { name: "Attributes_*.zip", color: "bg-purple-100 text-purple-800" },
    { name: "BOX_*.zip", color: "bg-orange-100 text-orange-800" },
    { name: "CompleteZip_*.zip", color: "bg-red-100 text-red-800" }
  ];

  const architectureFeatures = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Blazor Frontend",
      description: "Server/WebAssembly support with Razor layouts"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "C# Backend Services", 
      description: "XML parsing, transformation, and file processing"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Live status updates and progress tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Exodus</h1>
                <p className="text-xs text-blue-600 font-medium">Split Happens!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Zap className="w-4 h-4 mr-2" />
              Powerful XML Processing Tool
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Meet{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Exodus
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate XML processing utility that splits, transforms, and generates comprehensive reports. 
              <span className="text-blue-600 font-semibold"> Split Happens!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Demo
              </Button>
            </div>
            
            {/* Output Types Preview */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {outputTypes.map((output, index) => (
                <Badge 
                  key={index} 
                  className={`${output.color} px-4 py-2 text-sm font-medium animate-pulse`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {output.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Exodus in Action</h2>
            <p className="text-xl text-gray-600">Experience the power of intelligent XML processing</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <FileUp className="w-5 h-5 mr-2" />
                  Upload Interface
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1575388902449-6bca946ad549" 
                  alt="Upload Interface"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">Intuitive file upload with drag-and-drop support for XML files</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Settings className="w-5 h-5 mr-2" />
                  Processing Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.unsplash.com/photo-1667053310801-d83094493eb5" 
                  alt="Processing Dashboard"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">Real-time processing status with detailed logs and progress tracking</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <FileDown className="w-5 h-5 mr-2" />
                  Download Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg" 
                  alt="Download Center"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">Organized download links for all generated files and reports</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for comprehensive XML processing and report generation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Modern Architecture</h2>
            <p className="text-xl text-gray-600">Built with cutting-edge technology for optimal performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {architectureFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your XML Workflow?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Download Exodus today and experience the power of intelligent file processing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download for Windows
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-700 text-lg px-8 py-3">
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Output Formats</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-200">XML Compatible</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-blue-200">Configuration Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Exodus</h3>
                <p className="text-sm text-gray-400">Split Happens!</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Built with ❤️ for XML processing enthusiasts
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-500 text-sm">
            © 2024 Exodus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExodusLanding;