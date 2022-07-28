import styles from '../styles/headers.module.css'

import  moon from "../images/moon1.svg"

const SearchBar = () => { 
  // const [imgSrc ,setimgSrc] = useState(false)
  let imgSrc = false;
  let src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0jSxOH9WeWau8dB7awqYz1pUcKGWb1-H1w&usqp=CAU"
   
  
  const btnimg = () => {
    console.log(src)
    if (imgSrc===false) {
       imgSrc = true
       src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAAANDQ11dXXy8vIEBAT4+Pg4ODj8/PxZWVns7OxpaWkJCQnd3d2JiYkREREqKirQ0NAsLCwzMzNeXl4iIiLHx8eysrKmpqZ8fHzl5eW9vb1CQkLT09OPj4+fn58ZGRltbW1PT0+VlZXBwcFKSkqbm5tAQEA70MFAAAAEgUlEQVR4nO2ciZaqMAyGp7IqguKG6LgyOu//hndwmasO0KQgCefke4L8p02aJmk/PgRBEARBEARBEARBEARBEARBEAShmEGcZJFludR21MBdZDNvpC4sqY0xxV2nnqN+CajtMcNe9nvqkXEXN5af9IfqGSemNgrPINqrP6TUVqEJg9fF6OTGCvtOgQylvqgNw7EKimWoPrVlKNyoaFPlDFfUtmFYj0tkKGVR24bADkplqJFNbR2cr3m5jg6FXj8tcfILvQG1fVAGnxUyOuQhcdW2+klOuhKykrKge+NIbSCQc5V75KypLYQRaWSouU9tIohUp6MjsVevQ22obYSw1esYU9sIYafX0YmdtdbFq5wFtZV6whFAx4h/zLKrz/MbHTgNjxAdakttphZAwMphXwSKIY7+c8fl7iLuBLYgU2pDdVgwHezrvcCNxd7XfQ+oQyXUplYDSU2u8M4Y7YIadQm860CA3P1Gj9rUSgY9vYIbvHN4+IIoj9rWKhALok7UxlahrTY8wDn39eEhi3dbZInQoWbU1lZQXebtjpAQo4Pz1kLEXsXa2cvba0XwDb8blA7G9yrczlJzantLAV9ErrBNGgc4HXzTeNRpmMO1GnTACuF61Z1ihUTUFhfjQosnvzDNURZYHWpCbXIx8OrJHYfnvNkBLYRpn+eEF8LT23EZ4wWe+a9mVqOIHse+go3XwXMqE3c7vMFxxgl/jCiemXxiIoRj3mgmhOHeQifxF/b84hY+Q7nAL5U3FMKvlGK2tZQKqQ1/xczZGfao14ZChtwGmI0OxBxuEdgoReG4JEZJI8slQXQPn3GYBS7gSFABzO5XsKG5QnjNlUOHmwqYsyqnmB7tOaz8Pa4hxOFUGPINqg+/zDm1GJB9nmc41YFrePsPZ2rz/2Oa/14Z8nETG91XeGLP59nYdy0hasrG4TEzTkUcuVQijDP5O2xCF7qL+AqXe2/dvaXUgVrClVW9uJUz4+EnNVL5O0cWmXC9M/GKx+EO74OeVmmYc5iZzxoQooYMPkRyIa/29BzoHaV+BL4wId9eiFcXlQwj6jgMfLmnZ0rclnObCFwXnIA2EDdxltwYbUmdHjVXrmGfEUoJ65RT/kqJ6O5bDYXgO70DVSyGv0SE4p1p/D40bjGU4pzOFMUJw161homVtL4wFf9p1RQzi9arFg99t/b1vQpn/tkP0mibnbdvX6JVQzmXhhb+I4kbPU1KaOV1U1K/EqHju51j/z2h64HWaqyN3HvLGbcXi9+qZNLmmbJ7n5+0XDXSfUFnzGfbOfGimbLKK0H7N/rQfLSjHJLXAW6/aRkjqpGPrFlH8eiajZsGt5eTUha8XKupODyhHkKPG8nrhyl9UdjP6gfiE49ZO9uq5/RTPvNppf+UAxgzaJo8sLLMCizf/B4D2Bk6Fg9nfAZunlgEGL/3MjYzKn/xkxmsOOFt+cwMlRFHp+qFGQft1+NM2eysU0FjqDftR2vGG6oEP1wvs9Q6BMHBSqNdEndmHQRBEARBEARBEARBEARBEARBEIQW+Aew+juObFsF3QAAAABJRU5ErkJggg==";
         
      } else {
       imgSrc = false;
       src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0jSxOH9WeWau8dB7awqYz1pUcKGWb1-H1w&usqp=CAU";
    }
  };
return <><div className={styles.head}>
            <h2>devfinder</h2>
            <h3
              style={{
                marginTop: "0",
                
              }}
            >
              LIGHT{" "}
              <button className={styles.imgBtn} onClick={btnimg}>
                <img
                  className={styles.img}
                  src={moon}
                  style={{
                    backGround: "white",
                    height: "35px",
                  }}
                  alt = "updating"
                />
              </button>
            </h3>
          </div></>
}

export default SearchBar

