"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function PublicationsPage() {
  const [showAll, setShowAll] = useState(false)

  const publications = [
    {
      year: 2025,
      title:
        "Reproducibility and sensitivity of quantitative susceptibility mapping for clinical research in deep gray matter",
      authors:
        "Salman, F., Ramesh, A., Jochmann, T., Prayer, M., Adegbemigun, A., Reeves, J.A., Wilding, G.E., Cho. J., Jakimovski, D., Bersland, N., Dwyer M.G., Zivadinov, R., and Schweser, F.",
      journal: "Hum Brain Mapp",
      status: "In Press",
      url: null, // URL set to null for this publication
    },
    {
      year: 2024,
      title: "Oxygen extraction fraction in small vessel disease: relationship to disease burden and progression",
      authors:
        "Zhang, R., Lin, M., J. Cho, J., Jiaerken, Y., Wang, S., Hong, H., Guan, X., Zhang, Y., Xie, L., Liu, L., Cui, L., Zhang, M., Siero, J., and Huang, P.",
      journal: "Brain",
      status: "In Press",
      url: null, // URL set to null for this publication
    },
    {
      year: 2024,
      title:
        "Sensitivity assessment of QSM+qBOLD (or QQ) in detecting physiological changes in oxygen extraction fraction (OEF)",
      authors: "Elanghovan, P., Nguyen, T., Spincemaille, P., Gupta, A., Wang, Y., and Cho, J.",
      journal: "J Cereb Blood Flow Metab",
      pages: "1-11",
      url: "https://journals.sagepub.com/doi/10.1177/0271678X241298584",
    },
    {
      year: 2024,
      title:
        "Trajectories and Sex Differences of Brain Structure, Oxygenation, and Perfusion Functions in Normal Aging",
      authors:
        "Wu, D., Li, Y., Zhang, S., Chen, Q., Fang, J., Cho, J., Wang, Y., Yan, S., Zhu, W., Lin, J., Wang, Z., Zhang, Y.",
      journal: "NeuroImage",
      id: "120903",
      url: "https://www.sciencedirect.com/science/article/pii/S1053811924004002",
    },
    {
      year: 2024,
      title:
        "The changes of oxygen extraction fraction in different types of lesions in relapsing-remitting multiple sclerosis: A cross-sectional and longitudinal study",
      authors: "Xie, Y., Zhang, S., Wu, D., Yao, Y., Cho, J., Lu, J., Zhu, H., Wang, Y., Zhang, Y., and Zhu, W.",
      journal: "Neurol Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/38492126/",
    },
    {
      year: 2024,
      title:
        "Multi-echo complex quantitative susceptibility mapping and quantitative blood oxygen level-dependent magnitude (mcQSM+qBOLD or mcQQ) for oxygen extraction fraction (OEF) mapping",
      authors: "Cho, J., Zhang, J., Spincemaille, P., Zhang, H., Nguyen T.D., Zhang, S., Gupta A., Wang, Y.",
      journal: "Bioengineering",
      volume: "11",
      pages: "131",
      url: "https://www.mdpi.com/2306-5354/11/2/131",
    },
    {
      year: 2023,
      title: "Spatiotemporal patterns of brain iron-oxygen metabolism in patients with Parkinson's disease",
      authors: "Yan, Y., Lu, J., Li, Y., Cho, J., Zhang, S., Zhu, W., Wang, Y.",
      journal: "Eur Radiol",
      volume: "0",
      pages: "1-10",
      url: "https://link.springer.com/article/10.1007/s00330-023-10283-1",
    },
    {
      year: 2023,
      title:
        "Evaluating Physiological MRI Parameters in Patients with Brain Metastases Undergoing Stereotactic Radiosurgery - A Preliminary Analysis and Case Report",
      authors:
        "Van Grinsven, E.E., De Leeuw, J., Siero, J.C.W., Verhoeff, J.J.C., Van Zandvoort, M.J.E., Cho, J., Philippens, M.E.P., and Bhogal, A.A.",
      journal: "Cancers",
      volume: "15",
      pages: "4298",
      url: "https://www.mdpi.com/2072-6694/15/17/4298",
    },
    {
      year: 2023,
      title: "Cerebral oxygen metabolism from MRI susceptibility",
      authors: "Biondetti, E., Cho, J., and Lee, Y.",
      journal: "Neuroimage",
      volume: "276",
      id: "120189",
      url: "https://pubmed.ncbi.nlm.nih.gov/37230206/",
    },
    {
      year: 2023,
      title:
        "Cerebral oxygen extraction fraction declines with ventricular enlargement in patients with normal pressure hydrocephalus",
      authors: "Zhuang, L., Cho, J., Chiang, G.C.Y, Kovanlikaya, I., Heier L.A., Dyke J.P., and Wang, Y.",
      journal: "Clin Imaging",
      volume: "97",
      pages: "22-27",
      url: "https://pubmed.ncbi.nlm.nih.gov/36871361/",
    },
    {
      year: 2023,
      title:
        "Assessing cerebral oxygen metabolism changes in patients with preeclampsia using voxel-based morphometry of oxygen extraction fraction maps in magnetic resonance imaging",
      authors: "Zhang, Q., Sui, C., Cho, J., Yang, L., Chen, T., Guo, B., Gillen, K.M., Li, J., Guo, L., and Wang, Y.",
      journal: "Korean J Radiol",
      volume: "24",
      pages: "324-337",
      url: "https://pubmed.ncbi.nlm.nih.gov/36907593/",
    },
    {
      year: 2022,
      title:
        "Oxygen extraction fraction (OEF) assesses cerebral oxygen metabolism of deep gray matter in patients with pre-eclampsia",
      authors: "Yang, L., Cho, J., Chen, T., Gillen, K.M., Li, J., Zhang, Q., Guo, L., and Wang, Y.",
      journal: "Eur Radiol",
      volume: "30",
      pages: "6058-6069",
      url: "https://pubmed.ncbi.nlm.nih.gov/35348866/",
    },
    {
      year: 2022,
      title:
        "Brain oxygen extraction and neural tissue susceptibility are associated with cognitive impairment in older individuals",
      authors:
        "Chiang, G.C., Cho, J., Dyke, J., Zhang, H., Zhang, Q., Tokov, M., Nguyen T., Kovanlikaya, I., Amoashiy, M., Leon, M.D., Wang, Y.",
      journal: "J NeuroImaging",
      volume: "32",
      pages: "697-709",
      url: "https://pubmed.ncbi.nlm.nih.gov/35294075/",
    },
    {
      year: 2022,
      title: "Sub-second Accurate Myeline Water Fraction Reconstruction from FAST-T2 Data with 3D UNET",
      authors:
        "Kim, J., Ngyuyen, T., Zhang, J., Gauthier, S., Marcille, M., Zhang, H., Cho, J., Spincemaille, P., Wang, Y.",
      journal: "Magn Reson Med",
      volume: "87",
      pages: "2979-2988",
      url: "https://pubmed.ncbi.nlm.nih.gov/35092094/",
    },
    {
      year: 2022,
      title:
        "QQ-NET-using deep learning to solve Quantitative Susceptibility Mapping and Quantitative Blood Oxygen Level Dependent magnitude (QSM+qBOLD or QQ) based Oxygen Extraction Fraction (OEF) mapping",
      authors:
        "Cho, J., Zhang, J., Spincemaille, P., Zhang H., Hubertus, S., Wen, Y., Jafari, R., Zhang, S., Nguyen T.D., Gupta, A., Wang, Y.",
      journal: "Magn Reson Med",
      volume: "87",
      pages: "1093-1637",
      url: "https://pubmed.ncbi.nlm.nih.gov/34719059/",
    },
    {
      year: 2022,
      title:
        "The Central Vein Sign in Multiple Sclerosis Lesions: Susceptibility Relaxation Optimization from a routine MRI Multiecho Gradient Echo Sequence",
      authors:
        "Li, J., Huang, W., Luo, X., Wen, Y., Cho, J., Kovanlikaya, I., Gauthier S., Nguyen, T.D., Spincemaille, P., and Wang, Y.",
      journal: "J NeuroImaging",
      volume: "32",
      pages: "48-56",
      url: "https://pubmed.ncbi.nlm.nih.gov/34664747/",
    },
    {
      year: 2021,
      title: "Brain oxygen extraction fraction mapping in patients with multiple sclerosis",
      authors:
        "Cho, J., Nguyen, T., Huang, W., Sweeney, E., Luo, X., Kovanlikaya, I., Zhang, S., Gillen, K., Spincemaille, P., Guta, A., Gauthier, S., and Wang, Y.",
      journal: "J Cereb Blood Flow Metab",
      volume: "42",
      pages: "338-348",
      url: "https://pubmed.ncbi.nlm.nih.gov/34558996/",
    },
    {
      year: 2021,
      title:
        "Quantitative susceptibility mapping (QSM) and R1 measurement: determination of the myelin volume fraction in the aging ex vivo rat corpus callosum",
      authors: "Cho, H., Lee, H., Gong, Y., Kim, Y., Cho, J., and Cho., H.",
      journal: "NMR Biomed",
      id: "e4645",
      url: "https://pubmed.ncbi.nlm.nih.gov/34739153/",
    },
    {
      year: 2021,
      title:
        "Application of Cluster Analysis of Time Evolution for MRI Imaging-derived Oxygen Extraction Fraction Mapping: a promising strategy for the genetic profile prediction and grading of glioma",
      authors: "Nanxi, S., Zhang, S., Cho, J., Li, S., Zhang, J., Xie, Y., Wang, Y., Wenzhen, Z.",
      journal: "Front Neurosci",
      volume: "15",
      id: "736891",
      url: "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2021.736891/full",
    },
    {
      year: 2021,
      title: "The Spatiotemporal Evolution of MRI-Derived Oxygen Extraction Fraction and Perfusion in Ischemic Stroke",
      authors:
        "Wu, D., Zhou, Y., Cho, J., Li, S., Qin, Y., Zhang, G., Yan, S., Xie, Y., Zhang, S., Zhu, W., and Wang, Y.",
      journal: "Front Neurosci",
      id: "716031",
      url: "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2021.716031/full",
    },
    {
      year: 2021,
      title:
        "Temporal clustering, tissue composition, and total variation for mapping oxygen extraction fraction using QSM and quantitative BOLD",
      authors: "Cho, J., Spincemaille, P., Nguyen T.D., Gupta, A., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "86",
      pages: "2635-2646",
      url: "https://pubmed.ncbi.nlm.nih.gov/34110656/",
    },
    {
      year: 2021,
      title:
        "Multiecho complex total field inversion method (mcTFI) for improved signal modelling in quantitative susceptibility mapping",
      authors:
        "Wen, Y., Spincemaille, P., Nguyen, T., Cho, J., Kovanlikaya, I., Anderson, J., Wu, G., Yang, B., Fung, M., Li, K., Kelley, D., Benhamo, N., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "84",
      pages: "2165-2178",
      url: "https://pubmed.ncbi.nlm.nih.gov/34028868/",
    },
    {
      year: 2021,
      title:
        "Deep neural network for water/fast separation: Supervised training, unsupervised training, and no training",
      authors:
        "Jafari, R., Spincemaille, P., Zhang, J., Nguyen, T.D., Luo, X., Cho, J., Margolis, D., Prince., MR, and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "85",
      pages: "2263-2277",
      url: "https://pubmed.ncbi.nlm.nih.gov/33107127/",
    },
    {
      year: 2021,
      title:
        "Cerebral oxygen extraction fraction: Comparison of dual-gas challenge BOLD with CBF and challenge-free gradient echo QSM+qBOLD",
      authors: "Cho, J., Ma, Y., Spincemaille, P., Pike GB, and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "85",
      pages: "953-961",
      url: "https://pubmed.ncbi.nlm.nih.gov/32783233/",
    },
    {
      year: 2020,
      title:
        "Cerebral OEF quantification: A comparison study between quantitative susceptibility mapping and dual-gas calibrated BOLD imaging",
      authors: "Ma, Y., Sun, H., Cho, J., Mazerolle, E. L., Wang, Y., and Pike, B.",
      journal: "Magn Reson Med",
      volume: "83",
      pages: "68-82",
      url: "https://pubmed.ncbi.nlm.nih.gov/31373088/",
    },
    {
      year: 2020,
      title:
        "Cerebral oxygen extraction fraction (OEF): Comparison of challenge-free gradient echo QSM+qBOLD (QQ) with 15O PET in healthy adults",
      authors: "Cho, J., Lee, J., An, H., Goyal, M.S., Su, Y., and Wang, Y.",
      journal: "J Cereb Blood Flow Metab",
      volume: "41",
      pages: "1658-1668",
      url: "https://pubmed.ncbi.nlm.nih.gov/33243071/",
    },
    {
      year: 2020,
      title:
        "Initial Experience of Challenge-Free MRI-based Oxygen Extraction Fraction Mapping of Ischemic Stroke at Various Stages: Comparison With Perfusion and Diffusion Mapping",
      authors: "Zhang, S., Cho, J., Nguyen T.D., Spincemaille, P., Gupta, A., Zhu, W., and Wang, Y.",
      journal: "Front Neurosci",
      id: "535441",
      url: "https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2020.535441/full",
    },
    {
      year: 2020,
      title: "Quantification of brain oxygen extraction fraction using QSM and a hyperoxic challenge",
      authors: "Ma, Y., Mazerolle, E.L., Cho, J., Sun, H., Wang, Y., and Pike, G.B.",
      journal: "Magn Reson Med",
      volume: "84",
      pages: "3271-3285",
      url: "https://pubmed.ncbi.nlm.nih.gov/32602975/",
    },
    {
      year: 2020,
      title:
        "Cluster analysis of time evolution (CAT) for quantitative susceptibility mapping (QSM) and quantitative blood oxygen level-dependent magnitude (qBOLD)-based oxygen extraction fraction (OEF) and cerebral metabolic rate of oxygen (CMRO2)",
      authors: "Cho, J., Zhang, S., Kee, Y., Spincemaille, P., Nguyen, T.D., Hubertus, S., Gupta, A., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "83",
      pages: "844-857",
      url: "https://pubmed.ncbi.nlm.nih.gov/31502723/",
    },
    {
      year: 2019,
      title:
        "Dipole modeling of multispectral signal for detecting metallic biopsy markers during MRI-guided breast biopsy: a pilot study",
      authors:
        "Eskreis-Winkler, S., Simon, K., Reichman, M., Spincemaille, P., Nguyen, T.D., Kee, Y., Cho, J., Christos, P.J., Drotman, M., Prince, M.R., Morris, E.A., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "83",
      pages: "1380-1389",
      url: "https://pubmed.ncbi.nlm.nih.gov/31631408/",
    },
    {
      year: 2019,
      title:
        "Using an artificial neural network for fast mapping of the oxygen extraction fraction with combined QSM and quantitative BOLD",
      authors: "Hubertus, S., Thomas, S., Cho, J., Zhang, S., Wang, Y., and Schad, L.R.",
      journal: "Magn Reson Med",
      volume: "82",
      pages: "2199-2211",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/mrm.27882",
    },
    {
      year: 2019,
      title:
        "Comparison of gradient echo and gradient echo sampling of spin echo sequence for the quantification of the oxygen extraction fraction from a combined quantitative susceptibility mapping and quantitative BOLD (QSM+qBOLD) approach",
      authors: "Hubertus, S., Thomas, S., Cho, J., Zhang, S., Wang, Y., and Schad, L.R.",
      journal: "Magn Reson Med",
      volume: "82",
      pages: "1491-1503",
      url: "https://pubmed.ncbi.nlm.nih.gov/31155754/",
    },
    {
      year: 2019,
      title: "Quantitative susceptibility mapping of magnetic quadrupole moments",
      authors: "Cho, J., Zhou, D., Kee, Y., Spincemaille, P., and Wang, Y.",
      journal: "Concepts in MR Part A",
      id: "7174937",
      url: "https://onlinelibrary.wiley.com/doi/10.1155/2019/7174937",
    },
    {
      year: 2018,
      title:
        "Cerebral metabolic rate of oxygen (CMRO2) mapping by combining quantitative susceptibility mapping (QSM) and quantitative blood oxygenation level-dependent imaging (qBOLD)",
      authors: "Cho J., Kee, Y., Spincemaille, P., Nguyen, T.D., Zhang, J., Gupta, A., Zhang, S., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "80",
      pages: "1595-1604",
      url: "https://pubmed.ncbi.nlm.nih.gov/29516537/",
    },
    {
      year: 2018,
      title:
        "Coherence enhancement in quantitative susceptibility mapping by means of anisotropic weighting in morphology enabled dipole inversion",
      authors: "Kee, Y., Cho, J., Deh, K., Liu, Z., Spincemaille, P., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "79",
      pages: "1172-1180",
      url: "https://pubmed.ncbi.nlm.nih.gov/28556244/",
    },
    {
      year: 2018,
      title:
        "Quantitative susceptibility mapping-based cerebral metabolic rate of oxygen mapping with minimum local variance",
      authors: "Zhang, J., Cho, J., Zhou, D., Nguyen, T.D., Spincemaille, P., Gupta, A., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "79",
      pages: "172-179",
      url: "https://pubmed.ncbi.nlm.nih.gov/28295523/",
    },
    {
      year: 2017,
      title:
        "Quantitative susceptibility mapping (QSM) algorithms: mathematical rationale and computational implementations",
      authors: "Kee, Y., Liu, Z., Zhou, L., Dimov, A., Cho, J., de Rochefort, L., Seo, J.K., and Wang, Y.",
      journal: "IEEE TRANS BIO ENGIN",
      volume: "64",
      pages: "2531-2545",
      url: "https://pubmed.ncbi.nlm.nih.gov/28885147/",
    },
    {
      year: 2017,
      title:
        "Susceptibility underestimation in a high-susceptibility phantom: dependence on imaging resolution, magnitude contrast, and other parameters",
      authors: "Zhou, D., Cho, J., Zhang, J., Spincemaille, P., and Wang, Y.",
      journal: "Magn Reson Med",
      volume: "78",
      pages: "1080-1086",
      url: "https://pubmed.ncbi.nlm.nih.gov/27699883/",
    },
    {
      year: 2016,
      title:
        "UTE-ΔR2-ΔR2* combined MR whole brain angiogram using dual-contrast superparamagnetic iron oxide nanoparticles",
      authors: "Jung, H., Jin, S., Cho, J., Han, S., Lee, D., and Cho, H.",
      journal: "NMR in Biomedicine",
      volume: "29",
      issue: "6",
      pages: "690-701",
      url: "https://analyticalsciencejournals.onlinelibrary.wiley.com/doi/10.1002/nbm.3514",
    },
    {
      year: 2015,
      title:
        "Robust MR assessment of cerebral blood volume and mean vessel size using SPION-enhanced ultrashort echo acquisition",
      authors: "Han, S., Cho, J., Jung, H., Suh, J., Kim, J., Kim, Y., Cho, G., and Cho, H.",
      journal: "NeuroImage",
      volume: "112",
      pages: "382-389",
      url: "https://pubmed.ncbi.nlm.nih.gov/25818683/",
    },
    {
      year: 2014,
      title: "Dual MRI T1 and T2* contrast with size-controlled iron oxide nanoparticles",
      authors: "Jung, H., Park, B., Lee, C., Cho, J., Suh, J., Park, J., Kim, Y., Kim, J., Cho, G., and Cho, H.",
      journal: "Nanomedicine: Nanotechnology, Biology, and Medicine",
      volume: "10",
      pages: "1679-1689",
      url: "https://pubmed.ncbi.nlm.nih.gov/24842765/",
    },
    {
      year: 2014,
      title:
        "Response of the Primary Auditory and Non-Auditory Cortices to Acoustic Stimulation: A Manganese-Enhanced MRI Study",
      authors:
        "Kim, H., Cho, J., Kim, Y., Song, Y., Chun, S., Suh, J., Kim, J., Ryu, Y., Choi, S., Cho, H., and Cho, G.",
      journal: "PLoS One",
      volume: "9",
      id: "e90427",
      url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0090427",
    },
  ]

  const displayedPublications = showAll ? publications : publications.slice(0, 10)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6 font-sans">Publications</h1>
        <p className="text-lg text-foreground leading-relaxed">
          Our research contributions to the field of functional neuroimaging and neuroscience.
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {displayedPublications.map((pub, index) => (
          <div key={index} className="flex gap-4 sm:gap-6">
            {/* Year Column */}
            <div className="flex-shrink-0 w-12 sm:w-16">
              <div className="text-lg sm:text-xl font-bold text-accent font-sans">{pub.year}</div>
            </div>

            {/* Publication Content */}
            <div className="flex-1 min-w-0">
              <Card className="bg-white border-secondary/20 hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-primary mb-3 leading-tight text-lg font-sans">
                        {pub.url && pub.url !== "#" ? (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors inline-flex items-start gap-2"
                          >
                            {pub.title}
                            <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0" />
                          </a>
                        ) : (
                          pub.title
                        )}
                      </CardTitle>
                      <p className="text-foreground/70 text-sm mb-3">{pub.authors}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <p className="text-foreground font-medium text-sm">
                      <em>{pub.journal}</em>
                      {pub.volume && ` ${pub.volume}`}
                      {pub.issue && `(${pub.issue})`}
                      {pub.pages && `: ${pub.pages}`}
                      {pub.status && ` - ${pub.status}`}
                      {pub.id && ` ID: ${pub.id}`}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {pub.url && pub.url !== "#" && pub.url !== null && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-accent text-white border-accent hover:bg-accent/90"
                      >
                        <a href={pub.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Full Text
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && publications.length > 10 && (
        <div className="text-center mt-10">
          <Button onClick={() => setShowAll(true)} className="bg-primary text-white px-8 py-2 hover:bg-primary/90">
            See More Publications
          </Button>
        </div>
      )}

      {showAll && (
        <div className="text-center mt-10">
          <Button
            onClick={() => setShowAll(false)}
            variant="outline"
            className="px-8 py-2 border-accent text-accent hover:bg-accent hover:text-white"
          >
            Show Less
          </Button>
        </div>
      )}

      <div className="mt-10 text-center">
        <p className="text-foreground/60 text-sm">
          Showing {displayedPublications.length} of {publications.length} publications
        </p>
      </div>
    </div>
  )
}
