import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Mail, 
  Github, 
  MapPin, 
  MessageSquare, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Sparkles
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.feedback.trim()
    ) {
      setStatus("error");
      setErrorMessage("All fields are compulsory to submit.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      await addDoc(collection(db, "feedback"), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        feedback: formData.feedback.trim(),
        createdAt: serverTimestamp(),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        feedback: "",
      });
    } catch (err: unknown) {
      console.error("Firestore feedback error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Failed to submit your feedback. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const developers = [
    {
      name: "Soubhagya Srivastava",
      role: "AI/ML Engineer",
      email: "soubhagyasrivastava240@gmail.com",
      github: "shubh-soubhagya",
      linkedin: "https://www.linkedin.com/in/soubhagya-srivastava-611408267/",
      location: "India",
      image: "https://github.com/shubh-soubhagya.png",
    },
    {
      name: "Suman Kumari",
      role: "AI/ML Engineer",
      email: "sumank.ds1@gmail.com",
      github: "ssumankumari",
      linkedin: "https://www.linkedin.com/in/sumaninsights/",
      location: "India",
      image: "https://github.com/ssumankumari.png",
    },
    {
      name: "Shubhankar Tiwary",
      role: "Backend Developer",
      email: "shubhankarvishal@gmail.com",
      github: "SHUBHANKARPOLYGON",
      linkedin: "https://www.linkedin.com/in/shubhankar-tiwary-5805bb266/",
      location: "India",
      image: "https://github.com/SHUBHANKARPOLYGON.png",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <div className="pt-32 pb-20 px-4 border-b-[3px] border-border">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight">
              Get in{" "}
              <span className="bg-accent text-accent-foreground px-4 py-1 border-[3px] border-border shadow-brutal-sm inline-block transform rotate-2">
                Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or want to contribute? Our team is here to help.
            </p>
          </div>

          {/* Developer Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="p-6 border-[3px] border-border bg-card shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all flex flex-col group"
              >
                <div className="text-center space-y-4 flex-grow">
                  {/* Brutalist Image Avatar */}
                  <div
                    className={`w-24 h-24 mx-auto border-[3px] border-border shadow-brutal-sm overflow-hidden bg-secondary transform ${
                      index % 2 === 0
                        ? "-rotate-3 group-hover:rotate-0"
                        : "rotate-3 group-hover:rotate-0"
                    } transition-transform`}
                  >
                    <img
                      src={dev.image}
                      alt={`${dev.name} profile`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          dev.name
                        )}&background=random&color=fff&font-weight=bold`;
                      }}
                    />
                  </div>

                  <div className="pt-4">
                    <a
                      href={
                        dev.linkedin.startsWith("http")
                          ? dev.linkedin
                          : `https://www.linkedin.com/in/${dev.linkedin}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-primary transition-colors group/link"
                      title="View LinkedIn Profile"
                    >
                      <h3 className="text-xl font-black uppercase tracking-tight mb-1 group-hover/link:underline decoration-[3px] underline-offset-4">
                        {dev.name}
                      </h3>
                      <ExternalLink className="h-4 w-4 opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                    </a>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                      {dev.role}
                    </p>
                  </div>

                  <div className="space-y-2 pt-6 mt-auto text-left">
                    <a
                      href={`mailto:${dev.email}`}
                      className="flex items-center gap-3 p-2 -mx-2 border-2 border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all font-medium"
                    >
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <span className="truncate text-sm">{dev.email}</span>
                    </a>

                    <a
                      href={
                        dev.github.startsWith("http")
                          ? dev.github
                          : `https://github.com/${dev.github}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 -mx-2 border-2 border-transparent hover:border-border hover:bg-secondary hover:text-secondary-foreground transition-all font-medium"
                    >
                      <Github className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">
                        @{dev.github.split("/").pop()}
                      </span>
                    </a>

                    <div className="flex items-center gap-3 p-2 -mx-2 font-medium text-muted-foreground">
                      <MapPin className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm">{dev.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================================================= */}
          {/* SIDE-BY-SIDE: FEEDBACK FORM & GENERAL INQUIRIES   */}
          {/* ================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-10 items-stretch">
            
            {/* Left Column: Feedback Form (Takes 7/12 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="p-6 md:p-8 border-[3px] border-border bg-card shadow-brutal flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MessageSquare className="h-7 w-7 text-primary flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                      Feedback Form
                    </h2>
                  </div>
                  <p className="text-sm font-bold text-muted-foreground mb-6">
                    Help us enhance Dissolve-AI. Every submission is recorded directly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="E.G. JOHN DOE"
                        className="w-full p-3 border-[3px] border-border bg-background text-foreground font-bold rounded-none shadow-brutal-sm focus:outline-none focus:border-primary focus:shadow-brutal transition-all placeholder:text-muted-foreground/60 uppercase text-xs"
                      />
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider mb-1.5">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="NAME@EXAMPLE.COM"
                          className="w-full p-3 border-[3px] border-border bg-background text-foreground font-bold rounded-none shadow-brutal-sm focus:outline-none focus:border-primary focus:shadow-brutal transition-all placeholder:text-muted-foreground/60 text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider mb-1.5">
                          Phone <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="w-full p-3 border-[3px] border-border bg-background text-foreground font-bold rounded-none shadow-brutal-sm focus:outline-none focus:border-primary focus:shadow-brutal transition-all placeholder:text-muted-foreground/60 text-xs"
                        />
                      </div>
                    </div>

                    {/* Feedback Space */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider mb-1.5">
                        Your Feedback <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        name="feedback"
                        required
                        rows={4}
                        value={formData.feedback}
                        onChange={handleInputChange}
                        placeholder="WRITE YOUR DETAILED FEEDBACK, BUGS, OR IDEAS..."
                        className="w-full p-3 border-[3px] border-border bg-background text-foreground font-bold rounded-none shadow-brutal-sm focus:outline-none focus:border-primary focus:shadow-brutal transition-all placeholder:text-muted-foreground/60 text-xs resize-none"
                      />
                    </div>

                    {/* Status Alerts */}
                    {status === "success" && (
                      <div className="p-3 border-[3px] border-border bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold shadow-brutal-sm flex items-center gap-2.5 text-xs">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        <span>Thank you! Your feedback has been recorded into our database.</span>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="p-3 border-[3px] border-border bg-destructive/20 text-destructive font-bold shadow-brutal-sm flex items-center gap-2.5 text-xs">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 border-[3px] border-border rounded-none bg-primary text-primary-foreground font-black uppercase tracking-wider text-sm shadow-brutal hover:shadow-brutal-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-[2px] border-primary-foreground border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Feedback
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column: General Inquiries & Callouts (Takes 5/12 cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="p-6 md:p-8 border-[3px] border-border bg-card shadow-brutal flex-1 flex flex-col justify-between space-y-6">
                
                {/* Heading */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-7 w-7 text-accent flex-shrink-0" />
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                      Direct Inquiries
                    </h2>
                  </div>
                  <p className="text-sm font-bold text-muted-foreground">
                    Looking for collaborations, enterprise support, or project discussions?
                  </p>
                </div>

                {/* Direct Channel Cards */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="p-4 border-[3px] border-border bg-background shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-black uppercase text-xs tracking-wider mb-0.5">Official Email</p>
                        <a
                          href="mailto:contact.dissolveai@gmail.com"
                          className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors break-all block"
                        >
                          contact.dissolveai@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="p-4 border-[3px] border-border bg-background shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all">
                    <div className="flex items-start gap-3">
                      <Github className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="font-black uppercase text-xs tracking-wider mb-0.5">GitHub Repository</p>
                        <a
                          href="https://github.com/shubh-soubhagya/DissolveAI-beta"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-muted-foreground hover:text-primary transition-colors break-all block"
                        >
                          github.com/dissolveai
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Callout Info Box to match visual weight */}
                <div className="p-4 border-[3px] border-border bg-secondary shadow-brutal-sm space-y-2 mt-auto">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary-foreground flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider text-secondary-foreground">
                      Response Window
                    </span>
                  </div>
                  <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                    Our team actively tracks feedback entries and GitHub pull requests. Expect a direct response within 24 to 48 hours.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;