import { ExternalLink, Mail } from "lucide-react"

export default function SoftwarePage() {
  const softwareTools = [
    {
      title: "QQ (QSM+qBOLD)",
      status: "Available",
      language: "MATLAB",
      description: `QQ is an integrative biophysics model combining quantitative susceptibility mapping (QSM) and quantitative BOLD (qBOLD) for OEF estimation. QQ distinguishes deoxyhemoglobin iron in vascular structures from other susceptibility sources, removing unrealistic assumptions present in individual methods and producing more spatially uniform OEF maps from a single routine MRI sequence.`,
      reference: (
        <span>
          See our paper on{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/29516537/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            QSM+qBOLD=QQ
            <ExternalLink className="w-3 h-3" />
          </a>
          . To request access, contact{" "}
          <a
            href="mailto:junghunc@gwu.edu"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            junghunc@gwu.edu
            <Mail className="w-3 h-3" />
          </a>
        </span>
      ),
      imageSrc: "/images/biophysics-modeling.png",
      imageAlt: "QQ biophysics model showing QSM, qBOLD, and QSM+qBOLD=QQ brain imaging results",
    },
    {
      title: "CAT (Cluster Analysis of Time Evolution)",
      status: "Available",
      language: "MATLAB / Python",
      description: `CAT is a machine learning algorithm for OEF mapping that substantially improves effective signal-to-noise ratio (SNR) by clustering voxels with similar MRI signal patterns. This enables robust OEF quantification and has been shown to detect OEF abnormalities in stroke patients where conventional methods fail due to low SNR.`,
      reference: (
        <span>
          See our papers on{" "}
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6879790/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            CAT
            <ExternalLink className="w-3 h-3" />
          </a>{" "}
          and{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/34110656/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            CCTV
            <ExternalLink className="w-3 h-3" />
          </a>
          . To request access, contact{" "}
          <a
            href="mailto:junghunc@gwu.edu"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            junghunc@gwu.edu
            <Mail className="w-3 h-3" />
          </a>
        </span>
      ),
      imageSrc: "/images/data-processing.png",
      imageAlt: "CAT machine learning results showing DWI, QQ, QQ-CAT brain imaging comparison",
    },
    {
      title: "QQ-NET",
      status: "Available",
      language: "Python",
      description: `QQ-NET is a deep learning-based OEF mapping tool built on the QQ biophysics model. Using a U-Net architecture, QQ-NET achieves accurate OEF estimation with reconstruction speeds approximately 150 times faster than conventional optimization approaches, enabling practical deployment in both research and clinical settings.`,
      reference: (
        <span>
          See our paper on{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/34719059/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            QQ-NET
            <ExternalLink className="w-3 h-3" />
          </a>
          . To request access, contact{" "}
          <a
            href="mailto:junghunc@gwu.edu"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            junghunc@gwu.edu
            <Mail className="w-3 h-3" />
          </a>
        </span>
      ),
      imageSrc: "/images/data-processing.png",
      imageAlt: "QQ-NET deep learning OEF mapping results showing improved accuracy and speed",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6 font-sans">Software</h1>
        <p className="text-lg text-foreground leading-relaxed mb-8 font-sans">
          Our lab develops software tools for quantitative OEF mapping and neuroimaging research. Tools are available
          for academic and research use upon request. Please contact us at{" "}
          <a href="mailto:junghunc@gwu.edu" className="text-accent hover:text-accent/80 underline">
            junghunc@gwu.edu
          </a>{" "}
          for access.
        </p>

        {/* Software Summary - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-16">
          <div className="flex items-center space-x-3 p-6 bg-muted rounded-lg border border-secondary/20 font-sans">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
              1
            </div>
            <span className="text-foreground font-medium font-sans">QQ (QSM+qBOLD)</span>
          </div>

          <div className="flex items-center space-x-3 p-6 bg-muted rounded-lg border border-secondary/20">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
              2
            </div>
            <span className="text-foreground font-medium font-sans">CAT</span>
          </div>

          <div className="flex items-center space-x-3 p-6 bg-muted rounded-lg border border-secondary/20">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
              3
            </div>
            <span className="text-foreground font-medium font-sans">QQ-NET</span>
          </div>
        </div>
      </div>

      {/* Software Tools - Detailed Layout (alternating, matching research page) */}
      <div className="space-y-20">
        {softwareTools.map((tool, index) => (
          <div key={index} className="grid lg:grid-cols-5 gap-10 items-start">
            {index % 2 === 0 ? (
              <>
                {/* Image on left for even indices */}
                <div className="lg:col-span-2">
                  <img
                    src={tool.imageSrc || "/placeholder.svg"}
                    alt={tool.imageAlt}
                    className="w-full h-auto rounded-lg shadow-md bg-muted border border-secondary/20"
                  />
                </div>
                {/* Content on right */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary font-sans mb-2">{tool.title}</h2>
                    <div className="flex gap-2">
                      <span className="inline-block text-xs font-medium px-2 py-1 rounded bg-green-100 text-green-800 border border-green-200">
                        {tool.status}
                      </span>
                      <span className="inline-block text-xs font-medium px-2 py-1 rounded bg-muted text-foreground border border-secondary/20">
                        {tool.language}
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed text-base font-sans">{tool.description}</p>
                  <p className="text-accent font-medium italic text-sm font-sans">{tool.reference}</p>
                </div>
              </>
            ) : (
              <>
                {/* Content on left for odd indices */}
                <div className="lg:col-span-3 space-y-6 lg:order-1">
                  <div>
                    <h2 className="text-2xl font-bold text-primary font-sans mb-2">{tool.title}</h2>
                    <div className="flex gap-2">
                      <span className="inline-block text-xs font-medium px-2 py-1 rounded bg-green-100 text-green-800 border border-green-200">
                        {tool.status}
                      </span>
                      <span className="inline-block text-xs font-medium px-2 py-1 rounded bg-muted text-foreground border border-secondary/20">
                        {tool.language}
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed text-base font-sans">{tool.description}</p>
                  <p className="text-accent font-medium italic text-sm font-sans">{tool.reference}</p>
                </div>
                {/* Image on right */}
                <div className="lg:col-span-2 lg:order-2">
                  <img
                    src={tool.imageSrc || "/placeholder.svg"}
                    alt={tool.imageAlt}
                    className="w-full h-auto rounded-lg shadow-md bg-muted border border-secondary/20"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Citation Note */}
      <div className="mt-20 p-6 bg-muted rounded-lg border border-secondary/20">
        <h2 className="text-xl font-bold text-primary mb-3 font-sans">Citation</h2>
        <p className="text-foreground text-sm leading-relaxed font-sans">
          If you use any of our software in your research, please cite the corresponding paper listed on each tool&apos;s
          page. For access requests or general inquiries, please contact{" "}
          <a href="mailto:junghunc@gwu.edu" className="text-accent hover:text-accent/80 underline">
            junghunc@gwu.edu
          </a>
          .
        </p>
      </div>
    </div>
  )
}
