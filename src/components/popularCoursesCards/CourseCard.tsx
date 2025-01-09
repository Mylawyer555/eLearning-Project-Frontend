


//defining type
type Props = {
    course: {
        id: number;
        title: string;
        description: string;
        image: string;
        price: number;
        buttonLabel: string;
    }
}

const CourseCard = ({course}:Props) => {
  return (
      <div className="course-card">
          <div className="course-card-img ">
              <img src={course.image} alt={course.title} height={200} width={300} />
          </div>

          <div className="course-details">
              <p className="course-title">{course.title}</p>
              <h4 className="course-description">{course.description}</h4>
              <div className="price-btn-wrap">
                <p className="course-price">${course.price}</p>
                <button>{ course.buttonLabel}</button>
              </div>
              
          </div>
       
      </div>

   
  )
}

export default CourseCard
