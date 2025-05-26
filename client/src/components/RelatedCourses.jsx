import React from 'react'
import CourseCard from './CourseCard'


function RelatedCourses({ courses }) {
  return (
    <section>
    <div className="flex gap-6 flex-wrap">
      {courses.map((course, i) => (
        <CourseCard key={i} {...course} />
      ))}
    </div>
  </section>
  )
}

export default RelatedCourses