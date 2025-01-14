import { courseData } from "../../data/data"
import CourseCard from "./CourseCard"


const PopularCoursesDiv = () => {
    return (
        <div className="popular-courses">
            {courseData.map((course) => {
                return (
                    <div key={course.id}>
                        <CourseCard course={course} />
                    </div>
                );
            })}

            
    </div>
  )
}

export default PopularCoursesDiv