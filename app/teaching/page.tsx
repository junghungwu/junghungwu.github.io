import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, User, BookOpen, Clock } from "lucide-react"

export default function TeachingPage() {
  const professorInfo = {
    name: "Junghun Cho, PI",
    office: "6655 Science and Engineering Hall, Department of Biomedical Engineering",
    university: "George Washington University",
    address: "Washington, DC 20052",
    phone: "202-994-0857",
    email: "junghunc@gwu.edu",
    lab: "B1830 Science and Engnineering Hall",
  }

  const courses = [
    {
      code: "BME 4830",
      title: "Introduction to Medical Imaging Methods",
      credits: 3,
      semester: "Spring 2026",
      instructor: "Dr. Junghun Cho",
      // description:
        // "Advanced course covering MRI physics, pulse sequences, and quantitative imaging methods. Focus on cutting-edge techniques including quantitative susceptibility mapping (QSM), diffusion tensor imaging, and oxygen extraction fraction mapping.",
      prerequisites: "TBA",
      schedule: "TBA",
      location: "TBA",

    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6 font-sans">Teaching</h1>
        <p className="text-lg text-foreground leading-relaxed font-sans">
          {/* Our lab is committed to training the next generation of biomedical engineers through courses, research, and mentorship. */}
        </p>
      </div>

      {/* Courses Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-10 font-sans">Courses</h2>
        <div className="space-y-8">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white border-secondary/20 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-primary font-sans text-xl mb-2">
                      {course.code}: {course.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-accent text-white">
                        <BookOpen className="w-3 h-3 mr-1" />
                        {course.credits} Credits
                      </Badge>
                      <Badge variant="outline" className="border-accent text-accent">
                        <Calendar className="w-3 h-3 mr-1" />
                        {course.semester}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground leading-relaxed font-sans">{course.description}</p>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground">
                      <User className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                      <span>
                        <strong>Instructor:</strong> {course.instructor}
                      </span>
                    </div>
                    <div className="flex items-center text-foreground">
                      <Clock className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                      <span>
                        <strong>Schedule:</strong> {course.schedule}
                      </span>
                    </div>
                    <div className="flex items-center text-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-accent flex-shrink-0" />
                      <span>
                        <strong>Location:</strong> {course.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start text-foreground">
                      <Calendar className="w-4 h-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                      <span>
                        {/* <strong>Application Deadline:</strong> {course.applicationDeadline} */}
                      </span>
                    </div>
                    <div className="text-foreground">
                      <strong>Prerequisites:</strong> {course.prerequisites}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-3xl font-bold text-primary mb-10 font-sans">Contact Information</h2>
        <Card className="bg-white border-secondary/20">
          <CardHeader>
            <CardTitle className="text-primary font-sans">{professorInfo.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start text-foreground">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-sm">{professorInfo.office}</p>
                  <p className="text-sm">{professorInfo.university}</p>
                  <p className="text-sm">{professorInfo.address}</p>
                </div>
              </div>

              <div className="flex items-center text-foreground">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>{professorInfo.phone}</span>
              </div>

              <div className="flex items-center text-foreground">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <a href={`mailto:${professorInfo.email}`} className="text-accent hover:text-accent/80">
                  {professorInfo.email}
                </a>
              </div>

              <div className="flex items-start text-foreground">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium">Lab Location</p>
                  <p className="text-sm">{professorInfo.lab}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
