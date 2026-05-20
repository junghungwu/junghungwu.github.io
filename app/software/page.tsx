import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Download } from "lucide-react"
import React from "react"

export default function SoftwarePage() {
  const contactEmail = "junghunc@gwu.edu"

  const softwareTools = [
    {
      name: "QQ-CCTV",
      status: "Available",
      language: "Linux Executable",
      description: [
        "A machine learning algorithm (CCTV; temporal Clustering, tissue Composition, and Total Variation) for OEF mapping that substantially improves effective signal-to-noise ratio (SNR) by clustering voxels with similar MRI signal patterns. CCTV enables robust OEF quantification and has been shown to detect OEF abnormalities in neurologic disorders.",
        <><strong>Implementation: </strong>You can download the QQ-CCTV executable for two input formats: Dicom and NIfTTI. After downloding, please follow the instructions in Readme.txt. If you use this executable, please cite references listed in Papers section below.</>,
      ],
      papers: [
        {
          label: "QQ",
          url: "https://pubmed.ncbi.nlm.nih.gov/29516537/",
        },
        {
          label: "CAT",
          url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6879790/",
        },
        {
          label: "CCTV",
          url: "https://pubmed.ncbi.nlm.nih.gov/34110656/",
        },
      ],
      downloadUrl: "https://gwu.box.com/s/p091t0mxbhuhryk9d0n7dujjh2h6uvsk/", // Replace with actual GWBox link
    },
    {
      name: "QQ-NET",
      status: "Available",
      language: "Python",
      description:[
        "A deep learning-based OEF mapping tool (NET) built on the QQ biophysics model. Using a U-Net architecture, QQ-NET achieves accurate OEF estimation with reconstruction speeds approximately 150 times faster than conventional optimization approaches, enabling practical deployment in both research and clinical settings.",
        <><strong>Implementation: </strong>To run the code, download all the files into a folder, make sure all the libraries listed in codes/basics/unet3d_b_limit_p.py exist, and run /codes/QQ_NET_test_simul.ipynb. QQ-NET result will be saved /result/SNR100_NET_p5_trial*_overlap30.mat. To plot results in MATLAB, run /result/see_simul_horizontal.m. Please note that QQ-NET must be re-trained if the test TE sets differ from the training TE set used in the QQ-NET paper. If you use this code, please cite references listed in Papers section below.</>,
    ],
      papers: [
        {
          label: "QQ",
          url: "https://pubmed.ncbi.nlm.nih.gov/29516537/",
        },
        {
          label: "QQ-NET",
          url: "https://pubmed.ncbi.nlm.nih.gov/34719059/",
        },
      ],
      downloadUrl: "https://gwu.box.com/s/z2hzvrbm69ak48uqhgqwjhcpv1cm4u2m", // Replace with actual GWBox link
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6 font-sans">Software</h1>
        <p className="text-lg text-foreground leading-relaxed font-sans">
          Our lab develops software tools for quantitative OEF mapping and neuroimaging research. Tools are available
          for academic and research use. Please contact us at{" "}
          <a href={`mailto:${contactEmail}`} className="text-accent hover:text-accent/80 underline">
            {contactEmail}
          </a>{" "}
          if you have any questions or are interested in collaborating with our group.
        </p>
      </div>

      {/* Software Tools Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-10 font-sans">Tools</h2>
        <div className="space-y-8">
          {softwareTools.map((tool, index) => (
            <Card key={index} className="bg-white border-secondary/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-primary font-sans text-xl mb-2">
                      {tool.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-accent text-white">
                        <Code className="w-3 h-3 mr-1" />
                        {tool.language}
                      </Badge>
                      <Badge variant="outline" className="border-green-500 text-green-700">
                        {tool.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-foreground leading-relaxed font-sans">
  {tool.description.map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ))}
</div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start text-foreground gap-2">
                    <ExternalLink className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <span>
                      <strong>Papers: </strong>
                      {tool.papers.map((paper, paperIndex) => (
                        <span key={paperIndex}>
                          <a
                            href={paper.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accent/80 underline"
                          >
                            {paper.label}
                          </a>
                          {paperIndex < tool.papers.length - 1 && <span className="mx-1">·</span>}
                        </span>
                      ))}
                    </span>
                  </div>

                  <div className="flex items-center text-foreground gap-2">
                    <Download className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>
                      <strong>Download: </strong>
                      <a
                        href={tool.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 underline"
                      >
                        GWBox
                      </a>
                    </span>
                  </div>


                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
