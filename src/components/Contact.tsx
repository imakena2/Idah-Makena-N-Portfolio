
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using EmailJS or a similar service would be ideal, but for now we'll use a simple mailto link
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
      `;
      
      const mailtoLink = `mailto:imakena@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink);
      
      toast({
        title: "Message Ready to Send!",
        description: "Your email client has been opened with your message. Please send to complete.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-medium text-slate-700">Email</h4>
                <a href="mailto:imakena@gmail.com" className="text-blue-600 hover:underline">
                  imakena@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-medium text-slate-700">Phone</h4>
                <a href="tel:+254722124963" className="text-blue-600 hover:underline">
                  +254 722 124 963
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-slate-700">Location</h4>
                <p className="text-slate-600">Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="font-medium text-slate-700">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/imakena/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  linkedin.com/in/imakena
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                <Github size={20} />
              </div>
              <div>
                <h4 className="font-medium text-slate-700">GitHub</h4>
                <a 
                  href="https://github.com/imakena2" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline"
                >
                  github.com/imakena2
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-slate-300"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-slate-300"
              />
            </div>
            <div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-slate-300"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] border-slate-300"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
