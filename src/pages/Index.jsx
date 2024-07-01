import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-16">
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Find Your Dream Home</h1>
          <div className="mt-8 flex space-x-4">
            <Input placeholder="Location" className="w-64" />
            <Input placeholder="Property Type" className="w-64" />
            <Input placeholder="Price Range" className="w-64" />
            <Button>Search</Button>
          </div>
        </div>
      </header>

      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace with dynamic content */}
          <Card>
            <img src="/images/property1.jpg" alt="Property 1" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Beautiful Family House</CardTitle>
              <p>$500,000</p>
            </CardHeader>
            <CardContent>
              <p>4 beds • 3 baths • 2,500 sqft</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/images/property2.jpg" alt="Property 2" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Modern Apartment</CardTitle>
              <p>$300,000</p>
            </CardHeader>
            <CardContent>
              <p>2 beds • 2 baths • 1,200 sqft</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/images/property3.jpg" alt="Property 3" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Luxury Villa</CardTitle>
              <p>$1,200,000</p>
            </CardHeader>
            <CardContent>
              <p>5 beds • 4 baths • 4,000 sqft</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
          <img src="/images/about.jpg" alt="About Us" className="w-full h-64 object-cover md:w-1/2" />
          <p className="text-lg">
            We are a leading real estate company with over 20 years of experience in helping people find their dream homes. Our team of dedicated professionals is here to assist you every step of the way.
          </p>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Meet Our Agents</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Replace with dynamic content */}
          <Card>
            <img src="/images/agent1.jpg" alt="Agent 1" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
              <p>john.doe@example.com</p>
            </CardHeader>
            <CardContent>
              <p>Phone: (123) 456-7890</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/images/agent2.jpg" alt="Agent 2" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
              <p>jane.smith@example.com</p>
            </CardHeader>
            <CardContent>
              <p>Phone: (123) 456-7890</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/images/agent3.jpg" alt="Agent 3" className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>Michael Johnson</CardTitle>
              <p>michael.johnson@example.com</p>
            </CardHeader>
            <CardContent>
              <p>Phone: (123) 456-7890</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleChange} />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <div className="mt-8 text-center">
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@realestate.com</p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Properties</a>
            <a href="#" className="hover:text-gray-400">Agents</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <p>&copy; 2023 Real Estate Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;