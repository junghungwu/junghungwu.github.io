import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function MembersPage() {
  const principalInvestigator = {
    name: "Junghun Cho",
    title: "PhD, PI",
    image: "/images/members/junghuncho.jpg",
    description:
      "Junghun Cho is an Assistant Professor in the Department of Biomedical Engineering at George Washington Univesrity. He received a PhD in Biomedical Engineering in 2019 at Cornell University under supervision of Dr. Yi Wang, a MS in Physics at the University of Wisconsin Madison, and a BS in Physics at the University of Michigan Ann Arbor. From 2020 to 2022, he worked as a Postdoctoral Associate at the Weill Cornell Medicine and received a NIH K99 award on July 2021.",
    links: [
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?hl=en&tzom=300&user=uoqM6JEAAAAJ&inst=17395704991083290304",
      },
      {
        label: "CV (July 2025)",
        url: "/images/Junghun_Cho_CV_0707_2025.pdf",
      },
    ],
  }

  const labMembers = [
    {
      name: "Arpita Misra",
      title: "PhD student",
      image: "/images/members/arpitamisra.jpg",
      description:
        "Arpita Misra received a BS in Physics and a MS in Biomedical Instrumentation from University of Calcutta. Her research project involves developing data acquisition and processing for accurate OEF quantification.",
      links: [],
      useContain: true,
    },
    {
      name: "Renlong Yang",
      title: "PhD student",
      image: "/images/members/renlongyang.jpg",
      description:
        "Renlong Yang received a MS in Theoretical Physics from Sun Yat-sen University. His research project involves developing biophysics modeling for OEF quantification.",
      links: [],
      useContain: true,
    },
    {
      name: "Liukailai Ding",
      title: "PhD student",
      image: "/images/members/liukailai.jpg",
      description:
        "Liukailai received a BS in Automation from Jinling Institute of Technology and a MS in Control Science and Engineering at Southeast University. His research project involves developing data processing for OEF quantification.",
      links: [],
      useContain: true,
    },
    {
      name: "Tian Qiu",
      title: "PhD student",
      image: "/images/members/tianqiu.jpg",
      description:
        "Tian Qiu received a BS in Biomedical Engineering at Huazhong University of Science & Technology. His research project involves developing data processing for OEF quantification.",
      links: [],
      useContain: false,
    },
  ]

  const alumni = [
    {
      name: "Quinn Boyer",
      title: "Former MS Student at SUNY Buffalo (2023-2025)",
    },
    {
      name: "Ada Ally",
      title: "Former MS student at SUNY Buffalo (2022-2025)",
    },
    {
      name: "Shamshar Khan",
      title: "Former MS student at SUNY Buffalo (2022-2024)",
     },
    
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-primary mb-6 font-sans">Lab Members</h1>
        <p className="text-lg text-foreground leading-relaxed font-sans">
          {/* Meet our diverse team of researchers dedicated to advancing our understanding of brain function through */}
        </p>
      </div>

      {/* Principal Investigator - Prominent Display */}
      <section className="mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-muted rounded-lg p-8 border border-secondary/20">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              {/* PI Photo */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={principalInvestigator.image || "/placeholder.svg"}
                    alt={principalInvestigator.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-contain"
                  />
                </div>
              </div>

              {/* PI Information */}
              <div className="lg:col-span-2 text-center lg:text-left space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2 font-sans">{principalInvestigator.name}</h2>
                  <p className="text-xl text-accent font-medium font-sans">{principalInvestigator.title}</p>
                </div>

                <p className="text-foreground leading-relaxed text-base font-sans">
                  {principalInvestigator.description}
                </p>

                {principalInvestigator.links.length > 0 && (
                  <div className="flex gap-4 justify-center lg:justify-start pt-2">
                    {principalInvestigator.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-accent text-white border-accent hover:bg-accent/90"
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Members Grid */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-primary mb-10 font-sans text-center">Research Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {labMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white border-secondary/20 hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
                {/* Member Photo */}
                <div className="sm:col-span-1 flex justify-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className={`w-full max-w-[200px] h-48 ${member.useContain ? "object-contain" : "object-cover"}`}
                  />
                </div>

                {/* Member Information */}
                <div className="sm:col-span-2 space-y-4 font-sans">
                  <div>
                    <h3 className="font-bold text-primary mb-1 font-sans text-xl">{member.name}</h3>
                    <p className="text-accent font-medium text-base">{member.title}</p>
                  </div>

                  <p className="text-foreground leading-relaxed text-base">{member.description}</p>

                  {member.links.length > 0 && (
                    <div className="flex gap-2 pt-2">
                      {member.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="outline"
                          size="sm"
                          asChild
                          className="bg-accent text-white border-accent text-xs hover:bg-accent/90"
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Alumni Section */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-10 font-sans text-center">Alumni</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alumnus, index) => (
            <Card key={index} className="bg-white border-secondary/20 hover:shadow-md transition-shadow">
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-primary mb-1 font-sans text-lg">{alumnus.name}</h3>
                  <p className="text-accent font-medium text-sm mb-2">{alumnus.title}</p>
                  <p className="text-foreground text-sm font-sans">
                    
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
