import './App.css'
import { Navbar, NavBody, NavbarLogo, NavItems, NavbarButton } from './components/ui/resizable-navbar'

function App() {

  const navItems = [
    { name: 'Home', link: "#home" },
    { name: 'About', link: "#about" },
    { name: 'Projects', link: "#projects" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-neutral-950 text-white">
      {/* Navbar component */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      <main className="pt-36 px-6 max-w-4xl mx-auto space-y-24">
        <section id="home" className="min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Portofolio Saya
          </h1>
          <p className="text-neutral-400 text-lg">
            Coba scroll halaman ini ke bawah untuk melihat efek animasi resizable (shrink) pada Navbar.
          </p>
        </section>

        <section id="about" className="min-h-[80vh] border-t border-neutral-800 pt-12">
          <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-neutral-400">Area konten tentang saya...</p>
        </section>

        <section id="projects" className="min-h-[80vh] border-t border-neutral-800 pt-12">
          <h2 className="text-3xl font-bold mb-4">Proyek</h2>
          <p className="text-neutral-400">Area daftar proyek...</p>
        </section>
      </main>
    </div>
  )
}

export default App
