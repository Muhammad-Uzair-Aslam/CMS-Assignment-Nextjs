
import Card from './schemas/card'
import Courses from './schemas/courses'
import Footer from './schemas/footer'
import Header from './schemas/header'
import Navigation from './schemas/navigation'
import services from './schemas/services'
import Testimonial from './schemas/testimonial'

export const schema = {
  types: [services,Card,Testimonial,Courses,Navigation,Header,Footer],
}
