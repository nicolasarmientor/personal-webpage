import type { Metadata } from "next";
import Link from "next/link";
import ProjectArchive from "../../components/ProjectArchive";
export const metadata: Metadata = { title: "Projects | Nicolas Sarmiento", description: "The full project portfolio of Nicolas Sarmiento, software and aerospace engineering student at Auburn University." };
export default function Portfolio() {
return <main className="archive-page" id="top"><div className="tech-grid"/><header className="archive-header"><nav aria-label="Portfolio navigation"><Link href="/" className="archive-brand">NS<span>/</span></Link><Link href="/">← Home</Link><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></nav></header>
<div className="archive-shell"><header className="archive-intro"><p className="archive-eyebrow">NICOLAS SARMIENTO / FULL PORTFOLIO</p><h1>Projects, experiments,<br/><span>and engineering work.</span></h1><p>A closer look at the software I’ve built, the ideas I’ve explored, and the engineering behind them.</p></header>
<div className="archive-layout"><aside className="archive-index"><p className="archive-eyebrow">EXPLORE</p><nav aria-label="Page sections"><a href="#all-projects">01 <span>Projects</span></a><Link href="/background#education">02 <span>Education ↗</span></Link><Link href="/background#experience">03 <span>Experience ↗</span></Link></nav><a className="archive-contact" href="mailto:nsarmiento655@outlook.com">Get in touch ↗</a></aside><div className="archive-content">
<section id="all-projects"><div className="archive-section-title"><span>01</span><h2>All projects</h2></div><p className="archive-lede">Software applications, machine-learning experiments, aerospace design, and early programming work.</p><ProjectArchive/></section>

</div></div><footer className="archive-footer"><Link href="/">← Back to the homepage</Link><a href="#top">Back to top ↑</a></footer></div></main>;
}
