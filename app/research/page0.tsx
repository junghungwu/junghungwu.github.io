import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function ResearchPage() {
  const researchProjects = [
    {
      title: "Biophysics Modeling",
      description: `To obtain an accurate OEF map, we are developing realistic biophysics models based on MR physics. For instance, our recent model, namely QQ, considers deoxyhemoglobin effect, i.e. OEF effect, on MRI phase signal using quantitative susceptibility mapping (QSM) and magnitude signal using quantitative blood oxygen level dependent magnitude (qBOLD). QQ can estimate OEF using a single routine MRI sequence without impractical vascular challenges unlike the other methods, which provides a high potential in clinical use.`,
      reference: (
        <span>
          See our recent work on an integrative OEF model,{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/29516537/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            QSM+qBOLD=QQ
            <ExternalLink className="w-3 h-3" />
          </a>
        </span>
      ),
      imageSrc: "/images/biophysics-modeling.png",
      imageAlt: "Biophysics modeling showing QSM, qBOLD, T1w, and QSM+qBOLD=QQ brain imaging techniques",
    },
    {
      title: "Data Processing",
      description: `To solve biophysics models robustly, we are developing data processing algorithms including machine learning and deep learning approaches. The biophysics models are complicated with having coupled, multiple model parameters. Hence, they are difficult to solve, e.g., involved with poorly conditioned non-convex optimization. To obtain reliable OEF, machine learning and deep learning algorithms have been developed. For instance, cluster analysis of time evolution (CAT) is a machine learning algorithm that improves effective signal-to-noise ratio (SNR) substantially through clustering the voxels with similar signal patterns. CAT enabled the detection of OEF abnormalities in stroke. Also, a deep learning approach, NET, led to improved OEF accuracy with substantially faster, e.g., 150 times, reconstruction speed.`,
      reference: (
        <span>
          See our recent work on machine learning,{" "}
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6879790/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            CAT
            <ExternalLink className="w-3 h-3" />
          </a>
          ,{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/34110656/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            CCTV
            <ExternalLink className="w-3 h-3" />
          </a>
          , and deep learning,{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/34719059/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            NET
            <ExternalLink className="w-3 h-3" />
          </a>
        </span>
      ),
      imageSrc: "/images/data-processing.png",
      imageAlt: "Data processing techniques showing DWI, QQ, QQ-CAT, and QQ-NET brain imaging results",
    },
    {
      title: "Validation",
      description: `To validate our techniques, we are comparing ours with other imaging methods. For clinical application, the validation is essential to investigate the accuracy of our techniques. Our QQ provided consistent OEF values to a well-investigated MRI method, Calibrated fMRI, and the reference standard 15O-PET in healthy subjects.`,
      reference: (
        <span>
          See our recent work on comparison with{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/32783233/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            Calibrated fMRI
            <ExternalLink className="w-3 h-3" />
          </a>{" "}
          and{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/33243071/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            15O-PET
            <ExternalLink className="w-3 h-3" />
          </a>
        </span>
      ),
      imageSrc: "/images/validation.png",
      imageAlt:
        "Validation comparison showing T1w, 15O-PET, and QQ brain imaging results across different orientations",
    },
    {
      title: "Clinical Application",
      description: `To investigate disease progression and therapeutic strategies, we are applying our technique into neurologic disorders.`,
      reference: (
        <span>
          See our recent work in{" "}
          <a
            href="https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2021.716031/full"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            stroke
            <ExternalLink className="w-3 h-3" />
          </a>
          ,{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/34558996/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            multiple sclerosis
            <ExternalLink className="w-3 h-3" />
          </a>
          ,{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/35294075/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            dementia
            <ExternalLink className="w-3 h-3" />
          </a>
          ,{" "}
          <a
            href="https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2021.736891/full"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            brain cancer
            <ExternalLink className="w-3 h-3" />
          </a>
          ,{" "}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/35348866/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:text-accent/80 underline"
          >
            pre-eclampsia
            <ExternalLink className="w-3 h-3" />
          </a>
        </span>
      ),
      imageSrc: "/images/clinical-application.png",
      imageAlt: "Clinical application showing T2w, QSM, and OEF brain imaging with detailed regional analysis",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6 font-sans">Research Projects</h1>
        <p className="text-lg text-foreground leading-relaxed mb-8 font-sans">
          Quantitative mapping of cerebral oxygen extraction fraction (OEF) is critical to investigate brain tissue
          viability, functions, abnormalities in neurologic disorders. However, there is no OEF mapping technique
          routinely used in clinical setting. Our research focuses on clinically applicable quantitative mapping of OEF:
        </p>

        {/* Research Focus Areas - Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-16">
          <div className="flex items-center space-x-3 p-6 bg-muted rounded-lg border border-secondary/20 font-sans">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
              1
            </div>
            <span className="text-foreground font-medium font-sans">Biophysics modeling</span>
          </div>

          <div className="flex items-center space-x-3 p-6 bg-muted rounded-lg border border-secondary/20">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
              2
            </div>
            <span className="text-foreground font-medium font-sans">Data processing</span>
          </div>

          <div className="flex items-center space-x-3 p-6 bg-muted rounded-lg border border-secondary/20">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
              3
            </div>
            <span className="text-foreground font-medium font-sans">Validation</span>
          </div>

          <div className="flex items-center space-x-3 p-6 bg-muted rounded-lg border border-secondary/20">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
              4
            </div>
            <span className="text-foreground font-medium font-sans">Clinical application</span>
          </div>
        </div>
      </div>

      {/* Research Projects - Detailed Layout */}
      <div className="space-y-20">
        {researchProjects.map((project, index) => (
          <div key={index} className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Conditional rendering based on index for alternating layout */}
            {index % 2 === 0 ? (
              <>
                {/* Image on left for even indices (0, 2, 4...) */}
                <div className="lg:col-span-2">
                  <Image
                    src={project.imageSrc || "/placeholder.svg"}
                    alt={project.imageAlt}
                    width={420}
                    height={280}
                    className="w-full h-auto rounded-lg shadow-md bg-muted border border-secondary/20"
                  />
                </div>
                {/* Content on right */}
                <div className="lg:col-span-3 space-y-6">
                  <h2 className="text-2xl font-bold text-primary font-sans">{project.title}</h2>
                  <p className="text-foreground leading-relaxed text-base font-sans">{project.description}</p>
                  <p className="text-accent font-medium italic text-sm font-sans">{project.reference}</p>
                </div>
              </>
            ) : (
              <>
                {/* Content on left for odd indices (1, 3, 5...) */}
                <div className="lg:col-span-3 space-y-6 lg:order-1">
                  <h2 className="text-2xl font-bold text-primary font-sans">{project.title}</h2>
                  <p className="text-foreground leading-relaxed text-base font-sans">{project.description}</p>
                  <p className="text-accent font-medium italic text-sm font-sans">{project.reference}</p>
                </div>
                {/* Image on right */}
                {index === 3 ? (
                  <div className="lg:col-span-2 lg:order-2">
                    <Image
                      src={project.imageSrc || "/placeholder.svg"}
                      alt={project.imageAlt}
                      width={420}
                      height={280}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                ) : (
                  <div className="lg:col-span-2 lg:order-2">
                    <Image
                      src={project.imageSrc || "/placeholder.svg"}
                      alt={project.imageAlt}
                      width={420}
                      height={280}
                      className="w-full h-auto rounded-lg shadow-md bg-muted border border-secondary/20"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
