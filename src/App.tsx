
import './App.css';

function App() {
  return (
    <div className="neo-root">
      {/* Header / Hero Section */}
      <header className="neo-hero">
        <img src="https://i.ibb.co/35QxFQSp/neogenlogo2.png/" alt="neogen web design logo with modern geometric design symbolizing intelligent and interactive web solutions" className="neo-logo"/>
        <h1 className="neo-title">neogen web design</h1>
        <h2 className="neo-subtitle">Modern. Interactive. Intelligent.</h2>
        <div className="neo-socials">
          <a href="mailto:neogenwebdesign@gmail.com?subject=Inquiry&amp;body=Hello%2C%0A%0AI%20am%20interested%20in%20collaborating%20or%20would%20like%20to%20make%20contact%20regarding%20a%20website.%0A%0AThanks.%0A" title="Email"><span role="img" aria-label="email">Email</span></a>
          <a href="https://wa.me/27714752704" title="WhatsApp" target="_blank" rel="noopener"><span role="img" aria-label="whatsapp">WhatsApp</span></a>
        </div>
      </header>

      {/* Bento Grid Section */}
      <section className="neo-bento">
        <div className="bento-item about">
          <h2>About Us</h2>
          <p>
            neogen web design is a South African company focused on current and future web design and development technologies. We create agentic, intelligent, and interactive web experiences.
          </p>
        </div>
        <div className="bento-item about">
          <h2>Our Vision</h2>
            <p> 
              neogen web design pioneers the shift toward an agentic web by blending autonomous AI intelligence with high-fidelity, physics-driven interactivity. We leverage cutting-edge technologies like WebGPU and predictive personalization to transform traditional websites into intelligent, high-performance ecosystems that don't just display information but actively work for your business.
            </p>
        </div>
        <div className="bento-item about">
          <h2>The future of WWW</h2>
          <p>
            We envision a digital future where websites transcend static layouts to become intelligent, agentic ecosystems that intuitively adapt to and act upon user intent in real-time.
          </p>
        </div>
        <div className="bento-item tech">
          <h2>Visual & Tactile Aesthetics</h2>
          <p>
            By prioritizing a "human-centric" touch by integrating 3D textures, glassmorphism, and depth to create digital surfaces that feel physically tangible. We harmonize these tactile sensations with bold, modern visuals to ensure every user interaction is an immersive, sensory-rich experience that breaks the "flat-screen" barrier.
          </p>
        </div>
        <div className="bento-item tech">
          <h2>Under the Hood</h2>
          <p>
            Leveraging WebAssembly (WASM) and PWA technologies to deliver high-performance, app-like experiences that run at near-native speeds directly in the browser, ensuring your site is powerful, offline-capable, and accessible on any device. Simultaneously, we integrate Spatial Audio for immersive, 3D auditory depth while adhering to Sustainable Web Design principles.
          </p>
        </div>
        <div className="bento-item tech">
          <h2>High-Fidelity Interactivity</h2>
          <p>
            High-fidelity interactivity is a seamless fusion of physics-aware motion and tactile aesthetics that transform static browsing into an immersive, cinematic journey. By leveraging technologies like WebGPU, we create digital environments that respond intuitively to user intent, making every scroll and click feel tangible, purposeful, and alive.
          </p>
        </div>
      </section>

      {/* Project Links Section */}
      <section className="neo-projects">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">🌐</div>
            <div className="project-info">
              <h3>JavaScript Arcade</h3>
              <p>A free platform dedicated to bringing you a collection of classic arcade games reimagined with modern JavaScript technology.</p>
              <a href="https://javascriptarcade.netlify.app/" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-icon">🌐</div>
            <div className="project-info">
              <h3>MVP Consulting</h3>
              <p>Offers personalized immigration consulting services with a deep understanding of local requirements and procedures. Our commitment is to make your immigration journey as smooth and stress-free as possible.</p>
              <a href="https://mvpconsult.netlify.app/" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-icon">🌐</div>
            <div className="project-info">
              <h3>itdidactix</h3>
              <p>Provides practical, exam-focused and career-ready training across a range of IT topics — from foundational computer skills to cloud, security and emerging AI tool usage.</p>
              <a href="https://itdidactix.netlify.app/" className="project-link">View Project</a>
            </div>
          </div>
        </div>
      </section>

    {/* Chatbot Placeholder */}
      <section className="neo-chatbud">
        <h2>AI Chatbud</h2>
        <div className="chatbud-placeholder">[Intelligent assistant coming soon]</div>
      </section>

      {/* Footer */}
      <footer className="neo-footer">
        <span>&copy; {new Date().getFullYear()} neogen web design. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
