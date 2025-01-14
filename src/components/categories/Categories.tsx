import { categories } from "../../data/data"



export const Categories = () => {
  return (
    <div className="category-btn-wrap">
       
          {categories.map((cate) => { 
              return (
                  <button className="cate-btn" key={cate.id}>
                      {cate.label}
                </button>
            )
          })}
    </div>
  )
}
