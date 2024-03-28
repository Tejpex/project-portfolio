import PropTypes from "prop-types";

export const Tags = ({ tags }) => {
  return (
    <div className="tags-box">
      {tags.map((tag) => (
        <p key={tag}>
          {tag}
        </p>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
}