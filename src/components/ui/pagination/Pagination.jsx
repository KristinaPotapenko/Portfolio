import style from "./Pagination.module.scss";

export const Pagination = ({ projects, activeSlide, setActiveSlide }) => {
  return (
    <div className={style.pagination}>
      {projects.map((project) => {
        return (
          <button
            onClick={() => setActiveSlide(Number(project.id) - 1)}
            key={project.id}
            className={`${style.paginationDot} ${
              Number(project.id) - 1 === activeSlide &&
              style.paginationDotActive
            }`}
          ></button>
        );
      })}
    </div>
  );
};
