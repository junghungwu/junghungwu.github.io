import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, BookOpen } from "lucide-react"

export default function HomePage() {
  const recentNews = [
    {
      date: "2025-09-01",
      monthYear: "September 2025",
      type: "Milestone",
      title: "Lab Establishment at GWU",
      description:
        "Our lab relocated to George Washington University and officially began operations.",
    },
    
    {
      date: "2024-04-01",
      monthYear: "April 2024",
      type: "Grant",
      title: "NIH R01 Grant Awarded (R01 NS136369)",
      description:
        "Our lab received a NIH R01 grant: MRI-Based Quantitative Mapping of Oxygen Extraction Fraction in MS.",
    },
    {
      date: "2023-08-01",
      monthYear: "August 2023",
      type: "Award",
      title: "NIH K99/R00 Award (K99/R00 NS123229)",
      description:
        "Our lab received a NIH R00 award: Development and Validation of MRI mapping of brain oxygen metabolism for clinical use.",
    },
    {
      date: "2022-09-01",
      monthYear: "September 2022",
      type: "Milestone",
      title: "Lab Establishment at SUNY Buffalo",
      description:
        "Our lab was established at SUNY Buffalo, marking the begining of our research program.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
      {/* Hero Section */}
      <section className="mb-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="max-w-4xl mb-0 mt-12">
            <h1 className="font-bold text-primary mb-6 text-5xl font-sans">Functional Neuroimaging Lab</h1>
            <p className="text-lg text-foreground mb-0 leading-relaxed font-sans">
              Our lab focuses on understanding the human brain through advanced neuroimaging techniques.
              {/* We use MRI to investigate brain function and abnormalities in health and disease. */}
            </p>
            <div className="flex flex-wrap gap-1 justify-center"></div>
          </div>
        </div>
      </section>

      {/* Brain Imaging Techniques */}
      <section className="mb-16">
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Image
              src="/images/brain-imaging-techniques.png"
              alt="Brain imaging techniques including OEF, CMRO2, CBF, QSM, T1w+C, and T2-FLAIR"
              width={1200}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-sm text-foreground/70 mt-2 leading-relaxed font-sans">
              Representative brain imaging modalities used in our research: Oxygen Extraction Fraction (OEF), Cerebral
              Metabolic Rate of Oxygen (CMRO₂), Cerebral Blood Flow (CBF), Quantitative Susceptibility Mapping (QSM),
              T1-weighted with Contrast, and T2-FLAIR sequences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-16">
        <Card className="bg-muted border-secondary/20">
          <CardHeader>
            <CardTitle className="text-primary font-sans">Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed font-sans">
              Our group develops novel biophysics models and data processing algorithms to quantify clinically relevant
              tissue properties, such as cerebral oxygenation, and uses them in neurologic disorders, including stroke,
              multiple sclerosis, and dementia, to investigate their causes, progress, and therapeutic targets.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Recent News */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-10 font-sans">News</h2>
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent"></div>

          <div className="space-y-10">
            {recentNews.map((news, index) => (
              <div key={index} className="relative flex items-start">
                {/* Point sur la timeline */}
                <div className="absolute left-4 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md"></div>

                {/* Contenu de la news */}
                <div className="ml-12 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge
                      variant={news.type === "Grant" ? "default" : news.type === "Award" ? "secondary" : "outline"}
                      className={`${news.type === "Grant" ? "bg-accent text-white" : news.type === "Award" ? "bg-secondary text-foreground" : "border-accent text-accent"}`}
                    >
                      {news.type === "Grant" && <Award className="w-3 h-3 mr-1" />}
                      {news.type === "Award" && <Award className="w-3 h-3 mr-1" />}
                      {news.type === "Milestone" && <BookOpen className="w-3 h-3 mr-1" />}
                      {news.type}
                    </Badge>
                    <span className="text-sm text-foreground/60 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {news.monthYear}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3 font-sans">{news.title}</h3>
                  <p className="text-foreground leading-relaxed font-sans">{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brain Imaging Banner */}
      <section className="mb-16">
        <Card className="overflow-hidden"></Card>
      </section>
    </div>
  )
}
